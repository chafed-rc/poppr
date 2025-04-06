"use client";

import { poppr } from "poppr";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GettingStarted() {
  return (
    <div className="flex flex-col gap-3 items-center text-center p-4">
      <div className="flex flex-col relative h-24 w-[400px] max-w-full mask-gradient" />

      <h1 className="text-4xl font-bold -mt-5 mb-3">Getting Started</h1>
      <p className="text-base text-muted-foreground max-w-lg">
        Documentation is on the way! <br />
        In the meantime, check out the GitHub repo.
      </p>

      <div className="flex gap-2 mt-4">
        <Button
          onClick={() =>
            poppr("Check the GitHub repo for more information.", {
              type: "info",
              title: "Documentation Coming Soon!",
              cancelAction: {
                label: "Close",
                onClick: () => poppr.close(),
              },
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

      <Link href="/" className="mt-4 underline text-sm text-muted-foreground">
        Back to Home
      </Link>
    </div>
  );
}
