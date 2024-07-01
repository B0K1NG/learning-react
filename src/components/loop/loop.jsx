import React, { useState } from 'react';
import Employee from './employee';

//                                                                                  1st WAY OF USING MAP

// const employeeName = [
//     "Anthony",
//     "Jim",
//     "Katherine",
//     "Dominyka",
//     "Nikolai"
// ]

// const employeeInfo = [
//     {
//         name: "Anthony",
//         age: 25,
//         job: "Front-End Developer"
//     },
//     {
//         name: "Jim",
//         age: 26,
//         job: "Back-End Developer"
//     },
//     {
//         name: "Katherine",
//         age: 27,
//         job: "Full-Stack Developer"
//     }
// ]

// class Loop extends React.Component {
//     render() {
//         return (
//             <>
//                 {employeeInfo.map((employeeInfo) => {
//                     <div>
//                         <p> {`Name: ${employeeInfo.name}`} </p>
//                         <p> {`Age: ${employeeInfo.age}`} </p>
//                         <p> {`Job: ${employeeInfo.job}`} </p>
//                     </div>
//                 })}
//             </>
//         )
//     }
// }

// export default Loop;

//                                                                              2nd WAY OF USING MAP USING DESTRUCTOR:

// const employeeInfo = [
//     {
//         name: "Anthony",
//         age: 25,
//         job: "Front-End Developer"
//     },
//     {
//         name: "Jim",
//         age: 26,
//         job: "Back-End Developer"
//     },
//     {
//         name: "Katherine",
//         age: 27,
//         job: "Full-Stack Developer"
//     }
// ]

// class Loop extends React.Component {
//     render() {
//         return (
//             <>
//                 {employeeInfo.map((employeeInfo) => {
//                     const { name, age, job } = employeeInfo
//                     return (
//                         <div>
//                             <p> {`Name: ${name}`} </p>
//                             <p> {`Age: ${age}`} </p>
//                             <p> {`Job: ${job}`} </p>
//                         </div>
//                     )
//                 })}
//             </>
//         )
//     }
// }

// export default Loop;

//                                                                              3rd WAY OF USING MAP USING CUSTOM COMPONENTS WHEN IMPORTING:\

const employeeInfo = [
    {
        name: "Anthony",
        age: 25,
        job: "Front-End Developer"
    },
    {
        name: "Jim",
        age: 26,
        job: "Back-End Developer"
    },
    {
        name: "Katherine",
        age: 27,
        job: "Full-Stack Developer"
    }
]

class Loop extends React.Component {
    render() {
        return (
            <>
                <div key={employeeInfo.id}>
                {employeeInfo.map((employeeInfo) => 
                    <Employee name={employeeInfo.name} age={employeeInfo.age} job={employeeInfo.job} />
                )}
                </div>
            </>
        )
    }
}

export default Loop;