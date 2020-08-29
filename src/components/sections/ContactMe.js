import React, { useEffect, useState } from "react";

// REACT HOOK FORM
import { useForm } from "react-hook-form";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS
import "../../css/contactMeSection.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function ContactMe() {
  useEffect(() => {
    Aos.init();
  }, []);

  const { register, handleSubmit, getValues, errors } = useForm();

  const onSubmit = (data) => {
    /*fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", data }),
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));*/
    console.log(data);
  };

  return (
    <section id="contact-section" className="contact-section">
      <p className="section-tittle" data-aos="fade-left">
        Contact
      </p>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action=""
        className="contact-form"
        data-aos="flip-up"
        data-aos-duration="600"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text "
          id="name"
          name="name"
          className="input"
          ref={register({ required: true, maxLength: 60 })}
        />
        {errors.name && errors.name.type === "required" && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" />
            This field is required
          </span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" />
            The max length of 60 characters is reached.
          </span>
        )}
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="input"
          ref={register({ required: true, maxLength: 100 })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" />
            This field is required
          </span>
        )}
        {errors.email && errors.email.type === "maxLength" && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" />
            The max length of 100 characters is reached.
          </span>
        )}
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="input"
          rows="4"
          cols="50"
          ref={register({ required: true, maxLength: 500 })}
        />
        {errors.message && errors.message.type === "required" && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" />
            This field is required
          </span>
        )}
        {errors.message && errors.message.type === "maxLength" && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" />
            The max length of 500 characters is reached.
          </span>
        )}
        <input type="submit" value="Submit" className="contact-submit-button" />
      </form>
    </section>
  );
}

export default ContactMe;
