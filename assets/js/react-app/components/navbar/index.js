import React from "react";
import styled from "styled-components";

import color from "../../styles/colors";
import media from "../../styles/media";
import images from "../../images";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/fontawesome-free-solid";

const NavList = styled.ul`
  ${media.desktop`
  list-style: none;
  padding: 0;
  margin: 0;`};
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
  ${media.desktop`
    display: none;
  `};
  ${media.handheld`
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
  const NavFullDiv = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: ${color.white};
    color: ${color.red};
    top: 0;
    left: 0;
    z-index: 10;
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
      <CloseButton id="nav-close-button" onClick={props.onMenuClick}>
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
    <NavMenuDiv>
      MENU
      <Hamburger id="nav-hamburger" onClick={props.onMenuClick}>
        <span />
        <span />
        <span />
      </Hamburger>
      {props.showMenu ? <NavFullMenu {...props} /> : null}
    </NavMenuDiv>
  );
};

export default props => {
  return (
    <nav>
      <NavList>{props.children}</NavList>
      <NavMenu showMenu={props.showMenu} onMenuClick={props.onMenuClick}>
        {props.children}
      </NavMenu>
    </nav>
  );
};
