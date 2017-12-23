import React from "react";
import styled from "styled-components";
import images from "../../images";
import SocialMediaLink from "../social-media-link";
import providers from "../social-media-link/providers";
import media from "../../styles/media";
import colors from "../../styles/colors";

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

const Container = styled.div`
  position: relative;
  width: 100%;
  ${media.desktop`
      width: 80%;
      margin: auto;
    `};
`;

const Links = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  ${media.handheld`
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

export default props => {
  const bakeryLocation = "https://goo.gl/maps/MG3Ct1nUo3P2";
  return (
    <Container>
      <Logo src={images.bakestersLogo} />
      <Links>
        <Location id="bakery-location" href={bakeryLocation} target="_blank">
          Ward Avenue, Mandeville Jamaica
        </Location>
        <SocialMediaLinks>
          <SocialMediaLink
            provider={providers.instagram}
            profile="https://www.instagram.com/bakestersfinesse/"
          />
          <SocialMediaLink
            provider={providers.facebook}
            profile="https://www.facebook.com/Bakestersfinesse/"
          />
          <SocialMediaLink provider={providers.email} profile="" />
        </SocialMediaLinks>
      </Links>
    </Container>
  );
};
