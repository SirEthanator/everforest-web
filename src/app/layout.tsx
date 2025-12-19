import type { Metadata } from "next";
import { Roboto_Flex, Roboto_Mono } from "next/font/google";
import "@/styles/globals.scss";

const fontMain = Roboto_Flex({
  variable: "--font-main",
  subsets: ["latin"],
  axes: [
    "slnt",
    "wdth",
    "opsz",
    "GRAD",
    "XOPQ",
    "YOPQ",
    "XTRA",
    "YTUC",
    "YTLC",
    "YTAS",
    "YTDE",
    "YTFI"
  ]
});

const fontMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"]
});

const SITE_NAME = "Everforest";
const SITE_DESC =
  "Everforest is a green based color scheme; it's designed to be warm and soft in order to protect developers' eyes.";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME
  },
  description: SITE_DESC,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESC
  },
  keywords: [
    "everforest",
    "green",
    "color",
    "colours",
    "colorscheme",
    "colourscheme",
    "color scheme",
    "colour scheme",
    "color palette",
    "colour palette"
  ],
  authors: [{ name: "Ethan M.", url: "https://github.com/SirEthanator" }],
  verification: { google: "FjIB76Sma1-os92AEkFdtb5Hl5Sf20bXW8BfH2WzGVQ" }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontMain.variable} ${fontMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
