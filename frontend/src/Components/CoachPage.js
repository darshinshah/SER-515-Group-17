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
    return (
        <div className="coachpage">
            <div className="coachpage__content">
                <div className="subheader_separator subheader_main"> Team Information</div>

                    <div className="applypage__form_row">
                        <label>
                            Application Group:
                        </label>
                        <label>{teamData.applicationGroup}</label>

                    </div>

                    <div className="applypage__form_row">
                        <label>
                            Team Name:
                        </label>
                        <label>{teamData.teamName}</label>                        
                    </div>
                    <div className="applypage__form_row">
                        <label>
                            League Gender:
                        </label>
                        <label>{teamData.teamGender}</label>
                    </div>
                    <div className="applypage__form_row">
                        <label>
                            Coach Name:
                        </label>
                        <label>{teamData.coachName}</label>
                    </div>

                    <div className="applypage__form_row">
                        <label>
                            Association:
                        </label>
                        <label>{teamData.association}</label>
                    </div>
                {/* <button style="padding">Display list of players</button> */}
                    <button style={{ padding: 10 }} onClick={openPlayers}>Display list of players</button>
            </div>

            <div className="coachpage__footer">

            </div>
        </div>
    )
}
export default CoachPage;