import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Navigation from "@/components/organisms/header/Navigation";
import TopHeader from "@/components/organisms/top-header/TopHeader";
import Footer from "@/components/organisms/footer/Footer";
import NavSearchBar from "@/components/molecules/navbar/NavSearchBar";

const openSans = localFont({
  src: "./fonts/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-open-sans",
  weight: "300 400 500 600 700 800",
});

export const metadata: Metadata = {
  title: "Travel Agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} font-opensans antialiased`}
      >
       <TopHeader/>
        <Navigation />
        <NavSearchBar/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}