import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal'
import './EmployeeDetail.css';
import ContactForm from './ContactForm';


Modal.setAppElement('#root'); // Required for accessibility

const EmployeeDetail = () => {
    const { name } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const [employees] = useState([
        {
            name: 'Mama Fua',
            img: '/images/mama fua.jpg',
            position: 'Cleaner',
            department: 'Household',
            people: [
                {
                    name: 'Mercy-Mama Fua',
                    phoneNumber: '0711384xxx ',
                    idNumber: '4056xxxx',
                    location: 'Limuru',
                    hiredTimes: 5,
                    comments: 'Very reliable and professional.',
                    img: '/images/Mercy.jpg'
                },
                {
                    name: 'Joy-Mama Fua',
                    phoneNumber: '07896753xxx ',
                    idNumber: '398332xxx',
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
                    name: 'Eunice Njeri-Day Care',
                    phoneNumber: '07 ',
                    idNumber: '4056',
                    location: 'Limuru',
                    hiredTimes: 5,
                    comments: 'Very reliable and professional.',
                    img: '/images/eunice.jpg'
                },
                {
                    name: 'Cate Wairimu-Day Care',
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
                <h2>Book {selectedPerson?.name}</h2>
                <ContactForm employeeName={selectedPerson?.name} />  {/* Pass the employee name as a prop */}
                <button className="cancel-button" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </Modal>
        </div>
    );
};

export default EmployeeDetail;
