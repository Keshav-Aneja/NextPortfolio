import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keshav Aneja",
  description: "Keshav Aneja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-Gn538M5an8dJWDa0n7qDDg+2F87bR0ek1Io4t4mZxp5KtA4tcEw4Bf5F2D04dRlKs5G5Wz5F5Oj3f5Vlj7I1Of6qA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
