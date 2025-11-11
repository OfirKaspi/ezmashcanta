"use client";

import { Home, RefreshCw, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { trackPathSelection } from "@/lib/analytics";
import Image from "next/image";

export default function Hero() {
  const handlePathSelect = (sectionId: string, mortgageType: "new" | "refinance" | "reverse") => {
    trackPathSelection(mortgageType);
    scrollToSection(sectionId);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-background/80" />
        {/* Additional green tint overlay to match theme */}
        <div className="absolute inset-0 bg-primary/5" />
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl text-center space-y-8 relative z-10">
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            נמאס לכם להיות בני ערובה של הריבית?
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
            ייעוץ משכנתאות מקצועי שיחסוך לכם עשרות אלפי שקלים ויחזיר לכם שליטה על העתיד הפיננסי שלכם
          </p>
        </div>

        {/* Path Selection Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <Button
            onClick={() => handlePathSelect("new-mortgage", "new")}
            size="lg"
            className="h-28 md:h-36 text-lg md:text-xl font-semibold flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-h-[44px] rounded-2xl border-2 border-primary/20"
            aria-label="משכנתא חדשה"
          >
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Home className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
            </div>
            <span>משכנתא חדשה</span>
          </Button>

          <Button
            onClick={() => handlePathSelect("refinance-mortgage", "refinance")}
            size="lg"
            className="h-28 md:h-36 text-lg md:text-xl font-semibold flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-h-[44px] rounded-2xl border-2 border-secondary/20"
            aria-label="מחזור משכנתא"
          >
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <RefreshCw className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
            </div>
            <span>מחזור משכנתא</span>
          </Button>

          <Button
            onClick={() => handlePathSelect("reverse-mortgage", "reverse")}
            size="lg"
            className="h-28 md:h-36 text-lg md:text-xl font-semibold flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-h-[44px] rounded-2xl border-2 border-accent/20"
            aria-label="משכנתא הפוכה"
          >
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Users className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
            </div>
            <span>משכנתא הפוכה</span>
          </Button>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>ללא עלות</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>ללא התחייבות</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>שיחה ראשונית חינם</span>
          </div>
        </div>
      </div>
    </section>
  );
}

