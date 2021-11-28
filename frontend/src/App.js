import './App.css';
import React from 'react';
import AboutUs from './Components/AboutUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Teams from './Components/Teams';
import Referee from './Components/Referees'
import Admin from './Components/Admin';
import Sponsors from './Components/Sponsors';
import News from './Components/News';
import Apply from './Components/Apply';
import Maps from './Components/Maps'
import TournamentManagerPage from './Components/TournamentManagerPage';
import RefereeTablePage from './Components/RefereeTablePage';
import Registration from './Components/Registration';
import CoachPage from './Components/CoachPage';
import TeamPlayers from './Components/TeamPlayers';
import VolunteerManagerPage from './Components/VolunteerManagerPage';
import Volunteer from './Components/Volunteer';
import RefereeManagerPage from './Components/RefereeManagerPage';
import SchedulePage from './Components/SchedulePage';
import VolunteersAssigned from './Components/VolunteersAssigned';
import Logout from './Components/Logout';
import Fixtures from './Components/Fixtures';
import RefereesAssigned from './Components/RefereesAssigned';

function App() {
  
  return (
    <div className="App">
      <title>Soccer Tournament</title>
      
      <BrowserRouter>
        <div className="homepage-navbar">
          <div className="homepage-navbar__header">Soccer Tournament</div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/teams" component={Teams}/>
             <Route path="/apply" component={Apply}/>
             <Route path="/sponsors" component={Sponsors}/>
             <Route path="/news" component={News} />
             <Route path = "/maps" component = {Maps}/>
             <Route path="/about" component={AboutUs}/>
             <Route path="/admin" component={Admin}/>
             <Route path="/tournamentManagerPage" component={TournamentManagerPage}/>
             <Route path="/sponsors" component={Sponsors}/>
             <Route path="/referees" component={Referee}/>
             <Route path="/refereeTablePage" component={RefereeTablePage}/>
             <Route path = "/registration" component = {Registration}/>
             <Route path="/coachPage" component={CoachPage}/>
             <Route path="/teamPlayers" component={TeamPlayers}/>
             <Route path = "/volunteerManagerPage" component = {VolunteerManagerPage}/>
             <Route path = "/volunteer" component = {Volunteer}/>
             <Route path = "/refereeManagerPage" component = {RefereeManagerPage}/>
             <Route path = "/SchedulePage" component = {SchedulePage}/>
             <Route path = "/VolunteersAssigned" component = {VolunteersAssigned}/>
             <Route path = "/Fixtures" component = {Fixtures}/>
             <Route path = "/RefereesAssigned" component = {RefereesAssigned}/>
             <Route path = "/" component = {Logout}/>
            </Switch>
        </div> 
      </BrowserRouter>
  </div>
  
  )

}

export default App;