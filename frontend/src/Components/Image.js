import React from 'react';

const Image= (props)=>{
    let {value, src, fieldName, city} = props;

    if(value){
        return (
            <div>
                <img height = "500px" width = "800px" src = {src} alt = 'soccer stadium'></img>
                <h3>{fieldName}</h3>
                City : {city}
            </div>
        )
    }else{
        return <div></div>
    }
}

export default Image;