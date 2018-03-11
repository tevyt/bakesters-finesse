import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "../../../../components/circle-icon";

function ContactOption({href, text, Icon}) {
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
  Icon: PropTypes.func.isRequired,
};

export default ContactOption;
