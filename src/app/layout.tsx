import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Header } from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { Hero } from "@/components/layout/hero/hero";
import { Superfan } from "@/components/layout/superfan/superfan";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Tempalte page",
  description: "Kodeverket sin NextJS template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Hero />
          <Superfan />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
