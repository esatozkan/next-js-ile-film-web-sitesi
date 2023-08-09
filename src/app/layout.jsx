import React from "react";
import "./globals.css";
import Header from "@/component/header";
import Providers from "./provider";
import Tabs from "@/component/Tabs";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers enableSystem={true} attribute="class">
          <Header/>
          <Tabs/>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
