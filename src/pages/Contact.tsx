// import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form
        className="contact-form"
        action="https://formsubmit.co/2fc6565f0f97ef32212d9e3a98db50e5"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
