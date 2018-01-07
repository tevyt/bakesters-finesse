import { expect } from "chai";
import { slideIn, slideOut, getAnimation } from "../utils";

describe("NavBar Utils", () => {
  describe("getAnimations", () => {
    it("returns the slide in animation when the menuSlideIn prop is set", () => {
      const animation = getAnimation({ menuSlideIn: true, menuSlideOut: true });
      expect(animation).to.contain(slideIn);
    });
    it("returns the slide out animation when the menuSlideOut prop is set", () => {
      const animation = getAnimation({
        menuSlideIn: false,
        menuSlideOut: true
      });
      expect(animation).to.contain(slideOut);
    });
    it("returns an empty string if neither prop is set", () => {
      const animation = getAnimation({
        menuSlideIn: false,
        menuSlideOut: false
      });
      expect(animation).to.equal("");
    });
  });
});
