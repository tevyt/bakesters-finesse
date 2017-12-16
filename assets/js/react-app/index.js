import React from 'react';
import Home from './scenes/home/view';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  width: 1200px;
`;
export default () => {
  return(
    <Container> 
      <Home />
    </Container>
  );
}