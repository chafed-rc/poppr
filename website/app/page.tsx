"use client";

import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import Install from "@/components/install";
import Usage from "@/components/usage";
import Types from "@/components/types";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col space-y-12 container mx-auto max-w-2xl px-4">
        <Hero />
        <Install />
        <Usage />
        <Types />
      </main>
      <Footer />
    </div>
  );
}
