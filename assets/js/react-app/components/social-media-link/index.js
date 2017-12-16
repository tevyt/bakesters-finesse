import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import providers from './providers';
import colors from '../../styles/colors';
import { faInstagram, faFacebook, faPinterest, faTwitter } from '@fortawesome/fontawesome-free-brands';

const getProviderIcon = (provider) => {
  switch(provider){
    case providers.instagram: 
      return faInstagram;
    case providers.facebook:
      return faFacebook;
    case providers.pinterest:
      return faPinterest;
    case providers.twitter:
      return faTwitter;
    default: 
      return null;
  }
}; 

export default (props) => {
  const {
    provider, 
    profile
  } = props;

  const SocialMediaLink = styled.a`
    display: inline-block;
    font-size: 1.2em;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: ${colors.white};
    background-color: ${colors.green};
    border-radius: 100%;
    outline: 0;
    margin: 5px;
    &:active{
      outline: 0;
      -moz-outline-style: none;
    }
    &:hover{
      text-decoration: none;
      color: ${colors.white};
      background-color: ${colors.lightGreen}
    }
  `;

  return (
    <SocialMediaLink href={profile}>
      <FontAwesomeIcon icon={getProviderIcon(provider)} />
    </SocialMediaLink>
  );
};