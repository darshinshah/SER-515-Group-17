import './RefereeTablePage.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
const SchedulePage = () => {
    
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/getFixtures", { "Content-Type": "application/json" }).then(
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
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>Category</th>
                            <th>Venue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData.map((data) => (
                            <tr key={data.matchId}>
                                <td>{data.homeTeam}</td>
                                <td>{data.awayTeam}</td>
                                <td>{data.category}</td>
                                <td>{data.venue}</td>
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

export default SchedulePage;