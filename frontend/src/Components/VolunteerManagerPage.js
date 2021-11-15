import React, { useState, useEffect } from "react";
import axios from 'axios';
const VolunteerManagerPage = () => {

    const [volunteersData, setVolunteersData] = useState([]);
        
    useEffect(() => {
        axios.get("http://localhost:8082/allVolunteers", { "Content-Type": "application/json" }).then(
            (response) => {
                setVolunteersData(response.data);
            }
        )
    }, []);

    return (
        <div className="refereetablepage">
        <div className="refereetablepage__content">
            <div className='app-container'>
                <strong>List of Volunteers Registered</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Volunteer Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>age</th>
                            <th>Gender</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volunteersData.map((data) => (
                            <tr key={data.volunteerId}>
                                <td>{data.name}</td>
                                <td>{data.emailId}</td>
                                <td>{data.phoneNumber}</td>
                                <td>{data.age}</td>
                                <td>{data.gender}</td>
                                <td>{data.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="refereetablepage__footer">

        </div>
    </div>
    )
}

export default VolunteerManagerPage;