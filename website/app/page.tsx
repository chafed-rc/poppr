"use client";

import { Hero } from "@/components/hero";
import Install from "@/components/install";
import Usage from "@/components/usage";
export default function HomePage() {
  return (
    <main className="flex flex-col space-y-12 container mx-auto max-w-2xl px-4">
      <Hero />
      <Install />
      <Usage />
    </main>
  );
}
