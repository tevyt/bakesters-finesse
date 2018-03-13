import React from "react";
import faker from "faker";

import Logo from "../../components/logo";

function About() {
  return (
    <section className="section about">
      <h1 className="title is-1 font-cursive">About</h1>
      <p>
        <Logo className="about-logo" />
        {faker.lorem.paragraph()}
      </p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
    </section>
  );
}

export default About;
