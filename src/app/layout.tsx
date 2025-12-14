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

export const metadata: Metadata = {
  title: "Everforest", // Default title if not specified on page
  description:
    "A warm, comfortable, and pleasant color scheme based around green designed to be easy on the eyes.",
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
      <body
        className={`${fontMain.variable} ${fontMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
