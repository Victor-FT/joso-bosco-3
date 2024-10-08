import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "João Bosco",
    template: `%s | João Bosco`,
  },
  description: "João Bosco Designer Gráfico",
  openGraph: {
    title: `João Bosco`,
    description: 'João Bosco',
    url: "João Bosco",
    siteName: `João Bosco`,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `João Bosco`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

const fontSans = {
  variable: "--font-slab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-slab antialiased mx-auto pt-0 sm:pt-0 overflow-x-hidden w-[100vw] max-w-[100vw]",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
