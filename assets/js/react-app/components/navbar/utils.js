import { keyframes } from "styled-components";

export const slideIn = keyframes`
    from{
      transform: translate(800px)
    }

    to{
      transform: translate(0px);
    }
  `;

export const slideOut = keyframes`
    from{
      transform: translate(0);
    }

    to{
      transform: translate(800px);
    }

  `;

export const getAnimation = ({ menuSlideIn, menuSlideOut }) => {
  if (menuSlideIn) {
    return `animation ${slideIn} 0.4s ease-in-out;`;
  }
  if (menuSlideOut) {
    return `animation ${slideOut} 0.5s linear;`;
  }

  return "";
};

export default { getAnimation, slideIn, slideOut };
