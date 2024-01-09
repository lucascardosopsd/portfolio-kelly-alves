import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Theme from "../components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kelly Alves | Massoterapia e Estética",
  description:
    "Minha paixão está na arte de proporcionar relaxamento e alívio, e meu trabalho abrange desde massagens relaxantes até tratamentos para dores específicas e métodos na área de emagrecimento.",
  openGraph: {
    images: [
      {
        url: "/images/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Imagem de capa para o seu portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`bg-beige-300 ${poppins.className}`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
