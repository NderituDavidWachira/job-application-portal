import React from 'react';
import './EmployeeItem.css';

const EmployeeItem = ({ employee }) => {
    return (
        <div className="employee-item">
            <img src={employee.img} alt={employee.name} />
            <h3>{employee.name}</h3>
            <p>{employee.role}</p>
        </div>
    );
};

export default EmployeeItem;
