import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import { asset } from "./asset";
import "./globals.css";

const f_fam = Instrument_Sans({ variable: "--f-fam", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shizuka Luxury | Sell your luxury pieces privately in Dubai",
  description:
    "Get cash for your handbags, watches and jewellery within 72 hours. Shizuka collects, authenticates and gathers private offers on your behalf.",
  openGraph: {
    title: "Shizuka Luxury",
    description: "A private way to sell your handbags, watches and jewellery in Dubai. Cash within 72 hours.",
    images: [{ url: asset("/images/lounge-handbag.jpg"), width: 2000, height: 1333, alt: "Seen from above: a woman in an olive suit on a cream boucl\u00e9 sofa, a black quilted handbag at her side" }],
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C1B19",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${f_fam.variable}`}>
      <body>{children}</body>
    </html>
  );
}
