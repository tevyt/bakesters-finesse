import React from 'react';
import Home from './scenes/home/view';
import styled from 'styled-components';
import colors from './styles/colors';
import media from './styles/media';

const Container = styled.div`
  margin: auto;
  width: 1200px;
  ${
    media.handheld`
      width: 100%;
    `
  }
`;
export default () => {
  //Set body color when application is rendered
  document.getElementsByTagName('body')[0].setAttribute('style', `background-color: ${colors.lightPink}`);
  
  return(
    <Container> 
      <Home />
    </Container>
  );
}