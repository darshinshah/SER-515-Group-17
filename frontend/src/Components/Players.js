import React, { useState, useEffect } from "react";
import getPlayerData from '../Services/player.service'
import '../Styles/Players.css'

const Players = ()=>{

    const [playerData, setPlayerData] = useState([]);

    useEffect(()=>{
        getPlayerData().then(
            (response) =>{
                console.log(response);
                setPlayerData(response.data)
            }
        )
        // const data = [
        //     {
        //       "playerid": 1,
        //       "firstName": "Jenny Chan",
        //       "lastName": "3 waterfoot road",
        //       "emailId": "jenny.chan@email.com",
        //       "age":23,
        //       "gender":"male",
        //       "teamid" : 2
        //     }
        // ]
        // setPlayerData(data)
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

export default Players;
