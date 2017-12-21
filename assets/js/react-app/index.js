import React from 'react';
import Home from './scenes/home/view';
import styled from 'styled-components';
import colors from './styles/colors';
import media from './styles/media';

export default () => {
  //Set body color when application is rendered
  document.getElementsByTagName('body')[0].setAttribute('style', `background-color: ${colors.lightPink}`);
  
  return(
    <div> 
      <Home />
    </div>
  );
}