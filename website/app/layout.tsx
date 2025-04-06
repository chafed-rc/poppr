import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PopprModal } from "poppr";
import { metadata } from "../seo"; // ✅ imported here
import Footer from "@/components/footer";

export { metadata };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <PopprModal />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
