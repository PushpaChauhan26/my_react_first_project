
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const formData = new FormData(e.target);

      const response = await fetch(
        "https://formspree.io/f/xyewoopz",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError("Message send nahi hua. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <h2>Contact Us</h2>
        <p>Have a project in mind? Let's talk!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            We would love to hear from you. Contact us for any
            questions or project inquiries.
          </p>

          <div className="contact-detail">
            <span>📧</span>
            <p>Email: info@example.com</p>
          </div>

          <div className="contact-detail">
            <span>📞</span>
            <p>Phone: +91 9876543210</p>
          </div>

          <div className="contact-detail">
            <span>📍</span>
            <p>Location: India</p>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <p style={{ color: "green", fontWeight: "bold" }}>
              Thank you! Your message has been sent successfully.
            </p>
          )}

          {error && (
            <p style={{ color: "red", fontWeight: "bold" }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
