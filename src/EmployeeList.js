// EmployeeList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
    return (
        <section id="employees">
            <h2>What kind of assistance do you require?</h2>
            <div className="employee-list">
                {employees.map(employee => (
                    <div key={employee.name} className="employee-item">
                        <Link to={`/employee/${encodeURIComponent(employee.name)}`}>
                            <img src={employee.img} alt={employee.name} />
                            <h3>{employee.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EmployeeList;
