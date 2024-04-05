import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Area Finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-light_bg dark:bg-dark_bg text-light_text dark:text-dark_text`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
