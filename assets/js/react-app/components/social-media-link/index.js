import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import providers from './providers';
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

  return (
    <div>
      <a href={profile}>
        <FontAwesomeIcon icon={getProviderIcon(provider)} />
      </a>
    </div>
  );
};