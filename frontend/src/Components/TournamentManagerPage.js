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
    return (
        <div>
            <button onClick={openTeams}>See List of teams</button>
            <button onClick={openReferees}>See referees</button>
        </div>

    );

}

export default TournamentManagerPage;