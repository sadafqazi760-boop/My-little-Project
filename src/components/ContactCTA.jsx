
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactCTA = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pI76maz",
        "template_4avgkhh",
        form.current,
        "i9Qds2IQ6GtY4RZhv"
      )
      .then(() => {
        setSent(true);
        form.current.reset();

        setTimeout(() => {
          setSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section className="contact-cta" id="contact">

      <div className="contact-glow"></div>

      <div className="contact-content">

        <p className="contact-tag">
          ✦ LET'S CONNECT
        </p>

        <h2>
          Have a custom <span>idea?</span> 💡
        </h2>

        <p className="contact-description">
          Let's create cute and beautiful web apps together.
          Feel free to reach out anytime!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <div className="form-row">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>

          <button
            type="submit"
            className="message-btn"
          >
            {sent ? "Message Sent! 💜" : "Send Message ✨"}
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactCTA;