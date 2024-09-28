import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = ({ employeeName }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    employee: employeeName || "", // Pre-fill employee name if provided
  });

  const [isSent, setIsSent] = useState(false); // State to track if email is sent

  useEffect(() => {
    if (employeeName) {
      setFormData((prevData) => ({
        ...prevData,
        employee: employeeName, // Update employee name when prop changes
      }));
    }
  }, [employeeName]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = "service_acru5zg"; 
    const templateId = "template_lfga4y9"; 
    const publicKey = "rn09b0Xye82cYRBfO";   

    // Constructing the message body
    const messageBody = `
      Name: ${formData.name}
      Phone Number: ${formData.phone}
      Employee Booked: ${formData.employee}
    `;

    // Creating a new object to send
    const emailParams = {
      name: formData.name,
      phone: formData.phone,
      employee: formData.employee,
      message: messageBody,  // Sending the constructed message
    };

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");

        // Clear the form fields
        setFormData({
          name: "",
          phone: "",
          employee: employeeName || "", // Keep employee name for the next booking
        });

        // Set isSent to true
        setIsSent(true);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send email.");
      });
  };

  return (
    <div className="contact-form-container">
      <h2>Fill in the details</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="employee">Employee Name:</label>
          <input
            type="text"
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group submit-group">
          <button type="submit" className="submit-button">Send</button>
        </div>
      </form>

      {isSent && <p className="thank-you-msg">Thank you for trusting us and booking our services!</p>}
      {isSent && <p className="thank-you-msg">Payment Till : 5109808</p>}
    </div>
  );
};

export default ContactForm;
