import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const services = [
    { name: 'Mama Fua', img: '/images/mama fua.jpg' },
    { name: 'Daycare Services', img: '/images/Day care.jpg' },
    { name: 'House Help', img: '/images/house.jpg' },
    { name: 'Car Hire', img: '/images/car.jpg' },
    { name: 'Plumber', img: '/images/plumber.jpg' },
    { name: 'Electrician', img: '/images/electrician.jpg' },
    { name: 'Beauty Services', img: '/images/beauty.jpg' },
    { name: 'Delivery Services', img: '/images/delivery.jpg' },
    { name: 'Tutors', img: '/images/tutor.avif' }
];

const Login = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [signUpData, setSignUpData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        username: '',
        password: '',
        user_type: 'employee'
    });
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const navigate = useNavigate();

    // ✅ Add class to body ONLY inside component
    useEffect(() => {
        document.body.classList.add('login-page');
        return () => {
            document.body.classList.remove('login-page');
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 7000);
        return () => clearInterval(intervalId);
    }, []);

    const currentService = services[currentServiceIndex];

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            const [firstName, ...lastName] = value.split(" ");
            setSignUpData((prevData) => ({
                ...prevData,
                first_name: firstName,
                last_name: lastName.join(" ")
            }));
        } else {
            setSignUpData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/token/request/', formData);
            localStorage.setItem('token', response.data.access);
            console.log('Logged in successfully. Token:', response.data.access);
            setIsAuthenticated(true);
            navigate('/employeeList');
        } catch (error) {
            console.error('Error logging in:', error.response?.data);
            alert('Login failed: ' + error.response?.data.message);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/', signUpData);
            console.log('User signed up successfully:', response.data);
            alert('Signup successful! Please log in.');
            setIsLoginMode(true);
        } catch (error) {
            console.error('Signup failed:', error.response?.data);
            alert('Signup failed: ' + error.response?.data.message);
        }
    };

    return (
        <div className="page-container">
            <div className="login-container">
                <div className="image-section">
                    <h2 className="services-title">Services Offered</h2>
                    <div className="image-slider">
                        <div className="image-container">
                            <img src={currentService.img} alt={currentService.name} className="employee-image" />
                            <p className="image-description">{currentService.name}</p>
                        </div>
                    </div>
                </div>

                <div className="form-side">
                    {isLoginMode ? (
                        <>
                            <h2>Login</h2>
                            <form onSubmit={handleLogin} className="login-form">
                                <div className="form-group">
                                    <label>Username:</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="login-button">Login</button>
                            </form>
                            <p>
                                Don't have an account?{' '}
                                <button onClick={() => setIsLoginMode(false)} className="toggle-button">
                                    Sign Up
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <h2>Sign Up</h2>
                            <form onSubmit={handleSignup} className="signup-form">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={signUpData.name}
                                        onChange={handleSignUpChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number:</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={signUpData.phone}
                                        onChange={handleSignUpChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Username:</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={signUpData.username}
                                        onChange={handleSignUpChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={signUpData.password}
                                        onChange={handleSignUpChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>How do you intend to use our app?</label>
                                    <select
                                        name="user_type"
                                        value={signUpData.user_type}
                                        onChange={handleSignUpChange}
                                    >
                                        <option value="">Select</option>
                                        <option value="employer">Employer</option>
                                        <option value="employee">Employee</option>
                                    </select>
                                </div>
                                <button type="submit" className="signup-button">Sign Up</button>
                            </form>

                            <p>
                                Already have an account?{' '}
                                <button onClick={() => setIsLoginMode(true)} className="toggle-button">
                                    Login
                                </button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
