import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { publicSiteUrl } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteName = "Yuzu Hair & Beauty";

export const metadata: Metadata = {
  metadataBase: new URL(`${publicSiteUrl}/`),
  title: {
    default: `${siteName} | Hair Salon London`,
    template: `%s | ${siteName}`,
  },
  description:
    "Calm, precise hair and beauty in London. Cuts, colour, treatments and a relaxed salon experience.",
  openGraph: {
    title: `${siteName} | London`,
    description:
      "Calm, precise hair and beauty in London. Book your consultation.",
    url: publicSiteUrl,
    siteName,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | London`,
    description: "Calm, precise hair and beauty in London.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
