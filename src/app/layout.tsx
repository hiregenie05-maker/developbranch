import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import ParticleBackgroundWrapper from "@/components/ui/ParticleBackgroundWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TailorAI — AI-Powered Resume Tailoring",
  description:
    "Land your dream job with a perfectly tailored resume. Powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="relative min-h-full bg-gray-950 text-gray-100">
        <ParticleBackgroundWrapper />
        <FloatingOrbs />
        <Navbar />
        <main className="relative z-10 flex min-h-screen flex-col pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
