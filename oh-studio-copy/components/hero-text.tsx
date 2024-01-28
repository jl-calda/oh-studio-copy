import React from "react";

export const HeroText = () => {
  return (
    <div className="flex flex-col items-center text-4xl font-medium antialiased">
      <span>A brand and product</span>
      <span>designer working with clients</span>
      <span>globally</span>
      <ul className="flex space-x-2 items-center justify-center mt-10 text-sm">
        <li>Expertise</li>
        <li className="px-3 py-1 rounded-full bg-lightGray">Branding</li>
        <li className="px-3 py-1 rounded-full bg-lightGray">Product</li>
        <li className="px-3 py-1 rounded-full bg-lightGray">Design System</li>
      </ul>
    </div>
  );
};
