import React from 'react';
import styled from 'styled-components';
import images from '../../images';
import SocialMediaLink from '../social-media-link';
import providers from '../social-media-link/providers';

const Logo = styled.img`
  width: 250px;
  height: 250px;
  display: inline-block;
  position: absoloute;
  left: 0;
  top: 0;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const SocialMediaLinks = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export default (props) => {
  return (
    <Container>
      <Logo src={images.bakestersLogo} />
      <SocialMediaLinks>
        <SocialMediaLink provider={providers.instagram} profile='' />
        <SocialMediaLink provider={providers.facebook} profile='' />
        <SocialMediaLink provider={providers.pinterest} profile='' />
      </SocialMediaLinks>
    </Container>
  );
}