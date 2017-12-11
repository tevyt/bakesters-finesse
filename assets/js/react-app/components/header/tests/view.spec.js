import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header, { Logo } from '..';


describe('Header', () => {
  const wrapper = shallow(<Header />);
  it('renders', () => {
    expect(wrapper).to.be.ok;
  });
  it('contains a logo', () => {
  });
  it('contains social media links');
  it('contains the bakery location');
});