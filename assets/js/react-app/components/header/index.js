import React from 'react';
import styled from 'styled-components';
import images from '../../images';
import SocialMediaLink from '../social-media-link';
import providers from '../social-media-link/providers';
import media from '../../styles/media';

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
  `}
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  ${
    media.desktop`
      width: 80%;
      margin: auto;
    `
  }
`;

const SocialMediaLinks = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  ${media.handheld`
    display: block;
    position: relative;
    margin: auto;
    margin-top: 20px;
  `}
`;

export default (props) => {
  return (
    <Container>
      <Logo src={images.bakestersLogo} />
      <SocialMediaLinks>
        <SocialMediaLink provider={providers.instagram} profile='https://www.instagram.com/bakestersfinesse/' />
        <SocialMediaLink provider={providers.facebook} profile='https://www.facebook.com/Bakestersfinesse/' />
        <SocialMediaLink provider={providers.email} profile='' />
      </SocialMediaLinks>
    </Container>
  );
}