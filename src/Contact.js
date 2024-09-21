import React from 'react';
import './Contact.css'; // Importing CSS for styling

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>If you have any questions or need more information, feel free to reach out to us:</p>
            <ul>
                <li>Email: davidwachira0758@gmail.com</li>
                <li>Phone: +254 758293706</li>
                <li>Address: Limuru</li>
            </ul>
            <a href="tel:+254758293706" className="call-button">
                Call Us Now
            </a>
        </div>
    );
};

export default Contact;
