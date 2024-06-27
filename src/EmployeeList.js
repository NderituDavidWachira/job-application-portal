import React from 'react';
import EmployeeItem from './EmployeeItem';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
    return (
        <section id="employees">
            <h2>What kind of assistance do you require?</h2>
            <div className="employee-list">
                {employees.map((employee, index) => (
                    <EmployeeItem key={index} employee={employee} />
                ))}
            </div>
        </section>
    );
};

export default EmployeeList;
