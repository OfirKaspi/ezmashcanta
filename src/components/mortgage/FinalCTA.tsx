"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 via-primary/8 to-primary/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            השאירו פרטים עכשיו וניצור איתכם קשר תוך 24 שעות
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>ללא עלות</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>ללא התחייבות</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>שיחה ראשונית חינם</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-3xl mx-auto">
          {/* Phone CTA */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground p-8 rounded-2xl shadow-2xl group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-white/20 rounded-xl w-fit backdrop-blur-sm">
                <Phone className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                מעדיפים לדבר ישירות?
              </h3>
              <p className="mb-8 opacity-95 text-lg">
                צלצלו אלינו עכשיו ונענה על כל השאלות שלכם
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-primary hover:bg-gray-50 hover:scale-105 transition-all duration-200 min-h-[44px] font-semibold shadow-lg"
                onClick={() => trackCTAClick("phone_call", "final_cta")}
              >
                <a
                  href="tel:0552528601"
                  className="flex items-center justify-center gap-2"
                  aria-label="צלצול טלפון"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>055-252-8601</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Why Now */}
          <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-6 p-3 bg-primary/10 rounded-xl w-fit">
              <h3 className="text-2xl font-semibold text-foreground">
                למה עכשיו?
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-primary/20 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed flex-1">כל יום שעובר עולה לכם כסף</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-primary/20 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed flex-1">תנאי השוק משתנים כל הזמן</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-primary/20 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed flex-1">ייעוץ מקצועי יכול לחסוך עשרות אלפי שקלים</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-primary/20 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed flex-1">השיחה הראשונית חינם וללא התחייבות</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
