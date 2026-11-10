import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Gaurav Kumar | Software & Blockchain Developer",
    template: "%s | Gaurav Kumar",
  },
  description:
    "Portfolio of Gaurav Kumar, a Software Developer and Blockchain Developer building Next.js products, Rust services, Solana programs, Ethereum contracts, and zero-knowledge systems.",
  keywords: [
    "Gaurav Kumar",
    "Software Developer",
    "Blockchain Developer",
    "Solana Developer",
    "Rust Developer",
    "Next.js Developer",
    "Zero Knowledge",
    "Smart Contracts",
  ],
  authors: [{ name: "Gaurav Kumar", url: "https://github.com/gauravkumar7294" }],
  openGraph: {
    title: "Gaurav Kumar | Software & Blockchain Developer",
    description:
      "Full-stack and blockchain portfolio featuring Solana, Ethereum, Rust, Next.js, ZK proofs, and production-style engineering projects.",
    type: "website",
    locale: "en_IN",
    siteName: "Gaurav Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Kumar | Software & Blockchain Developer",
    description:
      "Full-stack and blockchain portfolio featuring Solana, Ethereum, Rust, Next.js, ZK proofs, and production-style engineering projects.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
