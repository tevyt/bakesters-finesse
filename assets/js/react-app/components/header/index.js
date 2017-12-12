import React from 'react';
import styled from 'styled-components';
import images from '../../images';

const Logo = styled.img`
  width: 250px;
`;

export default (props) => {
  return (
    <div>
      <Logo src={images.bakestersLogo} />
    </div>
  );
}