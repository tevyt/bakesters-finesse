import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import Header, { Logo } from "../view";

describe("Header", () => {
  const wrapper = mount(<Header />);
  it("renders", () => {
    expect(wrapper).to.be.ok;
  });
  it("contains a logo", () => {
    expect(wrapper.find(".main-logo").length).to.be.greaterThan(0);
  });
  it("contains social media links", () => {
    expect(wrapper.find(".social-media-link")).to.have.lengthOf(3);
  });
  it("contains the bakery location", () => {
    expect(wrapper.find("#bakery-location")).to.exist;
  });
  it("contains a navbar", () => {
    expect(wrapper.find("nav")).to.have.lengthOf(1);
  });
  describe("NavBar", () => {
    it("contains 3 links", () => {
      const navList = wrapper.find("nav ul").first();
      expect(navList.find("li")).to.have.lengthOf(3);
    });
  });
});
