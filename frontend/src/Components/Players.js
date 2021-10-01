import React, { useState, useEffect } from "react";
import PlayerService from '../Services/player.service'
import './Players.css'

const Players = ()=>{

    const [playerData, setPlayerData] = useState([]);

    useEffect(()=>{
        // PlayerService.getPlayerData().then(
        //     (response) =>{
        //         setPlayerData(response.data)
        //     }
        // )
        const data = [
            {
            "id": 123,
              "playerid": 1,
              "firstName": "Jenny Chan",
              "lastName": "3 waterfoot road",
              "emailId": "jenny.chan@email.com",
              "age":23,
              "gender":"male",
              "teamid" : 2
            }
        ]
        setPlayerData(data)
    },[]);



    return (
        <div className = 'app-container'>
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
                {playerData.map((data)=>(
                    <tr>
                        <td>{data.playerid}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
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

export default Players;