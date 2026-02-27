"use client";

import { useEffect, useState } from "react";
import {
  readCookieConsent,
  saveCookieConsent,
  type CookieConsentState,
} from "@/components/analytics/cookieConsent";

const CookieConsentBanner = () => {
  const [consent, setConsent] = useState<CookieConsentState | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setConsent(readCookieConsent());
    setLoaded(true);
  }, []);

  const handleConsent = (value: CookieConsentState) => {
    saveCookieConsent(value);
    setConsent(value);
  };

  if (!loaded || consent !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-4 backdrop-blur tablet:p-5">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 tablet:flex-row tablet:items-center tablet:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground">Cookies e privacidade</p>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Usamos cookies para medir acessos e conversoes. Voce pode aceitar ou recusar os
            cookies nao essenciais.
          </p>
        </div>

        <div className="flex flex-col gap-2 tablet:flex-row">
          <button
            type="button"
            onClick={() => handleConsent("rejected")}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
