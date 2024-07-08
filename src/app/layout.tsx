import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { NavBar } from "@/components/nav-bar";

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Stage-2 Task",
  description: "An Online Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <NavBar />
          <main>{children}</main>
        </main>
        
      </body>
    </html>
  );
}
