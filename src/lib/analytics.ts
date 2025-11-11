"use client";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export function trackPathSelection(mortgageType: "new" | "refinance" | "reverse") {
  trackEvent("path_selection", "engagement", mortgageType);
}

export function trackFormFocus(fieldName: string) {
  trackEvent("form_field_focus", "form_interaction", fieldName);
}

export function trackFormSubmission(success: boolean, mortgageType?: string) {
  trackEvent(
    success ? "form_submission_success" : "form_submission_error",
    "form_interaction",
    mortgageType
  );
}

export function trackCTAClick(ctaText: string, location: string) {
  trackEvent("cta_click", "engagement", `${location}_${ctaText}`);
}

export function trackFAQOpen(question: string) {
  trackEvent("faq_open", "engagement", question);
}

export function trackScrollDepth(depth: number) {
  trackEvent("scroll_depth", "engagement", `${depth}%`, depth);
}

