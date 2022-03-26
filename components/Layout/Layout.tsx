import React, { ReactNode } from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
