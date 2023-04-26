import React from "react";
import { Footer } from "../Footer/footer";
import Homenav from "../Navbar/navbar";

export default function Layout({ children }) {
  return (
    <section>
    <Homenav />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
