import React from "react";

import Theme from "./../styles/theme";
import MainNav from "../components/MainNav";
import Blobs from "./../components/Blobs";
import Footer from "./../components/Footer";
import SEO from "./../components/SEO"

export default function Layout(props) {
  return (
    <>
      <SEO title='Gavin Vaught | Web Developer & Designer' />
      <Theme />
      <Blobs />
      <MainNav />
      <Footer />
    </>
  );
}
