import Image from "next/image";

import { HiMiniArrowUpRight } from "react-icons/hi2";
import { AspectRatio } from "./ui/aspect-ratio";

import styles from "./card.module.scss";
import { cn } from "@/lib/utils";
import { Data } from "@/data";
import Link from "next/link";

interface CardProps {
  data: Data;
}

export const Card = ({ data }: CardProps) => {
  const imageExtensions = [".jpg", ".png", ".webp"];
  const videoExtensions = [".mp4"];

  const isVideo = videoExtensions.some((extension) =>
    data.data.images.thumbnail.endsWith(extension)
  );
  const isImage = imageExtensions.some((extension) =>
    data.data.images.thumbnail.endsWith(extension)
  );

  return (
    <div className={cn(styles.card)}>
      {isVideo && (
        <AspectRatio ratio={4 / 3}>
          <video
            src={data.data.images.thumbnail}
            autoPlay
            loop
            muted
            className={cn(styles.card_image)}
          />
        </AspectRatio>
      )}

      {isImage && (
        <AspectRatio ratio={4 / 3}>
          <Image
            style={{
              backgroundImage: `url(${data.data.lowres?.thumbnail} || ${data.data.images.thumbnail})`,
              width: "100%",
              height: "100%",
            }}
            src={data.data.images.thumbnail}
            alt={data.data.text.name}
            fill
            className={cn(styles.card_image)}
          />
        </AspectRatio>
      )}

      <div className={cn(styles.card_backdrop)}>
        <div className={cn(styles.card_backdrop_title)}>
          {data.data.text.name}
        </div>
      </div>
      <div className={cn(styles.card_button)}>
        <Link href={`/${data.data.text.name}`}>
          <HiMiniArrowUpRight className={cn("")} />
        </Link>
      </div>
    </div>
  );
};
