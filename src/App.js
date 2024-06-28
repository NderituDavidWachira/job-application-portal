import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EmployeeList from './EmployeeList';
import './App.css';

const App = () => {
    const employees = [
        { name:  'Mama Fua', img: '/images/mama fua.jpg' },
        { name:  'Day care services', img: '/images/Day care.jpg' },
        { name:  'House help', img: '/images/house.jpg' },
        { name: 'Car hire', img: '/images/car.jpg' },
        { name:  'Plumber', img: '/images/plumber.jpg' },
        { name:  'Beauty Services', img: 'images/beauty.jpg' },
        { name: 'Electricians', img: '/images/electrician.jpg' },
        { name:  'cook and chefs', img: '/images/cook.jpg' },
        { name:  'Local Mover', img: '/images/local.jpeg' },
        { name:  'Hair cut', img: '/images/hair.jpeg' },
        { name:  'Gas supplier', img: '/images/gas.jpg' },
        { name:  'Delivery for Shopping', img: '/images/delivery.jpg' },
        { name:  'Phone repair', img: '/images/phone.jpg' },
        { name:  'Computer repair', img: '/images/computer.jpg' },
        { name:  'Taxis Drivers', img: '/images/taxis.jpg' },
        { name:  'Mason including Mtu Wa Mkono', img: '/images/Mjengo.jpg' },
        { name:  'Photographer', img: 'images/photo.jpg' },
        { name:  'Car wash services', img: '/images/car wash.jpeg' },
        { name:  'Tutor Available', img: '/images/tutor.avif' },
    ];

    return (
        <div className="App">
            <Header />
            <main>
                <EmployeeList employees={employees} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
