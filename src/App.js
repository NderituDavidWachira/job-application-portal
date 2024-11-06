import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';
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
                <Header />
                <main>
                    <Routes>
                        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                        <Route path="/employeeList" element={isAuthenticated ? <EmployeeList employees={employees} /> : <Navigate to="/login" />} />
                        <Route path="/employee/:name" element={<EmployeeDetail employees={employees} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Navigate to={isAuthenticated ? "/employeeList" : "/login"} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
