import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Header } from "@/components/layout/header/header";
import Footer from "../components/layout/footer/footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
    title: "oiid Superfan App",
    description: "A Next.js app for oiid Superfan",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}