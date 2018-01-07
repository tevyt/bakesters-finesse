import { expect } from "chai";
import sinon from "sinon";

import utils from "../utils";

describe("Header Utils", () => {
  const window = {
    scrollTo: sinon.spy(),
    addEventListener: sinon.spy(),
    removeEventListener: sinon.spy()
  };

  describe("noScroll", () => {
    it("sets scrolls to the top of the window", () => {
      utils.noScroll(window);
      expect(window.scrollTo.calledWith(0, 0)).to.be.true;
    });
  });
  describe("disableScrolling", () => {
    it("adds an event listener for the scroll event", () => {
      utils.disableScrolling(window);
      expect(window.addEventListener.calledWith("scroll", utils.noScroll)).to.be
        .true;
    });
  });
  describe("enableScrolling", () => {
    it("removes an event listener for the scroll event", () => {
      utils.enableScrolling(window);
      expect(window.removeEventListener.calledWith("scroll", utils.noScroll)).to
        .be.true;
    });
  });
});
