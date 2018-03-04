import React from "react";
import PhoneInTalkIcon from "mdi-react/PhoneInTalkIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import EmailIcon from "mdi-react/EmailIcon";

import ContactOption from "./contact-option";

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

export default ContactOptions;
