import './RefereeTablePage.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
const RefereeTablePage = () => {

    const [refereeData, setRefereeData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/getReferees", { "Content-Type": "application/json" }).then(
            (response) => {
                setRefereeData(response.data);
            }
        )
    }, []);
    return (
        <div className="refereetablepage">
            <div className="refereetablepage__content">
                <div className='app-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Refereee Id</th>
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
                                    <td>{data.refereeId}</td>
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

export default RefereeTablePage;