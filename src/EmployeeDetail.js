// EmployeeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeDetail.css';

const EmployeeDetail = ({ employees }) => {
    const { name } = useParams();
    const employee = employees.find(emp => emp.name === name);

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
            <ul>
                <li>Person 1 - {employee.position}</li>
                <li>Person 2 - {employee.position}</li>
                <li>Person 3 - {employee.position}</li>
            </ul>
        </div>
    );
};

export { EmployeeDetail };
