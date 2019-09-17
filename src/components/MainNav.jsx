import React from "react";

import Link from "./Link";

const MainNav = props => {
  return (
    <>
      <nav className="mainnavigation blurredbar">
        <Link to="/" className="gav-expanded-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.493 43.725">
            <g transform="translate(1.472 1.925)">
              <path
                className="gav-expanded"
                d="M50.74,57.655,30.863,17.89,10.74,57.655"
                transform="translate(25.299 -17.871)"
              />
              <path
                className="gav-expanded"
                d="M50.74,126.872l-20,38.783-20-39.765"
                transform="translate(53.26 -125.801)"
              />
              <path
                className="gav-expanded"
                d="M84.252,40.014H49.114V50.168c-4.326,7.961-17.774,10.054-25.362,4.311-4.41-3.338-6.626-6.259-7.718-11.127a29.348,29.348,0,0,1-.293-9.289,16.314,16.314,0,0,1,4.707-10.09c4.136-4.143,7.979-6.214,14.333-6.214,6.341-.26,9.923,2.225,14.333,6.676"
                transform="translate(-15.518 -17.74)"
              />
            </g>
          </svg>
        </Link>
        <div className="pages">
          <Link to="about" className="about">
            About
          </Link>
          <Link to="projects" className="projects">
            Projects
          </Link>
          <Link to="miscellaneous" className="misc">
            Misc.
          </Link>
          <Link to="blog" className="blog">
            Blog
          </Link>
          <Link to="contact" className="contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
