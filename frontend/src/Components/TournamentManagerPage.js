import './TournamentManagerPage.css';
import history from './history';
import Logout from './Logout';


const TournamentManagerPage = () => {
    
    const openTeams = (e) =>{
        
        history.push('/Teams')
        window.location.reload();  
    }
    const openReferees = (e) => {
        history.push('/RefereeTablePage');
        window.location.reload(); 
    }
    const openSchedules = (e) =>{
        history.push('/SchedulePage');
        window.location.reload();
    }
    return (
        <div className="button_container">
            
            <button className="tournament_manager_buttons" onClick={openTeams}>See List of teams</button>
            <button className="tournament_manager_buttons" onClick={openReferees}>See referees</button>
            <button className="tournament_manager_buttons" onClick = {openSchedules}>Create the Tournament Schedule and list them</button>
            <Logout/>
        </div>

    );

}

export default TournamentManagerPage;