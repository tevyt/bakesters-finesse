import React from 'react';
import PropTypes from 'prop-types';

function FieldLabel({fieldName, required}) {
  return (
    <label className={`label ${required ? 'required' : ''}`}>{fieldName}</label>
  );
}

FieldLabel.propTypes = {
  fieldName: PropTypes.string.required,
  required: PropTypes.bool,
};

export default FieldLabel;
