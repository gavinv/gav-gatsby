import React from "react";

import Theme from "./../styles/theme";
import MainNav from "../components/MainNav";
import Blobs from "./../components/Blobs";
import Footer from "./../components/Footer";

export default function Layout(props) {
  return (
    <>
      <Theme />
      <Blobs />
      <MainNav />
      <main className="main-content">
        { props.children }
      </main>
      <Footer />
    </>
  );
}
