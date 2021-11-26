import React, { useState, useEffect } from "react";
import './TeamPlayers.css'
import axios from 'axios';
import Logout from './Logout';
const TeamPlayers = () => {

    const [playerData, setPlayerData] = useState([]);
    const [teamId, setTeamId] = useState("");


    useEffect( () => {
         axios.get("http://localhost:8082/v1/getCoach", { "Content-Type": "application/json" }).then(
            (response) => {
                setTeamId(response.data.teamId);
                axios.get("http://localhost:8082/getplayerbyteamid/" + teamId, { "Content-Type": "application/json" }).then(
                    (res)=> setPlayerData(res.data)
                ).catch(function (res){

                })
            }
        ).catch(function (response) {

        })
    });



    return (
        <div className='app-container'>
            <Logout/>
            <table>
                <thead>
                    <tr>
                        <th>Player Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Team Id</th>
                    </tr>
                </thead>
                <tbody>
                    {playerData.map((data) => (
                        <tr key={data.playerid}>
                            <td>{data.playerid}</td>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.emailId}</td>
                            <td>{data.age}</td>
                            <td>{data.gender}</td>
                            <td>{data.teamid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};
export default TeamPlayers;