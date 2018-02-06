import React from "react"; //eslint-disable-line
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ isActive, onBurgerClick }) {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <NavbarBrand isActive={isActive} onBurgerClick={onBurgerClick} />
      <NavbarMenu isActive={isActive} />
    </nav>
  );
}

function NavbarBrand({ isActive, onBurgerClick }) {
  return (
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        {"Bakester's Finesse"}
      </Link>

      <div
        className={`navbar-burger ${getIsActiveClassName(isActive)}`}
        onClick={onBurgerClick}
      >
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function NavbarMenu({ isActive }) {
  return (
    <div className={`navbar-menu ${getIsActiveClassName(isActive)}`}>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/gallery">
          Gallery
        </Link>
        <Link className="navbar-item" to="/order">
          Order
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

function getIsActiveClassName(isActive) {
  if (isActive) {
    return "is-active";
  } else {
    return "";
  }
}

Navbar.propTypes = {
  isActive: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired
};

NavbarBrand.propTypes = {
  isActive: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired
};

NavbarMenu.propTypes = {
  isActive: PropTypes.bool
};

export default Navbar;
