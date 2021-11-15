import React, { useState, useEffect } from "react";
import axios from 'axios';
const RefereeManagerPage = () => {

    const [refereesData, setRefereesData] = useState([]);
        
    useEffect(() => {
        axios.get("http://localhost:8082/v1/getReferees", { "Content-Type": "application/json" }).then(
            (response) => {
                setRefereesData(response.data);
            }
        )
    }, []);

    return (
        <div>
            Referee Manager Page
        </div>
    )
}

export default RefereeManagerPage;