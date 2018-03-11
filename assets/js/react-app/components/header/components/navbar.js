import React from "react"; //eslint-disable-line
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Navbar({isActive, onBurgerClick, onNavLinkClick}) {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation">
      <NavbarBrand
        isActive={isActive}
        onBurgerClick={onBurgerClick}
        onHomeLinkClick={onNavLinkClick}
      />
      <NavbarMenu isActive={isActive} onNavLinkClick={onNavLinkClick}>
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </NavbarMenu>
    </nav>
  );
}

function NavbarBrand({isActive, onBurgerClick, onHomeLinkClick}) {
  return (
    <div className="navbar-brand">
      <Link className="navbar-item" to="/" onClick={onHomeLinkClick}>
        {"Bakester's Finesse"}
      </Link>

      <div
        className={`navbar-burger ${getIsActiveClassName(isActive)}`}
        onClick={onBurgerClick}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function NavbarMenu({children, isActive, onNavLinkClick}) {
  const linksWithOnClick = React.Children.map(children, child =>
    React.cloneElement(child, {onClick: onNavLinkClick}),
  );
  return (
    <div className={`navbar-menu ${getIsActiveClassName(isActive)}`}>
      <div className="navbar-start">{linksWithOnClick}</div>
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
  onBurgerClick: PropTypes.func.isRequired,
  onNavLinkClick: PropTypes.func.isRequired,
};

NavbarBrand.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onBurgerClick: PropTypes.func.isRequired,
  onHomeLinkClick: PropTypes.func,
};

NavbarMenu.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  onNavLinkClick: PropTypes.func.isRequired,
};

export default Navbar;
