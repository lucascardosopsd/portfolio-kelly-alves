"use client";
import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
