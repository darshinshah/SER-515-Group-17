import './RefereeTablePage.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';

const RefereesAssigned = () => {

    const [fixtures, setFixtures] = useState([]);
        
    useEffect(() => {
        axios.get("http://localhost:8082/getFixturesWithoutReferees", { "Content-Type": "application/json" }).then(
            (response) => {
                setFixtures(response.data);
            }
        )
    }, []);


    return (
        <div className="refereetablepage">
        <div className="refereetablepage__content">
            <div className='app-container'>
                <strong>List of Fixtures with Assigned Referees</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>Category</th>
                            <th>Venue</th>
                            <th>Referee Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fixtures.map((data) => (
                            <tr key={data.matchId}>
                                <td>{data.homeTeam}</td>
                                <td>{data.awayTeam}</td>
                                <td>{data.category}</td>
                                <td>{data.venue}</td>
                                <td>{data.refereeName}</td>
                                </tr>
                        ))}
                    </tbody>
                </table>
        </div>
        </div>
    </div>
    )
}

export default RefereesAssigned;