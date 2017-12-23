import React from "react";
import styled from "styled-components";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import providers from "./providers";
import colors from "../../styles/colors";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest
} from "@fortawesome/fontawesome-free-brands";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";

const getProviderIcon = provider => {
  switch (provider) {
    case providers.instagram:
      return faInstagram;
    case providers.facebook:
      return faFacebook;
    case providers.pinterest:
      return faPinterest;
    case providers.twitter:
      return faTwitter;
    case providers.email:
      return faEnvelope;
    default:
      return null;
  }
};

export default props => {
  const { provider, profile } = props;

  const SocialMediaLink = styled.a`
    display: inline-block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: ${colors.white};
    background-color: ${colors.green};
    border-radius: 100%;
    margin: 5px;
    &:hover {
      color: ${colors.white};
      background-color: ${colors.lightGreen};
    }
  `;

  return (
    <SocialMediaLink href={profile} target="_blank">
      <FontAwesomeIcon icon={getProviderIcon(provider)} />
    </SocialMediaLink>
  );
};
