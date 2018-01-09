import React from "react";
import styled from "styled-components";
import images from "../../images";
import providers from "../social-media-link/providers";
import media from "../../styles/media";
import colors from "../../styles/colors";
import SocialMediaLink from "../social-media-link";
import NavBar, { NavLink } from "../navbar";
import utils from "./utils";

const Logo = styled.img`
  width: 175px;
  height: 175px;
  display: inline-block;
  position: absoloute;
  left: 0;
  top: 0;
  ${media.handheld`
    display: block;
    position: relative;
    margin: auto;
  `};
`;

const Links = styled.div`
  text-align: center;
  ${media.desktop`
  position: absolute;
  top: 0;
  right: 20%;
 `} ${media.handheld`
    display: block;
    position: relative;
    margin: auto;
    width: 60%;
  `};
`;

const Location = styled.a`
  display: block;
  color: ${colors.green};
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Nav = styled.div`
  ${media.desktop`
    display: flex;
    padding: 50px;
    align-items: center;
  `};
`;

export default props => {
  const Container = styled.div`
    position: relative;
    width: 100%;
    padding-top: 60px;
    ${media.desktop`
      width: 80%
      margin: auto
    `};
  `;

  const { disableScrolling, enableScrolling, scrollTo } = utils;

  if (props.menuSlideIn) {
    disableScrolling(window);
  } else {
    enableScrolling(window);
  }

  const bakeryLocation = "https://goo.gl/maps/QRMjGXbGRGC2";
  return (
    <Container>
      <Nav id="nav">
        <Logo className="main-logo" src={images.bakestersLogo} />
        <NavBar id="nav-bar" {...props}>
          <NavLink text="Gallery" href="" />
          <NavLink text="About" href="" />
          <NavLink text="Contact" href="" />
        </NavBar>
      </Nav>
      <Links>
        <Location id="bakery-location" href={bakeryLocation} target="_blank">
          Mandeville Jamaica
        </Location>
        <SocialMediaLinks>
          <SocialMediaLink
            className="social-media-link"
            provider={providers.instagram}
            profile="https://www.instagram.com/bakestersfinesse/"
          />
          <SocialMediaLink
            className="social-media-link"
            provider={providers.facebook}
            profile="https://www.facebook.com/Bakestersfinesse/"
          />
          <SocialMediaLink
            className="social-media-link"
            provider={providers.email}
            profile=""
          />
        </SocialMediaLinks>
      </Links>
    </Container>
  );
};
