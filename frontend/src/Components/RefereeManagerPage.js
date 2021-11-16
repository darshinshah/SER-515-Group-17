import './RefereeTablePage.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
const RefereeManagerPage = () => {

    const [refereeData, setRefereeData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/v1/getReferees", { "Content-Type": "application/json" }).then(
            (response) => {
                setRefereeData(response.data);
            }
        )
    }, []);
    return (
        <div className="refereetablepage">
            <div className="refereetablepage__content">
                <div className='app-container'>
                    <strong>
                    List of referees registered for the tournament:
                    </strong>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Experience</th>
                                <th>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {refereeData.map((data) => (
                                <tr key={data.refereeId}>
                                    <td>{data.name}</td>
                                    <td>{data.emailId}</td>
                                    <td>{data.age}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.experience}</td>
                                    <td>{data.availability}</td>
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

export default RefereeManagerPage;