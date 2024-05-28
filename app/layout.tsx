import type { Metadata } from "next";
import "./styles/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppcontextProvider from "./contexts/AppcontextProvider";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "policee",
  description: "Generated by policee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <AppcontextProvider>{children}</AppcontextProvider>
        <Footer />
      </body>
    </html>
  );
}
