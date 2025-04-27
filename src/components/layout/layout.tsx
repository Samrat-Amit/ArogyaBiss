
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import ContactButtons from "./contact-buttons";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <ContactButtons />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
