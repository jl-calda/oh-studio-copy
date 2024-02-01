"use client";

import { MdLocalGroceryStore } from "react-icons/md";

import styles from "./shop-button.module.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const ShopButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/shop") return null;

  return (
    <button
      className={styles.button}
      onClick={() => router.push("/shop")}
    >
      <Link href="/shop">
        . . .
        <MdLocalGroceryStore className={styles.icon} />
      </Link>
    </button>
  );
};
