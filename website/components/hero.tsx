"use client";

import { poppr } from "poppr";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-3 items-center text-center p-4">
      <div className="flex flex-col relative h-24 w-[400px] max-w-full mask-gradient" />

      <h1 className="text-4xl font-bold -mt-5 mb-3">Poppr</h1>
      <p className="text-base text-muted-foreground max-w-lg">
        A delightful modal system built for React. <br /> Lightweight, flexible,
        and easy to use.
      </p>

      <div className="flex gap-2 mt-4">
        <Button
          onClick={() =>
            poppr("A delightful modal system for React.", {
              type: "info",
              title: "Poppr",
            })
          }
        >
          Render a modal
        </Button>

        <Button asChild variant="outline">
          <a
            href="https://github.com/chafed-rc/poppr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Button>
      </div>

      <Link
        href="/getting-started"
        className="mt-4 underline text-sm text-muted-foreground"
      >
        Documentation
      </Link>
    </div>
  );
};
