import { expect } from "chai";
import { mapStateToProps } from "..";

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
});
