import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/background";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollContextProvider } from "@/components/ScrollProvider/provider";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // Font

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garba Jamiu",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-900 dark:text-slate-400  h-screen  antialiased`}>
        <ScrollContextProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Background gradientSize={400} className="w-[950px] xl:w-[1250px] mx-auto">
              {children}
            </Background>
          </ThemeProvider>
        </ScrollContextProvider>
      </body>
    </html>
  );
}
