import './CoachPage.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import history from './history';
import Logout from './Logout';
const CoachPage = () => {
    const [teamData, setTeamData] = useState([]);


    useEffect( () => {
        axios.get("http://localhost:8082/v1/getCoach", { "Content-Type": "application/json" }).then(
            (response) => {
                setTeamData(response.data);
            }
        )
    }, []);

    const openPlayers = (e) => {
        history.push('/TeamPlayers');
        window.location.reload(); 
    }
    return (
        <div className="coachpage">
            <Logout/>
            <div className="coachpage__content">
                <div className="subheader_separator subheader_main"> Team Information</div>

                    <div className="applypage__form_row">
                        <b>
                            Application Group  :  
                        </b>
                        <label>{teamData.applicationGroup}</label>

                    </div>

                    <div className="applypage__form_row">
                        <b>
                            Team Name  :
                        </b>
                        <label>{teamData.teamName}</label>                        
                    </div>
                    <div className="applypage__form_row">
                        <b>
                            League Gender  :
                        </b>
                        <label>{teamData.teamGender}</label>
                    </div>
                    <div className="applypage__form_row">
                        <b>
                            Coach Name  :
                        </b>
                        <label>{teamData.coachName}</label>
                    </div>

                    <div className="applypage__form_row">
                        <b>
                            Association  :
                        </b>
                        <label>{teamData.association}</label>
                    </div>
                {/* <button style="padding">Display list of players</button> */}
                    <button className = "coachpage_buttons" style={{ padding: 10 }} onClick={openPlayers}>Display list of players</button>
            </div>

            <div className="coachpage__footer">

            </div>
        </div>
    )
}
export default CoachPage;