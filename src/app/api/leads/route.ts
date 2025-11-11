import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations";
import { supabase } from "@/lib/supabase";

// Rate limiting configuration: max 5 requests per 10 minutes per IP
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 600; // seconds (10 minutes)

// Simple in-memory rate limiting (for production, consider using Redis or Supabase)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW * 1000 });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Capture user's IP and request origin for security
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";
    // const origin = req.headers.get("origin"); // Reserved for future origin validation
    const userAgent = req.headers.get("user-agent") || "";

    // Optional: Block requests that don't come from your domain (uncomment in production)
    // const origin = req.headers.get("origin");
    // if (origin && origin !== "https://yourdomain.com") {
    //   return NextResponse.json(
    //     { success: false, message: "Unauthorized origin" },
    //     { status: 403 }
    //   );
    // }

    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "יותר מדי בקשות. אנא נסה שוב מאוחר יותר.",
        },
        { status: 429 }
      );
    }

    // Parse and validate form input from body using Zod
    const body = await req.json();
    const validatedLead = leadFormSchema.parse({
      fullName: body.fullName,
      phone: body.phone,
      email: body.email || undefined,
      mortgageType: body.mortgageType,
    });

    // Sanitize input: remove newlines, trim, and limit length
    const sanitize = (val: string) =>
      val?.replace(/[\n\r]+/g, "").trim().slice(0, 100);

    // Prepare lead data for Supabase
    const leadData = {
      full_name: sanitize(validatedLead.fullName),
      phone: sanitize(validatedLead.phone),
      email: validatedLead.email ? sanitize(validatedLead.email.toLowerCase()) : null,
      mortgage_type: validatedLead.mortgageType,
      source: body.source || "website",
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      ip_address: ip !== "unknown" ? ip : null,
      user_agent: userAgent || null,
      converted: false,
    };

    // Insert lead into Supabase
    const { error } = await supabase.from("leads").insert(leadData);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "אירעה שגיאה בשמירת הפרטים. אנא נסה שוב מאוחר יותר.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "הפרטים נשלחו בהצלחה, ניצור איתך קשר בהקדם",
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("API Error:", errorMessage);

    // Return Zod validation errors if form input is invalid
    if (error instanceof Error && error.name === "ZodError" && 'errors' in error) {
      const zodError = error as { errors: Array<{ message: string }> };
      const errorMessages = zodError.errors.map((err) => err.message).join(", ");
      return NextResponse.json(
        { success: false, message: errorMessages },
        { status: 400 }
      );
    }

    // Catch-all server error
    return NextResponse.json(
      {
        success: false,
        message: "אירעה שגיאה, אנא נסה שוב מאוחר יותר",
      },
      { status: 500 }
    );
  }
}
