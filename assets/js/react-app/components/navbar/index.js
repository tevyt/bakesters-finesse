import React from "react";
import styled from "styled-components";

import color from "../../styles/colors";
import media from "../../styles/media";

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

export const NavMenu = props => {
  return (
    <NavMenuDiv>
      MENU
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>
    </NavMenuDiv>
  );
};

export default props => {
  return (
    <nav>
      <NavList>{props.children}</NavList>
      <NavMenu>{props.children}</NavMenu>
    </nav>
  );
};
