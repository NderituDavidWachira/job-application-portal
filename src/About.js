import React, { useState, useEffect } from 'react'; 
import './About.css';

const employeeDescriptions = [
    { name: 'Mama Fua', img: '/images/mama fua.jpg', description: 'We provide a reliable person to do all your cleaning. Our employees are well-behaved.' },
    { name: 'Daycare Services', img: '/images/Day care.jpg', description: 'Our daycare professionals offer safe and caring environments for your children.' },
    { name: 'House Help', img: '/images/house.jpg', description: 'Our housekeepers are trained to handle all your household tasks efficiently.' },
    { name: 'Car Hire', img: '/images/car.jpg', description: 'Our drivers are professional and ensure safe transportation for all your needs.' },
    { name: 'Plumber', img: '/images/plumber.jpg', description: 'Experienced plumbers ready to fix any plumbing issues.' },
    { name: 'Electrician', img: '/images/electrician.jpg', description: 'Qualified electricians for all your electrical needs.' },
    { name: 'Beauty Services', img: '/images/beauty.jpg', description: 'Professional beauticians to enhance your beauty and confidence.' },
    { name: 'Delivery Services', img: '/images/delivery.jpg', description: 'Reliable delivery services for your shopping and other needs.' },
    { name: 'Tutors', img: '/images/tutor.avif', description: 'Experienced tutors available for various subjects and levels.' },
    // Add more employee descriptions here as needed
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % employeeDescriptions.length);
        }, 5000); // Change image every 20 seconds

        return () => clearInterval(interval);
    }, []);

    const currentEmployee = employeeDescriptions[currentIndex];

    return (
        <div className="about">
            <h1>About Us</h1>
            <p>We offer a variety of services, connecting you with professionals in household, personal care, transport, maintenance, and more. Our goal is to make everyday tasks easier by providing reliable and skilled professionals at your fingertips.</p>

            <div className="image-slider">
                <img src={currentEmployee.img} alt={currentEmployee.name} className="employee-image" />
                <div className="image-text">
                    <h3>{currentEmployee.name}</h3>
                    <p>{currentEmployee.description}</p>
                </div>
            </div>
        </div>
    );
};

export default About;
