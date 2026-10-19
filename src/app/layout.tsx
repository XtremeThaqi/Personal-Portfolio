import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://erblinthaqi.netlify.app"),
  title: "Erblin Thaqi | Full-Stack Developer",
  description: "Full-stack developer from Kosovo working with React, Next.js, PHP, Laravel, and MySQL. Explore web applications, frontend concepts, and desktop projects.",
  alternates: { canonical: "/" },
  authors: [{ name: "Erblin Thaqi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Erblin Thaqi",
    title: "Erblin Thaqi | Full-Stack Developer",
    description: "Explore my full-stack projects and frontend work with React, Next.js, PHP, Laravel, and MySQL.",
  },
  twitter: {
    card: "summary",
    title: "Erblin Thaqi | Full-Stack Developer",
    description: "Full-stack projects, frontend concepts, and the code behind them.",
  },
  robots: { index: true, follow: true },
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
