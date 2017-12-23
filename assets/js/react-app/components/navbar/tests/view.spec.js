import React from "react";
import NavBar, { NavLink } from "..";
import { mount } from "enzyme";
import { expect } from "chai";

describe("NavBar", () => {
  it("renders", () => {
    expect(mount(<NavBar />)).to.be.ok;
  });
  it("renders links passed in its body", () => {
    const navBar = (
      <NavBar>
        <NavLink>Test 1</NavLink>
        <NavLink>Test 2</NavLink>
        <NavLink>Test 3</NavLink>
      </NavBar>
    );
    const wrapper = mount(navBar);
    expect(
      wrapper
        .find("ul")
        .first()
        .children()
    ).to.have.lengthOf(3);
  });
  describe("NavLink", () => {
    it("contains an li", () => {
      expect(mount(<NavLink />).find("li")).to.have.lengthOf(1);
    });
    it("creates a link with props provided", () => {
      const navLink = <NavLink text="Text" href={"Href"} />;
      const wrapper = mount(navLink).find("a");
      expect(wrapper.text()).to.equal("Text");
      expect(wrapper.prop("href")).to.equal("Href");
    });
  });
});
