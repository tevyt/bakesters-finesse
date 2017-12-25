import React from "react";
import NavBar, { NavLink } from "..";
import sinon from "sinon";
import { mount } from "enzyme";
import { expect } from "chai";

describe("NavBar", () => {
  const navBar = (
    <NavBar>
      <NavLink>Test 1</NavLink>
      <NavLink>Test 2</NavLink>
      <NavLink>Test 3</NavLink>
    </NavBar>
  );
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

  it("clicking the hamburger triggers the onMenuClick function", () => {
    const onMenuClick = sinon.spy();
    const navBar = (
      <NavBar onMenuClick={onMenuClick}>
        <NavLink>Test 1</NavLink>
        <NavLink>Test 2</NavLink>
        <NavLink>Test 3</NavLink>
      </NavBar>
    );
    const wrapper = mount(navBar);
    wrapper
      .find("#nav-hamburger")
      .first() //It's finding 2 divs with #nav-hamburger I don't know why
      .simulate("click");
    expect(onMenuClick.called).to.be.true;
  });

  it("renders the full menu when showMenu prop is true", () => {
    const navBar = (
      <NavBar showMenu={true}>
        <NavLink>Test 1</NavLink>
        <NavLink>Test 2</NavLink>
        <NavLink>Test 3</NavLink>
      </NavBar>
    );

    const wrapper = mount(navBar);
    expect(wrapper.find("#nav-menu")).to.have.lengthOf(1);
  });

  it("does not render the full menu if showMenu is false", () => {
    const navBar = (
      <NavBar showMenu={false}>
        <NavLink>Test 1</NavLink>
        <NavLink>Test 2</NavLink>
        <NavLink>Test 3</NavLink>
      </NavBar>
    );

    const wrapper = mount(navBar);
    expect(wrapper.find("#nav-menu")).to.have.lengthOf(0);
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
