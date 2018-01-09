import React from "react";
import styled from "styled-components";

import { getAnimation } from "./utils";
import color from "../../styles/colors";
import media from "../../styles/media";
import images from "../../images";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/fontawesome-free-solid";

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  ${media.handheld`
      display: none;
    `};
`;

const NavListItem = styled.li`
  display: inline;
  padding: 5px;
`;

const Link = styled.a`
  color: ${color.red};
  &:hover {
    color: ${color.green};
  }
`;

const Hamburger = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  span {
    background-color: ${color.red};
    display: block;
    height: 2px;
    width: 15px;
    margin: 2px;
  }
`;

const NavMenuDiv = styled.div`
  display: none;
  ${media.handheld`
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: ${color.red};
    background-color: ${color.white};
  `};
`;

export const NavLink = props => {
  const { text, href } = props;
  return (
    <NavListItem>
      <Link href={href}>{text}</Link>
    </NavListItem>
  );
};

export const NavFullMenu = props => {
  const animation = getAnimation(props);

  const NavFullDiv = styled.div`
    ${media.desktop`
    display: none;
    `} position: absolute;
    width: 100vw;
    min-height: 100vh;
    background-color: ${color.white};
    color: ${color.red};
    top: 0;
    bottom: 0;
    left: ${!props.menuSlideIn && !props.menuSlideOut ? "-1000px" : "0"};
    ${animation} animation-fill-mode: forwards;
    z-index: 100;
  `;

  const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;
  `;

  const Logo = styled.img`
    display: block;
    margin: auto;
    width: 100px;
    height: 100px;
    padding: 20px;
  `;

  const MenuList = styled.ul`
    list-style: none;
    text-align: center;
    padding: 0;
    li {
      display: block !important;
      font-size: 1.5em;
    }
  `;

  return (
    <NavFullDiv id="nav-menu">
      <CloseButton id="nav-close-button" onClick={props.toggleShowMenu}>
        <FontAwesomeIcon icon={faWindowClose} />
      </CloseButton>
      <Logo src={images.bakestersLogo} />
      <MenuList>
        {props.children.map(link => {
          return link;
        })}
      </MenuList>
    </NavFullDiv>
  );
};
export const NavMenu = props => {
  return (
    <div className="nav-menu">
      <NavMenuDiv>
        MENU
        <Hamburger id="nav-hamburger" onClick={props.toggleShowMenu}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavMenuDiv>
    </div>
  );
};

export default props => {
  const Nav = styled.nav`
    ${media.handheld`
      ${props.menuSlideIn ? "height: 100vh;" : null};
    `};
  `;
  return (
    <Nav>
      <NavList>{props.children}</NavList>
      <NavFullMenu {...props} />
      <NavMenu {...props} />
    </Nav>
  );
};
