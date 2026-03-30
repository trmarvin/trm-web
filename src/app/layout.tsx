import "./globals.css";
import type { Metadata } from "next";
import { Source_Sans_3, EB_Garamond } from "next/font/google";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SefariaLinker from "@/components/sefaria/SefariaLinker";

const dmSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

const sourceSerif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Tamar Marvin",
  description: "Jewish texts, ideas, people, and history",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable}`}>
      <body>
        <SefariaLinker />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
