import { expect } from "chai";
import sinon from "sinon";
import { actions } from "../reducer";
import { mapStateToProps, mapDispatchToProps } from "..";

describe("Header Container", () => {
  describe("mapStateToProps", () => {
    it("returns props matching state", () => {
      const state = {
        header: {
          menuSlideIn: false,
          menuSlideOut: false
        }
      };
      const { menuSlideIn, menuSlideOut } = mapStateToProps(state);
      expect(menuSlideIn).to.be.false;
      expect(menuSlideOut).to.be.false;
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
