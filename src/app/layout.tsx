import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { isPreview, siteUrl } from "./lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(isPreview && process.env.DEPLOY_PRIME_URL ? process.env.DEPLOY_PRIME_URL : siteUrl),
  title: "Erblin Thaqi | Full-Stack Developer",
  description: "Erblin Thaqi, full-stack developer from Kosovo. Explore my web and desktop projects, and get in touch about junior developer or internship opportunities.",
  alternates: { canonical: siteUrl },
  authors: [{ name: "Erblin Thaqi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Erblin Thaqi",
    title: "Erblin Thaqi | Full-Stack Developer",
    description: "Explore my full-stack projects and frontend work with React, Next.js, PHP, Laravel, and MySQL.",
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Erblin Thaqi — Full-Stack Developer" }],
    title: "Erblin Thaqi | Full-Stack Developer",
    description: "Full-stack projects, frontend concepts, and the code behind them.",
  },
  robots: { index: !isPreview, follow: !isPreview },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
