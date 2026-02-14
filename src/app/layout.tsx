import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Margo 💌",
  description:
    "Невелика гра з особливим сюрпризом для тебе ❤️",
  keywords: [

  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
