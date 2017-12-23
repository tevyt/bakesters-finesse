import { css } from 'styled-components';

export default {
  handheld: (...args) => css`
    @media(max-width: 640px){
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media(min-width: 1200px){
      ${css(...args)}
    }
  `
}