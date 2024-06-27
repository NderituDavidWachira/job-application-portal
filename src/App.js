import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EmployeeList from './EmployeeList';
import './App.css';

const App = () => {
    const employees = [
        { name:  'Mama Fua', img: '/images/mama fua.jpg' },
        { name:  'Day care services', img: '/images/jane_smith.jpg' },
        { name:  'House help', img: '/images/hank_orange.jpg' },
        { name: 'Car hire', img: '/images/alice_johnson.jpg' },
        { name:  'Plumber', img: '/images/bob_brown.jpg' },
        { name:  'Beauty Services', img: '/images/carol_white.jpg' },
        { name: 'Electricians', img: '/images/david_green.jpg' },
        { name:  'cook and chefs', img: '/images/eve_black.jpg' },
        { name:  'Local Mover', img: '/images/frank_blue.jpg' },
        { name:  'Hair cut', img: '/images/grace_yellow.jpg' },
        { name:  'Gas supplier', img: '/images/ivy_pink.jpg' },
        { name:  'Delivery for Shopping', img: '/images/jack_purple.jpg' },
        { name:  'Phone repair', img: '/images/karen_gray.jpg' },
        { name:  'Cloud Architect', img: '/images/larry_gold.jpg' },
        { name:  'Taxis Drivers', img: '/images/mona_silver.jpg' },
        { name:  'Mason including Mtu Wa Mkono', img: '/images/nina_bronze.jpg' },
        { name:  'Photographer', img: '/images/oscar_violet.jpg' },
        { name:  'Car wash services', img: '/images/pam_olive.jpg' },
        { name:  'Tutor Available', img: '/images/quinn_aqua.jpg' },
        { name:  'Landscaping', img: '/images/rick_maroon.jpg' }
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
