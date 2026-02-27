import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import WppFloatingButton from "@/components/WppFloatingButton";
import { Toaster } from "@/components/ui/sonner";
import MetaConversionsTracker from "@/components/analytics/MetaConversionsTracker";
import CookieConsentBanner from "@/components/analytics/CookieConsentBanner";
import { getProfile } from "@/services/getProfile";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  openGraph: {
    title: "Kelly Cardoso | Massoterapia e Estética",
    description:
      "Minha paixão está na arte de proporcionar relaxamento e alívio, e meu trabalho abrange desde massagens relaxantes até tratamentos para dores específicas e métodos na área de emagrecimento.",
    url: "https://kellyalves.vercel.app/",
    siteName: "Kelly Cardoso",
    images: [
      {
        url: "http://localhost:3000/images/open-graph.png",
        width: 800,
        height: 600,
      },
      {
        url: "http://localhost:3000/images/open-graph.png",
        width: 1800,
        height: 1600,
        alt: "Kelly Cardoso",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileData = await getProfile();
  const isMetaConversionsEnabled = Boolean(
    process.env.META_PIXEL_ID && process.env.META_ACCESS_TOKEN,
  );

  return (
    <html lang="pt-BR" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${playfair.variable} bg-surface-brand font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <MetaConversionsTracker enabled={isMetaConversionsEnabled} />
          <CookieConsentBanner />
          <WppFloatingButton whatsappUrl={profileData[0].whatsappUrl} />
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
