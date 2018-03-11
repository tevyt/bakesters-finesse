import React from 'react';
import EmailIcon from 'mdi-react/EmailIcon';
import PhoneInTalkIcon from 'mdi-react/PhoneInTalkIcon';
import PropTypes from 'prop-types';

import FieldLabel from './components/field-label';

function ContactForm({
  onInput,
  onBlur,
  onSubmit,
  fields,
  sending,
  loadProgress = 0,
}) {
  const isFieldInError = fieldName => {
    const field = fields[fieldName];
    return field.dirty && !field.valid;
  };

  const inputClass = (inputType, fieldName) => {
    return `${inputType} ${isFieldInError(fieldName) ? 'is-danger' : ''}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      {sending ? (
        <progress
          className="progress is-primary"
          value={loadProgress}
          max="100"
        />
      ) : null}
      <div className="field">
        <FieldLabel fieldName={'Name'} required={fields.name.required} />
        <div className="control">
          <input
            className={inputClass('input', 'name')}
            type="text"
            placeholder="Your Name"
            value={fields.name.value}
            onInput={onInput('name')}
            onBlur={() => onBlur('name')}
            disabled={sending}
          />
        </div>
        {isFieldInError('name') ? (
          <p className="help is-danger">Enter a valid name.</p>
        ) : null}
      </div>
      <div className="field">
        <FieldLabel fieldName={'Email'} required={fields.email.required} />
        <div className="control has-icons-left">
          <input
            className={inputClass('input', 'email')}
            type="email"
            placeholder="Your Email Address"
            value={fields.email.value}
            onInput={onInput('email')}
            onBlur={() => onBlur('email')}
            disabled={sending}
          />
          <span className="icon is-small is-left">
            <EmailIcon />
          </span>
        </div>
        {isFieldInError('email') ? (
          <p className="help is-danger">Enter a valid email address</p>
        ) : null}
      </div>
      <div className="field">
        <FieldLabel fieldName={'Phone'} required={fields.phone.required} />
        <div className="control has-icons-left">
          <input
            className={inputClass('input', 'phone')}
            type="tel"
            value={fields.phone.value}
            placeholder="Your Phone Number"
            onInput={onInput('phone')}
            onBlur={() => onBlur('phone')}
            disabled={sending}
          />
          <span className="icon is-small is-left">
            <PhoneInTalkIcon />
          </span>
        </div>
        {isFieldInError('phone') ? (
          <p className="help is-danger">Enter a valid phone number</p>
        ) : null}
      </div>
      <div className="field">
        <FieldLabel fieldName={'Message'} required={fields.message.required} />
        <div className="control">
          <textarea
            className={inputClass('textarea', 'message')}
            placeholder="Leave a message"
            value={fields.message.value}
            onInput={onInput('message')}
            onBlur={() => onBlur('message')}
            disabled={sending}
          />
        </div>
        {isFieldInError('message') ? (
          <p className="help is-danger">Please leave a message</p>
        ) : null}
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link" disabled={sending}>
            Send
          </button>
        </div>
      </div>
      <div className="legend">
        <span className="legend-symbol">*</span> indicates mandatory fields.
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  onInput: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  sending: PropTypes.bool,
  loadProgress: PropTypes.number,
};

export default ContactForm;
