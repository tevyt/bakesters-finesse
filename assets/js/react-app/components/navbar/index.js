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

export const NavLink = props => {
  const { text, href } = props;
  return (
    <NavListItem>
      <Link href={href}>{text}</Link>
    </NavListItem>
  );
};

export const NavMenu = props => {
  return <NavMenuDiv>Menu</NavMenuDiv>;
};

export default props => {
  return (
    <nav>
      <NavList>{props.children}</NavList>
      <NavMenu>{props.children}</NavMenu>
    </nav>
  );
};
