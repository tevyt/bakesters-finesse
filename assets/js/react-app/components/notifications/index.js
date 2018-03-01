import React from "react";
import PropTypes from "prop-types";

function Notification({ type, children }) {
  return <div className={`notification ${type}`}>{children}</div>;
}

export function SuccessNotification({ children }) {
  return <Notification type="is-success">{children}</Notification>;
}

export function ErrorNotification({ children }) {
  return <Notification type="is-danger">{children}</Notification>;
}

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

SuccessNotification.propTypes = {
  children: PropTypes.node.isRequired
};

ErrorNotification.propTypes = {
  children: PropTypes.node.isRequired
};
