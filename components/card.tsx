import Image from "next/image";

import { HiMiniArrowUpRight } from "react-icons/hi2";
import { AspectRatio } from "./ui/aspect-ratio";

interface CardProps {
  src: string;
  title: string;
  description: string;
}

export const Card = ({ src, title, description }: CardProps) => {
  return (
    <div className="relative group overflow-hidden cursor-pointer">
      <AspectRatio ratio={4 / 3}>
        <Image
          src={src}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>

      <div className="opacity-0 group-hover:opacity-100 group-hover:block absolute top-0 right-0 h-full w-full bg-black/30 transition-[display] duration-500 rounded-lg backdrop-blur-sm">
        <div className="top-5 left-5 absolute text-sm text-white">{title}</div>
        <HiMiniArrowUpRight className="absolute top-20 right-20 group-hover:top-15 group-hover:right-15 text-white" />
      </div>
    </div>
  );
};
