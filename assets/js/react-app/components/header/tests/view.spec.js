import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Header, { Logo } from '..';


describe('Header', () => {
  const wrapper = mount(<Header />);
  it('renders', () => {
    expect(wrapper).to.be.ok;
  });
  it('contains a logo', () => {
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });
  it('contains social media links');
  it('contains the bakery location');
});