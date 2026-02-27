"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  readCookieConsent,
} from "@/components/analytics/cookieConsent";

type MetaConversionsTrackerProps = {
  enabled: boolean;
};

type ConversionEventPayload = {
  eventName: "Lead" | "PageView";
  eventId: string;
  eventSourceUrl: string;
  customData?: {
    source: "whatsapp_click";
    linkUrl: string;
  };
  userData: {
    fbp?: string;
    fbc?: string;
  };
};

const WHATSAPP_HOSTS = [
  "wa.me",
  "api.whatsapp.com",
  "chat.whatsapp.com",
  "web.whatsapp.com",
  "whatsapp.com",
];

function getCookieValue(name: string): string | undefined {
  const cookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));

  if (!cookie) {
    return undefined;
  }

  const value = cookie.split("=")[1];
  return value ? decodeURIComponent(value) : undefined;
}

function isWhatsappLink(href: string): boolean {
  try {
    const url = new URL(href, window.location.origin);
    return WHATSAPP_HOSTS.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`));
  } catch {
    return false;
  }
}

function sendConversionEvent(payload: ConversionEventPayload): void {
  const body = JSON.stringify(payload);

  if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon("/api/meta/conversions", blob);
    return;
  }

  void fetch("/api/meta/conversions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  });
}

const MetaConversionsTracker = ({ enabled }: MetaConversionsTrackerProps) => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setHasConsent(readCookieConsent() === "accepted");

    const handleConsentUpdate = () => {
      setHasConsent(readCookieConsent() === "accepted");
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentUpdate);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentUpdate);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !hasConsent) {
      return;
    }

    sendConversionEvent({
      eventName: "PageView",
      eventId: crypto.randomUUID(),
      eventSourceUrl: window.location.href,
      userData: {
        fbp: getCookieValue("_fbp"),
        fbc: getCookieValue("_fbc"),
      },
    });
  }, [enabled, hasConsent]);

  useEffect(() => {
    if (!enabled || !hasConsent) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || !isWhatsappLink(href)) {
        return;
      }

      sendConversionEvent({
        eventName: "Lead",
        eventId: crypto.randomUUID(),
        eventSourceUrl: window.location.href,
        customData: {
          source: "whatsapp_click",
          linkUrl: href,
        },
        userData: {
          fbp: getCookieValue("_fbp"),
          fbc: getCookieValue("_fbc"),
        },
      });
    };

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [enabled, hasConsent]);

  return null;
};

export default MetaConversionsTracker;
