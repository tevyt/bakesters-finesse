import React from "react"; //eslint-disable-line
import PropTypes from "prop-types";
import FacebookIcon from "mdi-react/FacebookIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import EmailOutlineIcon from "mdi-react/EmailOutlineIcon";
import { Link } from "react-router-dom";

import Navbar from "./components/navbar";

function Header({ isNavbarActive, onNavBurgerClick, onNavLinkClick }) {
  return (
    <section className="section header font-cursive">
      <Navbar
        isActive={isNavbarActive}
        onBurgerClick={onNavBurgerClick}
        onNavLinkClick={onNavLinkClick}
      />
      <div className="social-media-links">
        <a
          className="social-media-link icon is-medium"
          href="https://www.instagram.com/bakestersfinesse/"
        >
          <InstagramIcon />
        </a>
        <a
          className="social-media-link icon is-medium"
          href="https://www.facebook.com/Bakestersfinesse/"
        >
          <FacebookIcon />
        </a>
        <Link className="social-media-link icon is-medium" to="/contact">
          <EmailOutlineIcon />
        </Link>
      </div>
    </section>
  );
}

Header.propTypes = {
  isNavbarActive: PropTypes.bool.isRequired,
  onNavBurgerClick: PropTypes.func.isRequired,
  onNavLinkClick: PropTypes.func.isRequired
};

export default Header;
