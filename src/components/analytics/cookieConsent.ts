export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_CONSENT_EVENT = "cookie-consent-updated";

export type CookieConsentState = "accepted" | "rejected";

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);

    if (value === "accepted" || value === "rejected") {
      return value;
    }

    return null;
  } catch {
    return null;
  }
}

export function saveCookieConsent(value: CookieConsentState): void {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
  } catch {
    // Ignore storage errors (private mode, blocked storage, etc).
  }
}
