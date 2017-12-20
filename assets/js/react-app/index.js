import React from 'react';
import Home from './scenes/home/view';
import styled from 'styled-components';
import colors from './styles/colors';

const Container = styled.div`
  margin: auto;
  width: 1200px;
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