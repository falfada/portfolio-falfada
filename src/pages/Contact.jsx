import "../scss/pages/Contact.scss";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  //   Error messages
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    target.classList.remove("error");

    switch (inputType) {
      case "name":
        setName(inputValue);
        setErrorName("");
        break;
      case "email":
        setEmail(inputValue);
        setErrorEmail("");
        break;
      default:
        setMessage(inputValue);
        setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      e.target.name.classList.add("error");
      setErrorName("Name is required. Please enter your name.");
      return;
    }
    if (email === "") {
      e.target.email.classList.add("error");
      setErrorEmail("Email is required. Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      e.target.email.classList.add("error");
      setErrorEmail(
        "Please enter a valid email address. It should include an '@' symbol and a domain name."
      );
      return;
    }
    if (message === "") {
      e.target.message.classList.add("error");
      setErrorMessage("Message is required. Please enter your message.");
      return;
    }

    setSuccessMessage("Your message has been sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="container">
      <div className="contact-container">
        <h1 className="contact-title">Let’s connect!</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handleChange}
            />
            {errorName && <p className="error-text">{errorName}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
            {errorEmail && <p className="error-text">{errorEmail}</p>}
          </div>
          <div>
            <textarea name="message" value={message} onChange={handleChange} placeholder="Your message">
            </textarea>
            {errorMessage && <p className="error-text">{errorMessage}</p>}
          </div>
          <button type="submit">Submit</button>
          {successMessage && <p className="success-text">{successMessage}</p>}
        </form>
      </div>
    </section>
  );
}
