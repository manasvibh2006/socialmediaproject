import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "tiktok clone",
  description: "tiktok clone",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
