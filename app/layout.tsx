export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

import "./globals.scss";
import "@/styles/variables.scss";

import "open-props/style";
import "open-props/colors-hsl";
import "open-props/animations";
import "open-props/easings";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
