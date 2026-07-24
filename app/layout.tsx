import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AURA — Estética facial · Dra. Macarena Fontecilla",
  description:
    "Panel interno de consulta de estética facial (Vitacura). AURA propone, usted aprueba. Demo con datos simulados.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={inter.variable}>
      <body className="font-sans antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
