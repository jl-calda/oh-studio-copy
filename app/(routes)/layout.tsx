import type { Metadata } from "next";

import { NavPill } from "@/components/nav-pill";
import { BotInset } from "@/components/insets/bot-inset";
import { TopInset } from "@/components/insets/top-inset";
import { Footer } from "@/components/footer";
import { ShopButton } from "@/components/shop-button";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <TopInset /> */}
        <NavPill />
        <div className="">
          {children}
          <ShopButton />
          <Footer />
        </div>
        {/* <BotInset /> */}
      </body>
    </html>
  );
}