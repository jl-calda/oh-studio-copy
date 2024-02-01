"use client";

import { Cross1Icon } from "@radix-ui/react-icons";

import styles from "./back-button.module.scss";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className={styles.backButton}
      onClick={() => router.push("/")}
    >
      <Cross1Icon className={styles.icon} />
    </button>
  );
};

export default BackButton;
