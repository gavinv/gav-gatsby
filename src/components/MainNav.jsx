import React from "react";

import Link from "./Link";
import VariLogo from './VariLogo'
import useWindowSize from './../hooks/useWindowSize'

const MainNav = props => {
  const viewport = useWindowSize()
  return (
    <>
      <nav className="mainnavigation blurred">
        <Link to="/" className="gav-expanded-container">
          <VariLogo viewport={ viewport.width } />
        </Link>
        <div className="pages">
          {/* <Link to="about" className="about menu-item">
            About
          </Link>
          <Link to="portfolio" className="projects menu-item">
            Projects
          </Link>
          <Link to="miscellaneous" className="misc menu-item">
            Misc.
          </Link>
          <Link to="blog" className="blog menu-item">
            Blog
          </Link>
          <Link to="contact" className="contact menu-item">
            Contact
          </Link> */}
        </div>
      </nav>
    </>
  );
};

export default MainNav;
