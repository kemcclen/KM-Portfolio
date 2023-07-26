import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "../contact/contact.css";

export const Contact = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Access the form fields
    const { user_name, user_email, message } = e.target.elements;

    // Check if name and message fields are empty
    if (!user_name.value.trim() || !message.value.trim()) {
      setErrorMessage("Name and message are required");
      return;
    }

    // Check if the email is valid
    if (!validateEmail(user_email.value)) {
      setErrorMessage("Invalid email");
      return;
    }

    // Send the email using emailjs
    emailjs
      .sendForm(
        "service_o29r5b4",
        "template_0btze6l",
        form.current,
        "IFL6tCpOfkbR1XECe"
      )
      .then((result) => {
        console.log(result.text);
        console.log("message sent");

        // Clear the input fields after the message is sent successfully
        form.current.reset();

        // Show a window alert saying "Message sent"
        window.alert("Message sent");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="contactPage">
      <section>
        {/* page text */}
        <div className="contactDetails">
          <motion.h2
            animate={{
              translateY: -40,
              transition: { duration: 1 },
            }}
          >
            GET IN TOUCH
          </motion.h2>
          <motion.h3
            animate={{
              translateY: -40,
              transition: { duration: 1 },
            }}
            className="contactTxt"
          >
            Stuck? No worries, here are some ideas of things you can include in
            your message:
          </motion.h3>
          <motion.p
            animate={{
              translateY: -40,
              transition: { duration: 1 },
            }}
          >
            <ul className="contactList">
              <li> The purpose, goal, and target audience of your project </li>
              <li>
                {" "}
                Any specific features, functionalies or technologies you have in
                mind{" "}
              </li>
              <li> Your desired timeline</li>
              <li> Examples of similar projects </li>
            </ul>
          </motion.p>
        </div>
        {/* contact form  */}
        <div className="formSection">
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1 },
            }}
            className="contactForm"
          >
            <form ref={form} onSubmit={sendEmail}>
              <fieldset>
                <legend>Contact Form</legend>

                <label htmlFor="user_name">Name:</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Name"
                  required
                />

                <label htmlFor="user_email">Email:</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="Email"
                  required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                />

                <input className="contactSendBtn" type="submit" value="Send" />

                {/* Display error message if there's any */}
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
              </fieldset>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
