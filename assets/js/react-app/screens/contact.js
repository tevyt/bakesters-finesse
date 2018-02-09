import React from "react";
import PhoneInTalkIcon from "mdi-react/PhoneInTalkIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import EmailIcon from "mdi-react/EmailIcon";
import PropTypes from "prop-types";

import CircleIcon from "../components/circle-icon";

function Contact() {
  return (
    <section className="section contact">
      <h1 className="title is-1 font-cursive">Contact</h1>
      <p>
        If you would like to place an order or enquire about our products and
        services you may contact using any of the methods below.
      </p>
      <div className="contact-options">
        <ContactOption
          href="tel:18764739816"
          text="18764739816"
          Icon={PhoneInTalkIcon}
        />
        <ContactOption
          href="https://www.instagram.com/bakestersfinesse/"
          Icon={InstagramIcon}
          text="Send us a message on Instagram."
        />
        <ContactOption
          href="mailto:bakestersfinesse@gmail.com"
          text="Send us an email: bakestersfinesse@gmail.com"
          Icon={EmailIcon}
        />
      </div>
    </section>
  );
}

function ContactOption({ href, text, Icon }) {
  return (
    <div className="contact-option">
      <CircleIcon tag="div">
        <Icon />
      </CircleIcon>
      <a href={href}>{text}</a>
    </div>
  );
}

ContactOption.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  Icon: PropTypes.func.isRequired
};

export default Contact;
