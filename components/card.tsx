import Image from "next/image";

import { HiMiniArrowUpRight } from "react-icons/hi2";
import { AspectRatio } from "./ui/aspect-ratio";

import styles from "./card.module.css";
import { cn } from "@/lib/utils";

interface CardProps {
  src: string;
  title: string;
  description: string;
}

export const Card = ({ src, title, description }: CardProps) => {
  return (
    <div className={cn(styles.card)}>
      <AspectRatio ratio={4 / 3}>
        <Image
          src={src}
          alt={title}
          fill
          className={cn(styles.card_image)}
        />
      </AspectRatio>

      <div className={cn(styles.card_backdrop)}>
        <div className={cn(styles.card_backdrop_title)}>{title}</div>
      </div>
      <div className={cn(styles.card_button)}>
        <HiMiniArrowUpRight className={cn("")} />
      </div>
    </div>
  );
};
