import React from 'react';

const Image= (props)=>{
    let {value, fixtures, src, fieldName, city} = props;

    if(value){
        return (
            <div>
            <div>
                <img height = "500px" width = "800px" src = {src} alt = 'soccer stadium'></img>
                <h3>{fieldName}</h3>
                City : {city}
                <div className='app-container'>
                <strong>List of Fixtures in this Venue</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Venue Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fixtures.map((data, index) => (
                            <tr key={index}>
                                <td>{data.homeTeam}</td>
                                <td>{data.awayTeam}</td>
                                <td>{data.category}</td>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                                <td>{data.venue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                

            </div>
            <div>


            </div>
            </div>
        )
    }else{
        return <div></div>
    }
}

export default Image;