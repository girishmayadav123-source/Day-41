
import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting TravelVista! 🌍");
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <p style={styles.smallTitle}>TRAVELVISTA</p>
        <h1 style={styles.heading}>Let's Plan Your Next Adventure</h1>
        <p style={styles.subtitle}>
          Have a question or need help planning your trip? We are here for you.
        </p>
      </div>

      <div style={styles.container}>
        <div style={styles.info}>
          <h2 style={styles.infoTitle}>Get In Touch</h2>

          <div style={styles.infoCard}>
            <div style={styles.icon}>📍</div>
            <div>
              <h3 style={styles.cardTitle}>Visit Us</h3>
              <p style={styles.cardText}>
                TravelVista
                <br />
                MG Road, Hyderabad
                <br />
                Telangana, India
              </p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.icon}>📞</div>
            <div>
              <h3 style={styles.cardTitle}>Call Us</h3>
              <p style={styles.cardText}>
                +91 98765 43210
                <br />
                Mon - Sat, 9 AM - 6 PM
              </p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.icon}>✉️</div>
            <div>
              <h3 style={styles.cardTitle}>Email Us</h3>
              <p style={styles.cardText}>
                info@travelvista.com
                <br />
                support@travelvista.com
              </p>
            </div>
          </div>

          <div style={styles.social}>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
          </div>
        </div>

        <div style={styles.formCard}>
          <h2 style={styles.formTitle}>Send Us a Message</h2>
          <p style={styles.formText}>
            Tell us what you need and our travel experts will get back to you.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Your Name"
              value={message.name}
              onChange={handleChange}
              required
            />

            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Your Email"
              value={message.email}
              onChange={handleChange}
              required
            />

            <input
              style={styles.input}
              type="text"
              name="subject"
              placeholder="Subject"
              value={message.subject}
              onChange={handleChange}
              required
            />

            <textarea
              style={styles.textarea}
              name="text"
              rows="6"
              placeholder="Write your message..."
              value={message.text}
              onChange={handleChange}
              required
            ></textarea>

            <button style={styles.button} type="submit">
              Send Message ✈
            </button>
          </form>
        </div>
      </div>

      <div style={styles.mapBox}>
        <h2 style={styles.mapTitle}>Find Our Office</h2>

        <iframe
          title="TravelVista Office"
          src="https://www.google.com/maps?q=Hyderabad,India&output=embed"
          style={styles.map}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f8f8",
    paddingBottom: "60px",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    textAlign: "center",
    padding: "70px 20px 45px",
    background: "linear-gradient(135deg, #064b57, #087f8c)",
    color: "white",
  },

  smallTitle: {
    letterSpacing: "4px",
    fontSize: "13px",
    fontWeight: "bold",
    color: "#ffd166",
  },

  heading: {
    fontSize: "42px",
    margin: "15px 0",
  },

  subtitle: {
    fontSize: "16px",
    opacity: "0.9",
  },

  container: {
    maxWidth: "1050px",
    margin: "-20px auto 0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
    padding: "0 20px",
  },

  info: {
    background: "#12343b",
    color: "white",
    padding: "40px",
    borderRadius: "20px",
  },

  infoTitle: {
    fontSize: "28px",
    marginBottom: "30px",
  },

  infoCard: {
    display: "flex",
    gap: "18px",
    marginBottom: "25px",
  },

  icon: {
    fontSize: "25px",
    width: "45px",
    height: "45px",
    background: "#087f8c",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    margin: "0 0 5px",
  },

  cardText: {
    margin: 0,
    lineHeight: "1.6",
    color: "#d8e5e7",
    fontSize: "14px",
  },

  social: {
    display: "flex",
    gap: "12px",
    marginTop: "35px",
    flexWrap: "wrap",
  },

  formCard: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
  },

  formTitle: {
    fontSize: "28px",
    color: "#12343b",
    margin: "0 0 10px",
  },

  formText: {
    color: "#777",
    marginBottom: "25px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "9px",
    fontSize: "15px",
    outline: "none",
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "9px",
    fontSize: "15px",
    resize: "vertical",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "15px",
    border: "none",
    borderRadius: "9px",
    background: "#087f8c",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  mapBox: {
    maxWidth: "1050px",
    margin: "35px auto 0",
    padding: "0 20px",
  },

  mapTitle: {
    color: "#12343b",
    marginBottom: "15px",
  },

  map: {
    width: "100%",
    height: "300px",
    border: "0",
    borderRadius: "20px",
  },
};

export default Contact;

