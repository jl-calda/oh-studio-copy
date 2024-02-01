import { HeroText } from "@/components/hero-text";
import React from "react";

import styles from "./page.module.scss";

import { data } from "@/data";
import { Card } from "@/components/card";
import { cn } from "@/lib/utils";
import ContactHeader from "@/components/contact-header";

const HomePage = () => {
  return (
    <main className={styles.main_wrapper}>
      <HeroText />
      <div className={cn(styles.card_wrapper)}>
        {data.map((item) => (
          <Card
            key={crypto.randomUUID()}
            data={item}
          />
        ))}
      </div>
      <ContactHeader />
    </main>
  );
};

export default HomePage;
