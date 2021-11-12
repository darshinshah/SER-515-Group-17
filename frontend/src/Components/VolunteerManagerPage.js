import React, { useState, useEffect } from "react";
import axios from 'axios';
const VolunteerManagerPage = () => {

    const [volunteersData, setVolunteersData] = useState([]);
        
    useEffect(() => {
        axios.get("http://localhost:8082/allVolunteers", { "Content-Type": "application/json" }).then(
            (response) => {
                setVolunteersData(response.data);
            }
        )
    }, []);

    return (
        <div>
            In Volunteer Page
        </div>
        )
}

export default VolunteerManagerPage;
