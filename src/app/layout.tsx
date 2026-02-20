import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "P95 Consulting LLC | Cloud & Data Engineering Solutions",
  description:
    "P95 Consulting helps organizations modernize cloud infrastructure, build reliable data platforms, and automate enterprise systems.",
  keywords: [
    "cloud consulting",
    "data engineering",
    "AWS",
    "cloud migration",
    "DevOps",
    "enterprise integration",
    "P95 Consulting",
  ],
  authors: [{ name: "P95 Consulting LLC" }],
  openGraph: {
    title: "P95 Consulting LLC | Cloud & Data Engineering Solutions",
    description:
      "P95 Consulting helps organizations modernize cloud infrastructure, build reliable data platforms, and automate enterprise systems.",
    url: "https://p95consulting.com",
    siteName: "P95 Consulting LLC",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "P95 Consulting LLC | Cloud & Data Engineering Solutions",
    description:
      "P95 Consulting helps organizations modernize cloud infrastructure, build reliable data platforms, and automate enterprise systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://p95consulting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        /> */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
