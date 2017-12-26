import reducer, { actionCreators, actions } from "../reducer";
import { expect } from "chai";

describe("Header reducer", () => {
  describe("reducer", () => {
    it("initial state", () => {
      const newState = reducer(undefined, {});
      expect(newState).to.deep.equal({
        menuSlideIn: false,
        menuSlideOut: false
      });
    });
    describe("toggleShowMenu", () => {
      it("set slideIn to true and slideOut to false when called initially", () => {
        const initialstate = {
          menuSlideIn: false,
          menuSlideOut: false
        };

        const newState = reducer(initialstate, actionCreators.toggleShowMenu());
        expect(newState).to.deep.equal({
          menuSlideIn: true,
          menuSlideOut: false
        });
      });
      it("swaps the values of menuSlideIn and menuSlideOut", () => {
        const initialstate = {
          menuSlideIn: true,
          menuSlideOut: false
        };
        const newstate = reducer(initialstate, actionCreators.toggleShowMenu());
        expect(newstate).to.deep.equal({
          menuSlideIn: false,
          menuSlideOut: true
        });
      });
    });
  });
  describe("action creators", () => {
    describe("toggleShowMenu", () => {
      it("returns the expected action", () => {
        const action = actionCreators.toggleShowMenu();
        expect(action).to.deep.equal({ type: actions.toggleShowMenu });
      });
    });
  });
});
