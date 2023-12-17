import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar";
import { workSans } from "./fonts";

export const metadata: Metadata = {
  title: "Rooted",
  description: "Your one stop shop for everything Web 3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-icon/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        ></link>
      </head>
      <body className={workSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
