import { HeroText } from "@/components/hero-text";
import React from "react";

import { data } from "@/data";
import { Card } from "@/components/card";

const HomePage = () => {
  return (
    <div className="pt-40">
      <HeroText />
      <div className="grid grid-cols-2">
        {data.map((item) => (
          <Card
            src={item.data.images.thumbnail}
            title="Title"
            description="Description"
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
