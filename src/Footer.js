import React from 'react';
// Import Font Awesome
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>&copy; Apply Your Best Work With Passion</p>
            <p style={styles.text}>
                <a href="https://wa.me/+254758293706" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    <FaWhatsapp /> WhatsApp for any help
                </a>
            </p>
            <p style={styles.text}>Contact: +254758293706</p>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '5px 5px', 
        backgroundColor: 'grey', 
        fontSize: '14px', 
        height: '70px',
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        boxSizing: 'border-box', 
        boxShadow: '0px -1px 5px rgba(0, 0, 0, 0.1)', 
    },
    text: {
        margin: '0px', 
        color: 'black', 
    },
    link: {
        color: '#25D366', 
        textDecoration: 'none',
    },
};

export default Footer;
