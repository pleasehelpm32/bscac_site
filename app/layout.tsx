import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSCAC - Building Superintendent & Cleaners Association of Canada",
  description:
    "A platform for education, training, and community-building that benefits workers, businesses, and society.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
