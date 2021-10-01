import './Home.css'
import React from 'react';
import LoginBox from './LoginBox';
const Home = () => {
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