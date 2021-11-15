import React, { useState, useEffect } from "react";
import axios from 'axios';
const SchedulePage = () => {
    
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/getFixtures", { "Content-Type": "application/json" }).then(
            (response) => {
                setScheduleData(response.data);
            }
        )
    }, []);

    return (
        <div>
            In Schedule page
        </div>
    )
}

export default SchedulePage;