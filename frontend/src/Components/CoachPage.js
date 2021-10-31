import './CoachPage.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import history from './history';
const CoachPage = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        // axios.get("http://localhost:8080/v1/", { "Content-Type": "application/json" }).then(
        //     (response) => {
        //         setRefereeData(response.data);
        //     }
        // )
    }, []);

    const openPlayers = (e) => {
        history.push('/TeamPlayers');
        window.location.reload(); 
    }
    return(
        <div className="coachpage">
            <div className="coachpage__content">
            <button style={{padding: 10}} onClick={openPlayers}>Display list of players</button>
            </div>
            
            <div className="coachpage__footer">

            </div>
        </div>
    )
}
export default CoachPage;