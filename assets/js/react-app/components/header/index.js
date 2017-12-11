import React from 'react';
import styled from 'styled-components';
import images from '../../images';


export default (props) => {
  const Logo = styled.img`
  width: 250px;
`;
  return (
    <div>
      <Logo src={images.bakestersLogo} />
    </div>
  );
}