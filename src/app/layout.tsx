import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "~/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Couto",
  description: "Oferecemos uma solução completa de criação e desenvolvimento de sites, focada em design moderno, integração eficiente e excelente experiência do usuário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="overflow-x-hidden bg-black">
      <body className={cn(inter.className)}>
        {children}
      </body>
    </html>
  );
}
