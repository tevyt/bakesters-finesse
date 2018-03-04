import React from "react"; //eslint-disable-line
import PropTypes from "prop-types";
import FacebookIcon from "mdi-react/FacebookIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import EmailOutlineIcon from "mdi-react/EmailOutlineIcon";
import { Link } from "react-router-dom";

import Navbar from "./components/navbar";
import CircleIcon from "../circle-icon";

function Header({ isNavbarActive, onNavBurgerClick, onNavLinkClick }) {
  return (
    <section className="section header font-cursive">
      <Navbar
        isActive={isNavbarActive}
        onBurgerClick={onNavBurgerClick}
        onNavLinkClick={onNavLinkClick}
      />
      <div className="social-media-links">
        <CircleIcon
          otherclasses="social-media-link"
          tag="a"
          href="https://www.instagram.com/bakestersfinesse/"
        >
          <InstagramIcon />
        </CircleIcon>
        <CircleIcon
          otherclasses="social-media-link"
          tag="a"
          href="https://www.facebook.com/Bakestersfinesse/"
        >
          <FacebookIcon />
        </CircleIcon>
        <Link className="social-media-link icon circle is-medium" to="/contact">
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
