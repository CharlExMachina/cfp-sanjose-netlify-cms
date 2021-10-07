import React from "react";
import { Footer } from "../BetterFooter";
import { Navbar } from "../BetterNavbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "56px" }}>{children}</div>
      <Footer />
    </>
  );
};
