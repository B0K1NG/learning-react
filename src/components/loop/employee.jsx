import React from 'react';

const Employee = (props) => {
    const { name, age, job } = props;

    return (
        <div>
            <h3> {`Name: ${name}`} </h3>
            <p> {`Age: ${age}`} </p>
            <p> {`Job: ${job}`} </p>
        </div>
    )
}

export default Employee;