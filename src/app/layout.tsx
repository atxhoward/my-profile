import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { Footer } from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import { getSiteMeta } from "@/lib/queries";
import "./globals.css";

const display = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Austin Howard | Full Stack Software Engineer",
  description: "Profile site built with Next.js, Tailwind, Drizzle, and Neon.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteMeta = await getSiteMeta();

  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Navbar brand={siteMeta?.navLabel ?? "EDA"} />
        {children}
        {siteMeta?.includeFooter ?? true ? <Footer /> : null}
      </body>
    </html>
  );
}
