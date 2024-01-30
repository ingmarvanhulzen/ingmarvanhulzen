import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import NavBar from "@/components/NavBar";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ingmar van Hulzen",
  description: "Portfolio of Ingmar van Hulzen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "bg-neutral-50 dark:bg-neutral-950")}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
