import './RefereeTablePage.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
const Fixtures = () => {
    
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/getMatches", { "Content-Type": "application/json" }).then(
            (response) => {
                setScheduleData(response.data);
            }
        )
    }, []);

    return (
        <div className="refereetablepage">
        <div className="refereetablepage__content">
            <div className='app-container'>
                <strong>List of Fixtures</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Category</th>
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>Venue</th>
                            <th>Referee Name</th>
                            <th>Volunteer Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData.map((data) => (
                            <tr key={data.matchId}>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                                <td>{data.category}</td>
                                <td>{data.homeTeam}</td>
                                <td>{data.awayTeam}</td>                  
                                <td>{data.venue}</td>
                                <td>{data.refereeName}</td>
                                <td>{data.volunteerName}</td>
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

export default Fixtures;