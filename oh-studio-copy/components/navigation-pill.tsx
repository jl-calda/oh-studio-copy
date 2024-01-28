"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/profile",
    label: "Profile",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const NavigationPill = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex py-1 items-center justify-center gap-x-2 rounded-full bg-lightGray px-1 overflow-hidden w-fit backdrop-blur-sm fixed left-1/2 transform -translate-x-1/2 top-8">
      <ul>
        {links.map((link) => (
          <Button
            key={link.href}
            className={cn(
              pathname === link.href ? "bg-white" : "bg-transparent",
              "px-6 py-2.5 shrink-0 rounded-full text-base antialiased font-normal"
            )}
            variant="ghost"
          >
            <Link
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          </Button>
        ))}
      </ul>
    </nav>
  );
};
