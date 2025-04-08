"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Home, PartyPopper, Package, Drama, Menu } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      {/* Top NavBar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 flex items-center justify-between px-4 py-3 border-b border-neutral-200 shadow-xl">
        <span className="text-lg font-bold tracking-tight">Poppr</span>
        <DrawerTrigger asChild>
          <button className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <Menu className="w-6 h-6" />
          </button>
        </DrawerTrigger>
      </div>

      <DrawerContent className="h-full w-[70vw] max-w-xs px-4 py-6 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800">
        <div className="text-lg font-bold tracking-tight mb-6">Poppr</div>

        <div className="mb-4">
          <div className="font-semibold mb-2">Basics</div>
          <ul>
            <li>
              <Link href="/getting-started" onClick={closeDrawer}>
                <div className="flex items-center gap-2 py-1">
                  <Home className="w-4 h-4" />
                  <span>Getting Started</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="font-semibold mb-2">API</div>
          <ul>
            <li>
              <Link href="/poppr" onClick={closeDrawer}>
                <div className="flex items-center gap-2 py-1">
                  <PartyPopper className="w-4 h-4" />
                  <span>poppr()</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/configuration" onClick={closeDrawer}>
                <div className="flex items-center gap-2 py-1">
                  <Package className="w-4 h-4" />
                  <span>PopprModal</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/modal-showcase" onClick={closeDrawer}>
                <div className="flex items-center gap-2 py-1">
                  <Drama className="w-4 h-4" />
                  <span>Modal Showcase</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="font-semibold mb-2">GitHub</div>
          <ul>
            <li>
              <Link
                href="https://github.com/chafed-rc/poppr"
                target="_blank"
                onClick={closeDrawer}
              >
                <div className="flex items-center gap-2 py-1">
                  <FaGithub className="w-4 h-4" />
                  <span>Poppr</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
