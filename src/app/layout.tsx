import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Theme from "../components/ThemeProvider";
import WppFloatingButton from "@/components/WppFloatingButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  openGraph: {
    title: "Kelly Alves | Massoterapia e Estética",
    description:
      "Minha paixão está na arte de proporcionar relaxamento e alívio, e meu trabalho abrange desde massagens relaxantes até tratamentos para dores específicas e métodos na área de emagrecimento.",
    url: "https://kellyalves.vercel.app/",
    siteName: "Kelly Alves",
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
        alt: "Kelly Alves",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`bg-beige-300 ${poppins.className}`}>
        <Theme>
          <WppFloatingButton />
          {children}
        </Theme>
      </body>
    </html>
  );
}
