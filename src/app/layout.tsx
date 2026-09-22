import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toast";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-anim"

import "./globals.css";

const Inter = localFont({
  src: './fonts/Inter.woff2',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lucy-codes.de"),
  title: "Lucy's Homepage",
  description: "A modern and Sleek Homepage",
  openGraph: {
    type: "website",
    title: "Lucy's Homepage",
    description: "A modern and Sleek Homepage",
    url: "/",
    siteName: "Lucy's Homepage",
    images: [
      {
        url: "/icons/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Lucy's Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucy's Homepage",
    description: "A modern and Sleek Homepage",
    images: ["/icons/favicon-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icons/favicon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/icons/favicon-57x57.png", sizes: "57x57" },
      { url: "/icons/favicon-60x60.png", sizes: "60x60" },
      { url: "/icons/favicon-72x72.png", sizes: "72x72" },
      { url: "/icons/favicon-76x76.png", sizes: "76x76" },
      { url: "/icons/favicon-114x114.png", sizes: "114x114" },
      { url: "/icons/favicon-120x120.png", sizes: "120x120" },
      { url: "/icons/favicon-144x144.png", sizes: "144x144" },
      { url: "/icons/favicon-152x152.png", sizes: "152x152" },
      { url: "/icons/favicon-180x180.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${Inter.className} antialiased`}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen bg-background">
        <Header />

        <Toaster />
        <main className="flex-1 w-full flex flex-col relative">

          <div className="flex-1 w-full flex flex-col z-10">
            <div className="w-full max-w-5xl px-4 py-8 my-auto mx-auto">
              {children}
            </div>
          </div>
          <BackgroundAnimation />
        </main>

        <BackgroundAnimation/>

        <Footer />
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}