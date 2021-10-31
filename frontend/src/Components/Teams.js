import './Teams.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Teams = () => {
    
    const [teamsData, setTeamsData] = useState([]);
        
    useEffect(() => {
        axios.get("http://localhost:8082/allTeams", { "Content-Type": "application/json" }).then(
            (response) => {
                setTeamsData(response.data);
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
                            <th>Team Name</th>
                            <th>Coach Name</th>
                            <th>Association</th>
                            <th>Group</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamsData.map((data) => (
                            <tr key={data.teamName}>
                                <td>{data.teamName}</td>
                                <td>{data.coachName}</td>
                                <td>{data.association}</td>
                                <td>{data.applicationGroup}</td>
                                <td>{data.teamGender}</td>
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
export default Teams;