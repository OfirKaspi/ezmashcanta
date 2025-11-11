"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  source?: string;
}

export function useUTMParams(): UTMParams {
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    const params: UTMParams = {};
    
    const utmSource = searchParams.get("utm_source");
    const utmMedium = searchParams.get("utm_medium");
    const utmCampaign = searchParams.get("utm_campaign");
    const source = searchParams.get("source");

    if (utmSource) params.utm_source = utmSource;
    if (utmMedium) params.utm_medium = utmMedium;
    if (utmCampaign) params.utm_campaign = utmCampaign;
    if (source) params.source = source;

    // Store in sessionStorage for form submission
    if (Object.keys(params).length > 0) {
      sessionStorage.setItem("utm_params", JSON.stringify(params));
    }

    setUtmParams(params);
  }, [searchParams]);

  return utmParams;
}

