import React from "react";
import PropTypes from "prop-types";

function Logo({ className }) {
  return (
    <figure className={className}>
      <img src="https://res.cloudinary.com/dv8aqe8lm/image/upload/c_scale,w_1280/v1513737624/logo_hmncq7.png" />
    </figure>
  );
}

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
