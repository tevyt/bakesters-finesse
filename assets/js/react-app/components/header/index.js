import React from 'react';
import styled from 'styled-components';
import images from '../../images';
import SocialMediaLink from '../social-media-link';
import providers from '../social-media-link/providers';

const Logo = styled.img`
  width: 250px;
  height: 250px;
`;

const Container = styled.div`
  display: flex
`;

export default (props) => {
  return (
    <Container>
      <Logo src={images.bakestersLogo} />
      <div>
        <SocialMediaLink provider={providers.instagram} profile='' />
        <SocialMediaLink provider={providers.facebook} profile='' />
      </div>
    </Container>
  );
}