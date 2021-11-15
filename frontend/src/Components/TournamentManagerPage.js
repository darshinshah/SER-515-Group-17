import './TournamentManagerPage.css';
import history from './history';


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
        <div>
            <button onClick={openTeams}>See List of teams</button>
            <button onClick={openReferees}>See referees</button>
            <button onClick = {openSchedules}>Create the Tournament Schedule and list them</button>
        </div>

    );

}

export default TournamentManagerPage;