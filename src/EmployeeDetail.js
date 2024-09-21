import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import { FaWhatsapp } from 'react-icons/fa';
import './EmployeeDetail.css';

Modal.setAppElement('#root'); // Required for accessibility

const EmployeeDetail = () => {
    const { name } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [mpesaNumber, setMpesaNumber] = useState('');
    const [amount, setAmount] = useState('');

    const [employees] = useState([
        {
            name: 'Mama Fua',
            img: '/images/mama fua.jpg',
            position: 'Cleaner',
            department: 'Household',
            people: [
                {
                    name: 'Mercy',
                    phoneNumber: '07 ',
                    idNumber: '4056',
                    location: 'Limuru',
                    hiredTimes: 5,
                    comments: 'Very reliable and professional.',
                    img: '/images/Mercy.jpg'
                },
                {
                    name: 'Joy',
                    phoneNumber: '07 ',
                    idNumber: '39',
                    location: 'Limuru',
                    hiredTimes: 3,
                    comments: 'Good worker, punctual.',
                    img: '/images/Joy.jpg'
                }
            ]
        },
        {
            name: 'Day care services',
            img: '/images/Day care.jpg',
            position: 'Childcare',
            department: 'Daycare',
            people: [
                {
                    name: 'Eunice Njeri',
                    phoneNumber: '07 ',
                    idNumber: '4056',
                    location: 'Limuru',
                    hiredTimes: 5,
                    comments: 'Very reliable and professional.',
                    img: '/images/eunice.jpg'
                },
                {
                    name: 'Cate Wairimu',
                    phoneNumber: '07 ',
                    idNumber: '39',
                    location: 'Limuru',
                    hiredTimes: 3,
                    comments: 'Good worker, punctual.',
                    img: '/images/cate.webp'
                }
            ]
        }
    ]);

    const employee = employees.find(emp => emp.name === decodeURIComponent(name));

    if (!employee) {
        return <div>Employee not found</div>;
    }

    const handleBookNow = (person) => {
        setSelectedPerson(person);
        setIsModalOpen(true);
    };

    const handlePayment = async () => {
        if (mpesaNumber && amount) {
            try {
                const paymentData = {
                    mpesaNumber: mpesaNumber,
                    amount: amount,
                    booking: selectedPerson.name
                };
    
                const response = await fetch('https://your-backend-url.com/api/process-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer YOUR_SECURE_TOKEN',
                    },
                    body: JSON.stringify(paymentData),
                });
    
                const result = await response.json();
    
                if (response.ok) {
                    alert(`Payment of ${amount} for booking ${selectedPerson.name} has been processed successfully.`);
                    setIsModalOpen(false);
                    setMpesaNumber('');
                    setAmount('');
                } else {
                    alert(`Payment failed: ${result.message}`);
                }
            } catch (error) {
                console.error('Error processing payment:', error);
                alert('Payment failed. Please try again.');
            }
        } else {
            alert("Payment failed. Please enter all the details correctly.");
        }
    };

    return (
        <div className="employee-detail">
            <h2>{employee.name}</h2>
            <img src={employee.img} alt={employee.name} className="employee-img" />
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
            <h3>Available Employees:</h3>
            <ul className="people-list">
                {employee.people.map((person, index) => (
                    <li key={index} className="person-item">
                        <img src={person.img} alt={person.name} className="person-img" />
                        <div className="person-details">
                            <h4>{person.name}</h4>
                            <p>Phone Number: {person.phoneNumber}</p>
                            <p>ID Number: {person.idNumber}</p>
                            <p>Location: {person.location}</p>
                            <p>Hired Times: {person.hiredTimes}</p>
                            <p>Comments: {person.comments}</p>
                        </div>
                        <button 
                            onClick={() => handleBookNow(person)}
                            className="book-now-button"
                        >
                            Book Now
                        </button>
                    </li>
                ))}
            </ul>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        maxWidth: '500px',
                        padding: '20px',
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                }}
            >
                <p>NOTE: Payment can be done before or after service. To book an employee and pay after, call or WhatsApp.</p>
                <h2>Complete Payment</h2>
                <div className="modal-content">
                    <label>M-Pesa Number:</label>
                    <input 
                        type="text" 
                        value={mpesaNumber} 
                        onChange={(e) => setMpesaNumber(e.target.value)} 
                    />
                </div>
                <div className="modal-content">
                    <label>Amount:</label>
                    <input 
                        type="text" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                </div>
            
                <button className="confirm-button" onClick={handlePayment}>Confirm Payment</button>
                <button className="cancel-button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <div className="whatsapp-links">
                    <p>
                        <a href="https://wa.me/+254758293706" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp /> WhatsApp to book an employee and pay after service
                        </a>
                    </p>
                    <p>
                        <a href="https://wa.me/+254758293706" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp /> WhatsApp for delivery services after payment
                        </a>
                    </p>
                </div>
                <button 
        onClick={() => window.open('tel:+254758293706')}
        className="call-button"
    >
        Call Us Now
    </button>
            </Modal>
        </div>
    );
};

export default EmployeeDetail;
