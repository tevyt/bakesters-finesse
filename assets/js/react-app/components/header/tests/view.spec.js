import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import utils from "../utils";
import Header, { Logo } from "../view";

describe("Header", () => {
  const wrapper = shallow(<Header />);
  let disableScrollingStub = null;
  let enableScrollingStub = null;

  //Setup Stubs
  beforeEach(() => {
    disableScrollingStub = sinon.stub(utils, "disableScrolling");

    enableScrollingStub = sinon.stub(utils, "enableScrolling");
  });

  //Tear Down Stubs
  afterEach(() => {
    disableScrollingStub.restore();
    enableScrollingStub.restore();
  });

  it("renders", () => {
    expect(wrapper).to.be.ok;
  });
  it("disables scrolling when menu is present", () => {
    const wrapper = mount(<Header menuSlideIn={true} />);
    expect(disableScrollingStub.called).to.be.true;
  });
  it("contains a logo", () => {
    expect(wrapper.find(".main-logo").length).to.be.greaterThan(0);
  });
  it("contains social media links", () => {
    expect(wrapper.find(".social-media-link")).to.have.lengthOf(3);
  });
  it("contains the bakery location", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#bakery-location")).to.have.lengthOf(1);
  });
  it("contains a navbar", () => {
    expect(wrapper.find("#nav")).to.have.lengthOf(1);
  });
  describe("NavBar", () => {
    it("contains 3 links", () => {
      const navList = wrapper.find("#nav-bar");
      expect(navList.children()).to.have.lengthOf(3);
    });
  });
});
