const noScroll = window => window.scrollTo(0, 0);

const disableScrolling = window => {
  window.addEventListener("scroll", () => noScroll(window));
};

const enableScrolling = window => {
  window.removeEventListener("scroll", () => noScroll(window));
};

export default {
  noScroll,
  disableScrolling,
  enableScrolling
};
