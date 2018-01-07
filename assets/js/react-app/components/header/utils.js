const noScroll = window => window.scrollTo(0, 0);

const disableScrolling = window => {
  window.addEventListener("scroll", noScroll);
};

const enableScrolling = window => {
  window.removeEventListener("scroll", noScroll);
};

export default {
  noScroll,
  disableScrolling,
  enableScrolling
};
