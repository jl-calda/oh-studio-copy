"use client";

import Image from "next/image";

import { HiMiniArrowUpRight } from "react-icons/hi2";
import { AspectRatio } from "./ui/aspect-ratio";

import styles from "./card.module.scss";
import { cn } from "@/lib/utils";
import { Data } from "@/data";
import Link from "next/link";
import { SyntheticEvent } from "react";

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
    <>
      <AspectRatio
        ratio={4 / 3}
        className={cn(styles.card)}
      >
        {isVideo ? (
          <video
            src={data.data.images.thumbnail}
            autoPlay
            loop
            muted
            className={cn(styles.card_image)}
            poster={data.data.lowres?.thumbnail}
            style={{
              backgroundImage: `url(${data.data.lowres?.thumbnail})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              aspectRatio: "4 / 3",
            }}
            onLoad={(event: SyntheticEvent<HTMLVideoElement, Event>) => {
              const video = event.target as HTMLVideoElement;

              console.log(event);

              // function loaded() {
              //   if (!video.complete) {
              //     video.addEventListener("error", () => {
              //       video.style.background = "none";
              //     });
              //   }
              // }

              // video.complete
              //   ? loaded()
              //   : video.addEventListener("load", loaded);
            }}
          />
        ) : (
          <Image
            src={data.data.images.thumbnail}
            alt={data.data.text.name}
            fill
            style={{
              backgroundImage: `url(${data.data.lowres?.thumbnail})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              aspectRatio: "4 / 3",
            }}
            className={cn(styles.card_image)}
            onLoad={(event: SyntheticEvent<HTMLImageElement, Event>) => {
              const image = event.target as HTMLImageElement;
              // console.log(event);

              function loaded() {
                if (!image.complete) {
                  image.addEventListener("error", () => {
                    image.style.background = "none";
                  });
                }
              }

              image.complete
                ? loaded()
                : image.addEventListener("load", loaded);
            }}
          />
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
      </AspectRatio>
    </>
  );
};
