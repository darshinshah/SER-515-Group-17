import './Home.css'
import React, { useState } from 'react';
import LoginBox from './LoginBox';
import Players from './Players';
const Home = () => {
    // const [tableValues, setTableValues] = useState('');
    
    // const players = {}
    // const showOrHidPlayerHandler = (props) => {
    //     if(props.showPlayer)
    //         players = <Players />

    // }
    return (
        <div className="homepage">
            <div className="homepage__content">
                <LoginBox />
            </div>
            <div className="homepage__footer">

            </div>
        </div>
    )
}
export default Home;