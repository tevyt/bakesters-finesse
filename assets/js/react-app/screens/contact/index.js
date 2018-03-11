import React, {Component} from "react";
import axios from "axios";

import ContactOptions from "./components/contact-options";
import ContactForm from "./components/contact-form";
import {
  SuccessNotification,
  ErrorNotification,
} from "../../components/notifications";
import * as validators from "../../validators";

class Contact extends Component {
  constructor(props) {
    super(props);
    const fields = {
      name: {
        value: "",
        dirty: false,
        valid: false,
        required: true,
        validator: validators.validateName,
      },
      email: {
        value: "",
        dirty: false,
        valid: false,
        required: true,
        validator: validators.validateEmailAddress,
      },
      phone: {
        value: "",
        dirty: false,
        valid: true,
        required: false,
        validator: validators.validatePhoneNumber,
      },
      message: {
        value: "",
        dirty: false,
        valid: false,
        required: true,
        validator: value => value.length,
      },
    };

    this.intitialState = {
      fields,
      messageSent: false,
      messageFailed: false,
      sending: false,
      loadProgress: 0,
    };

    this.state = this.intitialState;
  }

  onInput(fieldName) {
    const inputFunction = event => {
      const {validator, required} = this.state.fields[fieldName];
      const value = event.target.value.trim();
      this.setState({
        ...this.state,
        messageSent: false,
        messageFailed: false,
        fields: {
          ...this.state.fields,
          [fieldName]: {
            ...this.state.fields[fieldName],
            value,
            valid: this.isFieldValid({validator, value, required}),
          },
        },
      });
    };

    return inputFunction.bind(this);
  }

  isFieldValid({value, required, validator}) {
    if (!required && !value) {
      return true;
    } else {
      return validator(value.trim());
    }
  }

  dirtyField(fieldName) {
    const field = this.state.fields[fieldName];
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields,
        [fieldName]: {
          ...field,
          value: field.value.trim(),
          dirty: true,
          valid: this.isFieldValid(this.state.fields[fieldName]),
        },
      },
    });
  }

  submitForm(event) {
    event.preventDefault();

    this.dirtyAllFields();

    if (this.allFieldsValid()) {
      this.sendEmail();
    }
  }

  sendEmail() {
    const successCallBack = () => {
      this.setState({
        ...this.intitialState,
        messageSent: true,
        messageFailed: false,
        sending: false,
      });
    };

    const errorCallBack = () => {
      this.setState({
        ...this.state,
        messageSent: false,
        messageFailed: true,
        sending: false,
      });
    };

    const incrementLoadingProgress = () => {
      this.setState(previousState => {
        return {
          ...previousState,
          loadProgress: previousState.loadProgress + 30,
        };
      });
    };

    const fields = this.state.fields;
    const requestBody = {
      name: fields.name.value,
      phone: fields.phone.value,
      email: fields.email.value,
      message: fields.message.value,
    };

    this.setState({
      ...this.state,
      sending: true,
    });

    const loadingIntervalId = setInterval(incrementLoadingProgress, 500);
    return axios
      .post("/api/contact", requestBody)
      .then(successCallBack)
      .catch(errorCallBack)
      .finally(() => clearInterval(loadingIntervalId));
  }

  dirtyAllFields() {
    const fieldNames = Object.keys(this.state.fields);

    let dirtiedFields = {};

    fieldNames.forEach(
      fieldName =>
        (dirtiedFields[fieldName] = {
          ...this.state.fields[fieldName],
          dirty: true,
        }),
    );

    this.setState({
      ...this.state,
      fields: dirtiedFields,
    });
  }

  allFieldsValid() {
    const fieldNames = Object.keys(this.state.fields);
    return fieldNames.every(field => this.state.fields[field].valid);
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
        {this.state.messageSent && !this.state.sending ? (
          <SuccessNotification>
            Message sent. We will contact you shortly.
          </SuccessNotification>
        ) : null}
        {this.state.messageFailed && !this.state.sending ? (
          <ErrorNotification>
            Sorry, were unable to send the message at this time. Please try
            again later
          </ErrorNotification>
        ) : null}
        {!this.state.messageFailed &&
        !this.state.messageSent &&
        !this.state.sending ? (
          <div>Or leave a message below...</div>
        ) : null}
        <ContactForm
          fields={this.state.fields}
          onInput={this.onInput.bind(this)}
          onBlur={this.dirtyField.bind(this)}
          onSubmit={this.submitForm.bind(this)}
          sending={this.state.sending}
          loadProgress={this.state.loadProgress}
        />
      </section>
    );
  }
}

export default Contact;
