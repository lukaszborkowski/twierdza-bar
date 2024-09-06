import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Navbar } from "@/components/sections/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400", // Dodaj wagę, np. 400
});

export const metadata: Metadata = {
  title: "Twierdza Bar",
  description: "Twierdza Bar - Moc Fortecy, Brzmienie Rocka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
