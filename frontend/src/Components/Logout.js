import './NavBarButton.css';
import history from './history';

const Logout = ()=>{

    function handler(){
        history.push('/');
        window.location.reload();
    }

    return(
        <div>
            <button className="nav_bar_red_button" onClick={handler}>Log out</button>
        </div>
    )
}
export default Logout;