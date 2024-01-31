"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import styles from "./nav-pill.module.scss";

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

export const NavPill = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className={styles.nav}>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <button
              className={cn(
                pathname === link.href ? styles.active : styles.not_active,
                styles.link
              )}
            >
              <Link
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
