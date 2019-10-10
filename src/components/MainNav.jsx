import React from "react";

import Link from "./Link";

const MainNav = props => {
  return (
    <>
      <nav className="mainnavigation blurred">
        <Link to="/" className="gav-expanded-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.493 43.725"><path d="M77.511 41.709L57.634 1.944 37.511 41.709M105.472 2.996l-20 38.783-20-39.765"/><path d="M70.206 24.199H35.068v10.154c-4.326 7.961-17.774 10.054-25.362 4.311-4.41-3.338-6.626-6.259-7.718-11.127a29.348 29.348 0 01-.293-9.289 16.314 16.314 0 014.707-10.09c4.136-4.143 7.979-6.214 14.333-6.214 6.341-.26 9.923 2.225 14.333 6.676"/></svg>
        </Link>
        <div className="pages">
          <Link to="about" className="about nav-link">
            About
          </Link>
          <Link to="projects" className="projects nav-link">
            Projects
          </Link>
          <Link to="miscellaneous" className="misc nav-link">
            Misc.
          </Link>
          <Link to="blog" className="blog nav-link">
            Blog
          </Link>
          <Link to="contact" className="contact nav-link">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
