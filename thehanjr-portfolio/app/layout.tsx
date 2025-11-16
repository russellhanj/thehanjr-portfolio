import type { Metadata } from "next";
import "./globals.css";
import { PageTransition } from "./components/layout/page-transition";
import { Fraunces, DM_Sans } from "next/font/google";

const headingFont = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "thehanjr | Photography",
  description: "Cinematic, calm photography by Russell Han Josef in Vancouver.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${headingFont.variable}
          ${bodyFont.variable}
        `}
      >
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
