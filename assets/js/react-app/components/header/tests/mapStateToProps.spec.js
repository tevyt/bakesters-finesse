import { expect } from "chai";
import sinon from "sinon";
import { actions } from "../reducer";
import { mapStateToProps, mapDispatchToProps } from "..";

describe("Header Container", () => {
  describe("mapStateToProps", () => {
    it("returns props matching state when showMenu is false", () => {
      const state = {
        showMenu: false
      };
      const props = mapStateToProps(state);
      expect(props.showMenu).to.equal(false);
    });
    it("returns props matching state when showMenu is true", () => {
      const state = {
        showMenu: true
      };
      const props = mapStateToProps(state);
      expect(props.showMenu).to.equal(true);
    });
  });

  describe("mapDispatchToProps", () => {
    const dispatch = sinon.spy();
    it("returns the toggleShowMenu prop", () => {
      const props = mapDispatchToProps(dispatch);
      expect(props.toggleShowMenu).to.exist;
    });
    describe("toggleShowMenu", () => {
      it("dispatches the expected action", () => {
        const props = mapDispatchToProps(dispatch);
        props.toggleShowMenu();
        expect(dispatch.calledWith({ type: actions.toggleShowMenu })).to.be
          .true;
      });
    });
  });
});
