"use client";

import { poppr } from "../../src/index";
import Link from "next/link";

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
        <button
          onClick={() =>
            poppr("A delightful modal system for React.", {
              type: "info",
              title: "Poppr",
            })
          }
          className="bg-neutral-900 text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-neutral-800 transition cursor-pointer"
        >
          Render a modal
        </button>

        <a
          className="bg-white text-black font-semibold px-6 py-2 rounded-md shadow border border-neutral-300 hover:bg-neutral-100 transition"
          href="https://github.com/chafed-rc/poppr"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <Link
        href="/getting-started"
        className="mt-4 underline text-sm text-neutral-700 dark:text-neutral-400"
      >
        Documentation
      </Link>
    </div>
  );
};
