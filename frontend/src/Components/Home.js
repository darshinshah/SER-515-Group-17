import './Home.css'
import LoginBox from './LoginBox';
import Players from './Players';
const Home = () => {
    return (
        <div className="homepage">
            <div className="homepage__content">
                <LoginBox />
                <Players />
            </div>
            <div className="homepage__footer">

            </div>
        </div>
    )
}
export default Home;