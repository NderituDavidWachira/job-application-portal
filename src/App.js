import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Landing from './Landing';
import EmployeeDetail from './EmployeeDetail';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import EmployeeList from './EmployeeList';

const employees = [
    { name: 'Mama Fua', img: '/images/mama fua.jpg', position: 'Cleaner', department: 'Household' },
    { name: 'Day care services', img: '/images/Day care.jpg', position: 'Childcare', department: 'Daycare' },
    { name: 'House help', img: '/images/house.jpg', position: 'Housekeeper', department: 'Household' },
    { name: 'Car hire', img: '/images/car.jpg', position: 'Driver', department: 'Transport' },
    { name: 'Plumber', img: '/images/plumber.jpg', position: 'Plumber', department: 'Maintenance' },
    { name: 'Beauty Services', img: 'images/beauty.jpg', position: 'Beautician', department: 'Personal Care' },
    { name: 'Electricians', img: '/images/electrician.jpg', position: 'Electrician', department: 'Maintenance' },
    { name: 'Cook and chefs', img: '/images/cook.jpg', position: 'Chef', department: 'Catering' },
    { name: 'Local Mover', img: '/images/local.jpeg', position: 'Mover', department: 'Logistics' },
    { name: 'Hair cut', img: '/images/hair.jpeg', position: 'Barber', department: 'Personal Care' },
    { name: 'Gas supplier', img: '/images/gas.jpg', position: 'Supplier', department: 'Utilities' },
    { name: 'Delivery for Shopping', img: '/images/delivery.jpg', position: 'Delivery Person', department: 'Logistics' },
    { name: 'Phone repair', img: '/images/phone.jpg', position: 'Technician', department: 'Repair' },
    { name: 'Computer repair', img: '/images/computer.jpg', position: 'Technician', department: 'Repair' },
    { name: 'Taxis Drivers', img: '/images/taxis.jpg', position: 'Driver', department: 'Transport' },
    { name: 'Mason', img: '/images/Mjengo.jpg', position: 'Mason', department: 'Construction' },
    { name: 'Photographer', img: 'images/photo.jpg', position: 'Photographer', department: 'Media' },
    { name: 'Car wash services', img: '/images/car wash.jpeg', position: 'Car Washer', department: 'Maintenance' },
    { name: 'Tutor Available', img: '/images/tutor.avif', position: 'Tutor', department: 'Education' },
];

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <div className="App">
                {/* Header - show on all pages except login */}
                <Routes>
                    <Route path="/login" element={null} />
                    <Route path="*" element={<Header />} />
                </Routes>

                <main>
                    <Routes>
                        {/* Public routes */}
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* Protected routes */}
                        <Route 
                            path="/employeeList" 
                            element={
                                isAuthenticated ? 
                                <EmployeeList employees={employees} /> : 
                                <Navigate to="/login" replace />
                            } 
                        />
                        <Route 
                            path="/employee/:name" 
                            element={
                                isAuthenticated ? 
                                <EmployeeDetail employees={employees} /> : 
                                <Navigate to="/login" replace />
                            } 
                        />

                        {/* Redirect /home based on login */}
                        <Route 
                            path="/home" 
                            element={
                                <Navigate to={isAuthenticated ? "/employeeList" : "/"} replace />
                            } 
                        />
                    </Routes>
                </main>

                {/* Footer - show on all pages except login */}
                <Routes>
                    <Route path="/login" element={null} />
                    <Route path="*" element={<Footer />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
