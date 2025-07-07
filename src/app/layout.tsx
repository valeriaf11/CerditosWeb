import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mi aplocación con Next.JS",
  description: "Aplicacion desarrollada por Valeria Salinas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
