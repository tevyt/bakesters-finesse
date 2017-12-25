import reducer, { actionCreators, actions } from "../reducer";
import { expect } from "chai";

describe("Header reducer", () => {
  describe("reducer", () => {
    it("initial state", () => {
      const newState = reducer(undefined, {});
      expect(newState).to.deep.equal({ showMenu: false });
    });
    describe("toggleShowMenu", () => {
      it("sets showmenu to false if it is initially true", () => {
        const initialstate = {
          showMenu: true
        };
        const newstate = reducer(initialstate, actionCreators.toggleShowMenu());
        expect(newstate).to.deep.equal({ showMenu: false });
      });
      it("sets showmenu to true if it is initially false", () => {
        const initialstate = {
          showMenu: false
        };
        const newstate = reducer(initialstate, actionCreators.toggleShowMenu());
        expect(newstate).to.deep.equal({ showMenu: true });
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
