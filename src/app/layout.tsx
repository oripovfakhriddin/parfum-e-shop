import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'

import "./globals.css";

const montserrat = Montserrat({subsets: ["latin"], display: "swap"})

export const metadata: Metadata = {
  title: "Bosh sahifa | Parfumeriya onlay do'koni",
  description: "Parfumeriya web ilovasi, Ushbu web ilofa Oripov Faxriddin tomonidan qo'llab quvvatlanadi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="" />
        <link rel="icon" type="image/png" sizes="32x32" href="static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="static/favicon/favicon-16x16.png" />
        <link rel="manifest" href="" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
