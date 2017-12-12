import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import providers from '../providers';

import SocialMediaLink from '..';

describe('social-media-link', () => {
  const profile = 'http://www.facebook.com/foo';
  it('renders', () => {
    expect(shallow(<SocialMediaLink profile='' provider='' />)).to.be.ok;
  });
  it('links to a social media page', () => {
    const wrapper = shallow(<SocialMediaLink profile={profile} provider='' />);
    expect(wrapper.find('a').first().prop('href')).to.equal(profile);
  });
  describe('Social media providers', () => {
    it('renders an icon for Instagram', () => {
      const wrapper = mount(<SocialMediaLink profile={profile} provider={providers.instagram} />);
      expect(wrapper.find('svg').hasClass("fa-instagram")).to.be.true;
    });
    it('renders an icon for Facebook', () => {
      const wrapper = mount(<SocialMediaLink profile={profile} provider={providers.facebook} />);
      expect(wrapper.find('svg').hasClass("fa-facebook")).to.be.true;
    });
    it('renders an icon for Pintrest', () => {
      const wrapper = mount(<SocialMediaLink profile={profile} provider={providers.pinterest} />);
      expect(wrapper.find('svg').hasClass("fa-pinterest")).to.be.true;
    });
    it('renders an icon for Twitter', () => {
      const wrapper = mount(<SocialMediaLink profile={profile} provider={providers.twitter} />);
      expect(wrapper.find('svg').hasClass("fa-twitter")).to.be.true;
    });
  });
});