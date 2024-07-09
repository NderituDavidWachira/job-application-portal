import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeDetail.css';

const EmployeeDetail = () => {
    const { name } = useParams();

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
        },
    ]);

    const employee = employees.find(emp => emp.name === decodeURIComponent(name));

    if (!employee) {
        return <div>Employee not found</div>;
    }

    return (
        <div className="employee-detail">
            <h2>{employee.name}</h2>
            <img src={employee.img} alt={employee.name} className="employee-img" />
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
            <h3>Available People:</h3>
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { EmployeeDetail };
