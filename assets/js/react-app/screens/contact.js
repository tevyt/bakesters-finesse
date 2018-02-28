import React, { Component } from "react";
import PhoneInTalkIcon from "mdi-react/PhoneInTalkIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import EmailIcon from "mdi-react/EmailIcon";
import PropTypes from "prop-types";
import axios from "axios";

import CircleIcon from "../components/circle-icon";

class Contact extends Component {
  constructor(props) {
    super(props);
    const fields = {
      name: {
        value: "",
        dirty: false,
        valid: false,
        validator: value => value.length > 0
      },
      email: {
        value: "",
        dirty: false,
        valid: false,
        validator: value =>
          value.match(/^[a-zA-Z0-9_\-.+]+@[a-zA-Z0-9_\-.+]+\.[a-zA-Z]{2,5}$/)
      },
      phone: {
        value: "",
        dirty: false,
        valid: false,
        validator: value => value.length > 0
      },
      message: {
        value: "",
        dirty: false,
        valid: false,
        validator: value => value.length >= 5
      }
    };

    this.intitialState = {
      fields,
      messageSent: false,
      messageFailed: false
    };

    this.state = this.intitialState;
  }

  onInput(fieldName) {
    const inputFunction = event => {
      const validator = this.state.fields[fieldName].validator;
      this.setState({
        ...this.state,
        messageSent: false,
        messageFailed: false,
        fields: {
          ...this.state.fields,
          [fieldName]: {
            ...this.state.fields[fieldName],
            value: event.target.value,
            valid: validator(event.target.value)
          }
        }
      });
    };

    return inputFunction.bind(this);
  }

  dirtyField(fieldName) {
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields,
        [fieldName]: {
          ...this.state.fields[fieldName],
          dirty: true
        }
      }
    });
  }

  submitForm(event) {
    event.preventDefault();

    this.dirtyAllFields();

    if (this.allFieldsValid()) {
      console.log(event);
      this.sendEmail().then(() => event.target.reset());
    }
  }

  sendEmail() {
    const successCallBack = () => {
      this.setState({
        ...this.intitialState,
        messageSent: true,
        messageFailed: false
      });
    };

    const errorCallBack = () => {
      this.setState({
        ...this.state,
        messageSent: false,
        messageFailed: true
      });
    };

    const fields = this.state.fields;
    const requestBody = {
      name: fields.name.value,
      phone: fields.phone.value,
      email: fields.email.value,
      message: fields.message.value
    };

    return axios
      .post("/api/contact", requestBody)
      .then(successCallBack)
      .catch(errorCallBack);
  }

  dirtyAllFields() {
    const fieldNames = Object.keys(this.state.fields);

    let dirtiedFields = {};

    fieldNames.forEach(
      fieldName =>
        (dirtiedFields[fieldName] = {
          ...this.state.fields[fieldName],
          dirty: true
        })
    );

    this.setState({
      ...this.state,
      fields: dirtiedFields
    });
  }

  allFieldsValid() {
    const fieldNames = Object.keys(this.state.fields);
    return fieldNames.every(field => this.state.fields[field].valid);
  }

  successNotification() {
    return (
      <div className="notification is-success">
        Your message has been sent. We will get back to you soon.
      </div>
    );
  }

  errorNotification() {
    return (
      <div className="notification is-danger">
        Sorry, an error occured. Please try again later.
      </div>
    );
  }

  render() {
    return (
      <section className="section contact">
        <h1 className="title is-1 font-cursive">Contact</h1>
        <p>
          If you would like to place an order or enquire about our products and
          services you may contact using any of the methods below.
        </p>
        <ContactOptions />
        {this.state.messageSent ? this.successNotification() : null}
        {this.state.messageFailed ? this.errorNotification() : null}
        {!this.state.messageFailed && !this.state.messageSent ? (
          <div>Or leave a message below...</div>
        ) : null}
        <ContactForm
          fields={this.state.fields}
          onInput={this.onInput.bind(this)}
          onBlur={this.dirtyField.bind(this)}
          onSubmit={this.submitForm.bind(this)}
        />
      </section>
    );
  }
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

function ContactOptions() {
  return (
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
  );
}

function ContactForm({ onInput, onBlur, onSubmit, fields }) {
  const isFieldInError = fieldName => {
    const field = fields[fieldName];
    return field.dirty && !field.valid;
  };

  const inputClass = (inputType, fieldName) => {
    return `${inputType} ${isFieldInError(fieldName) ? "is-danger" : ""}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className={inputClass("input", "name")}
            type="text"
            placeholder="Your Name"
            value={fields.name.value}
            onInput={onInput("name")}
            onBlur={() => onBlur("name")}
          />
        </div>
        {isFieldInError("name") ? (
          <p className="help is-danger">Enter your name.</p>
        ) : null}
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input
            className={inputClass("input", "email")}
            type="email"
            placeholder="Your Email Address"
            value={fields.email.value}
            onInput={onInput("email")}
            onBlur={() => onBlur("email")}
          />
          <span className="icon is-small is-left">
            <EmailIcon />
          </span>
        </div>
        {isFieldInError("email") ? (
          <p className="help is-danger">Email is invalid.</p>
        ) : null}
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <div className="control has-icons-left">
          <input
            className={inputClass("input", "phone")}
            type="tel"
            placeholder="Your Phone Number"
            onInput={onInput("phone")}
            onBlur={() => onBlur("phone")}
          />
          <span className="icon is-small is-left">
            <PhoneInTalkIcon />
          </span>
        </div>
        {isFieldInError("phone") ? (
          <p className="help is-danger">Phone number is invalid.</p>
        ) : null}
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className={inputClass("textarea", "message")}
            placeholder="Leave a message"
            onInput={onInput("message")}
            onBlur={() => onBlur("message")}
          />
        </div>
        {isFieldInError("message") ? (
          <p className="help is-danger">Please leave a message</p>
        ) : null}
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

ContactOption.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  Icon: PropTypes.func.isRequired
};

ContactForm.propTypes = {
  onInput: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired
};

export default Contact;
