
import React, { useState } from "react";

const Booking = () => {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    travelers: "",
    packageType: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* BOOKING FORM */}
        <div style={styles.formCard}>
          <div style={styles.header}>
            <span style={styles.logo}>✈ TRAVELVISTA</span>

            <h1 style={styles.heading}>
              Book Your Trip
            </h1>

            <p style={styles.headerText}>
              Plan your next unforgettable journey with us.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div style={styles.inputGroup}>
              <label>Full Name</label>

              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Enter your name"
                value={booking.name}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label>Email Address</label>

              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={booking.email}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.row}>

              <div style={styles.inputGroup}>
                <label>Destination</label>

                <select
                  style={styles.input}
                  name="destination"
                  value={booking.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Destination</option>
                  <option value="Goa">Goa</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Manali">Manali</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Bali">Bali</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label>Travel Date</label>

                <input
                  style={styles.input}
                  type="date"
                  name="date"
                  value={booking.date}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div style={styles.row}>

              <div style={styles.inputGroup}>
                <label>Travelers</label>

                <input
                  style={styles.input}
                  type="number"
                  name="travelers"
                  min="1"
                  placeholder="No. of people"
                  value={booking.travelers}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label>Package</label>

                <select
                  style={styles.input}
                  name="packageType"
                  value={booking.packageType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Package</option>
                  <option value="Beach Escape">
                    Beach Escape
                  </option>

                  <option value="Mountain Adventure">
                    Mountain Adventure
                  </option>

                  <option value="Heritage Tour">
                    Heritage Tour
                  </option>

                  <option value="Luxury Holiday">
                    Luxury Holiday
                  </option>
                </select>
              </div>

            </div>

            <button type="submit" style={styles.button}>
              Confirm Booking ✈
            </button>

          </form>
        </div>

        {/* BOOKING DETAILS */}
        {submitted && (
          <div style={styles.detailsCard}>

            <div style={styles.success}>

              <span style={styles.check}>
                ✓
              </span>

              <div>
                <h2 style={styles.successTitle}>
                  Booking Confirmed!
                </h2>

                <p style={styles.successText}>
                  Your trip has been successfully booked.
                </p>
              </div>

            </div>

            <h3 style={styles.detailsHeading}>
              Booking Details
            </h3>

            <div style={styles.detailsGrid}>

              <div style={styles.detail}>
                <span style={styles.detailIcon}>👤</span>

                <div>
                  <small style={styles.detailLabel}>
                    Full Name
                  </small>

                  <strong style={styles.detailValue}>
                    {booking.name}
                  </strong>
                </div>
              </div>

              <div style={styles.detail}>
                <span style={styles.detailIcon}>📧</span>

                <div>
                  <small style={styles.detailLabel}>
                    Email
                  </small>

                  <strong style={styles.detailValue}>
                    {booking.email}
                  </strong>
                </div>
              </div>

              <div style={styles.detail}>
                <span style={styles.detailIcon}>📍</span>

                <div>
                  <small style={styles.detailLabel}>
                    Destination
                  </small>

                  <strong style={styles.detailValue}>
                    {booking.destination}
                  </strong>
                </div>
              </div>

              <div style={styles.detail}>
                <span style={styles.detailIcon}>📅</span>

                <div>
                  <small style={styles.detailLabel}>
                    Travel Date
                  </small>

                  <strong style={styles.detailValue}>
                    {booking.date}
                  </strong>
                </div>
              </div>

              <div style={styles.detail}>
                <span style={styles.detailIcon}>👥</span>

                <div>
                  <small style={styles.detailLabel}>
                    Travelers
                  </small>

                  <strong style={styles.detailValue}>
                    {booking.travelers}
                  </strong>
                </div>
              </div>

              <div style={styles.detail}>
                <span style={styles.detailIcon}>🎒</span>

                <div>
                  <small style={styles.detailLabel}>
                    Package
                  </small>

                  <strong style={styles.detailValue}>
                    {booking.packageType}
                  </strong>
                </div>
              </div>

            </div>

            <p style={styles.footerText}>
              Our travel team will contact you shortly with further details.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #eaf8f8, #f7fbff)",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    maxWidth: "850px",
    margin: "auto",
  },

  formCard: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 35px rgba(0,0,0,0.1)",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  logo: {
    color: "#087f8c",
    fontWeight: "bold",
    letterSpacing: "2px",
  },

  heading: {
    fontSize: "36px",
    color: "#12343b",
    margin: "15px 0 8px",
  },

  headerText: {
    color: "#777",
    margin: "0",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginBottom: "18px",
  },

  input: {
    marginTop: "8px",
    padding: "13px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
    background: "white",
  },

  row: {
    display: "flex",
    gap: "18px",
  },

  button: {
    width: "100%",
    padding: "15px",
    background: "#087f8c",
    color: "white",
    border: "none",
    borderRadius: "9px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "5px",
  },

  detailsCard: {
    marginTop: "25px",
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 35px rgba(0,0,0,0.1)",
    borderTop: "5px solid #087f8c",
  },

  success: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    paddingBottom: "20px",
    borderBottom: "1px solid #eee",
  },

  check: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#087f8c",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
  },

  successTitle: {
    margin: "0 0 5px",
    color: "#12343b",
  },

  successText: {
    margin: "0",
    color: "#777",
  },

  detailsHeading: {
    color: "#12343b",
    margin: "25px 0 18px",
  },

  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
  },

  detail: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px",
    background: "#f5fafa",
    borderRadius: "10px",
  },

  detailIcon: {
    fontSize: "22px",
  },

  detailLabel: {
    display: "block",
    color: "#888",
    marginBottom: "4px",
  },

  detailValue: {
    display: "block",
    color: "#12343b",
  },

  footerText: {
    textAlign: "center",
    color: "#777",
    marginTop: "25px",
    fontSize: "14px",
  },
};

export default Booking;

