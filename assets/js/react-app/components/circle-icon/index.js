import React from "react";
import PropTypes from "prop-types";

function CircleIcon(props) {
  const Tag = props.tag;
  return (
    <Tag
      className={`icon circle is-medium ${props.otherclasses || ""}`}
      {...props}
    >
      {props.children}
    </Tag>
  );
}

CircleIcon.propTypes = {
  children: PropTypes.element,
  otherclasses: PropTypes.string,
  tag: PropTypes.string.isRequired
};

export default CircleIcon;
