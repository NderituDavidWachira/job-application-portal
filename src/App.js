import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import EmployeeDetail from './EmployeeDetail';
import EmployeeList from './EmployeeList';
import About from './About';  // Import About page
import Contact from './Contact';  // Import Contact page

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
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<EmployeeList employees={employees} />} />
                        <Route path="/employee/:name" element={<EmployeeDetail employees={employees} />} />
                        <Route path="/about" element={<About />} />  {/* About page route */}
                        <Route path="/contact" element={<Contact />} />  {/* Contact page route */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
