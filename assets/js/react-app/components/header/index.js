import React from "react"; //eslint-disable-line
import PropTypes from "prop-types";
import FacebookIcon from "mdi-react/FacebookIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import EmailOutlineIcon from "mdi-react/EmailOutlineIcon";

import Navbar from "./components/navbar";

function Header({ isNavbarActive, onNavBurgerClick }) {
  return (
    <section className="section header font-cursive">
      <Navbar isActive={isNavbarActive} onBurgerClick={onNavBurgerClick} />
      <div className="social-media-links">
        <a
          className="social-media-link icon is-medium"
          href="https://www.instagram.com"
        >
          <InstagramIcon />
        </a>
        <a
          className="social-media-link icon is-medium"
          href="https://www.facebook.com"
        >
          <FacebookIcon />
        </a>
        <a
          className="social-media-link icon is-medium"
          href="https://www.facebook.com"
        >
          <EmailOutlineIcon />
        </a>
      </div>
    </section>
  );
}

Header.propTypes = {
  isNavbarActive: PropTypes.bool,
  onNavBurgerClick: PropTypes.func.isRequired
};

export default Header;
