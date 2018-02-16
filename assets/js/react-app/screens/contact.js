import React, { Component } from "react";
import PhoneInTalkIcon from "mdi-react/PhoneInTalkIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import EmailIcon from "mdi-react/EmailIcon";
import PropTypes from "prop-types";

import CircleIcon from "../components/circle-icon";

class Contact extends Component {
  constructor(props) {
    super(props);
    const fields = {
      name: {
        value: "",
        dirty: false,
        valid: false
      },
      email: {
        value: "",
        dirty: false,
        valid: false
      },
      phone: {
        value: "",
        dirty: false,
        valid: false
      },
      message: {
        value: "",
        dirty: false,
        valid: false
      }
    };

    this.state = {
      fields,
      dirty: false
    };
  }

  onInput(fieldName) {
    const inputFunction = event => {
      this.setState({
        ...this.state,
        fields: {
          ...this.state.fields,
          [fieldName]: {
            ...this.state.fields[fieldName],
            value: event.target.value
          }
        }
      });
    };

    return inputFunction.bind(this);
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
        Or leave a message below...
        <ContactForm
          fields={this.state.fields}
          onInput={this.onInput.bind(this)}
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

function ContactForm({ onInput, fields }) {
  return (
    <form
      className="contact-form"
      onSubmit={e => {
        e.preventDefault();
        console.log("Form submitted");
      }}
    >
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Your Name"
            value={fields.name.value}
            onInput={onInput("name")}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="email"
            placeholder="Your Email Address"
          />
          <span className="icon is-small is-left">
            <EmailIcon />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <div className="control has-icons-left">
          <input className="input" type="tel" placeholder="Your Phone Number" />
          <span className="icon is-small is-left">
            <PhoneInTalkIcon />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Leave a message" />
        </div>
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
  fields: PropTypes.object.isRequired
};

export default Contact;
