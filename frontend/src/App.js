import './App.css';
import React from 'react';
import AboutUs from './Components/AboutUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Teams from './Components/Teams';
import Admin from './Components/Admin';
import Sponsors from './Components/Sponsors';
import News from './Components/News';
import Forms from './Components/Forms';
// import NavBarComp from './Components/NavBarComp';
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
             {/* <Route path="/schedules" component={Schedules}/>
             <Route path="/pointstable" component={PointsTable}/>
             <Route path="/apply" component={Apply}/>
             <Route path="/rules" component={Rules}/>
             <Route path="/sponsors" component={Sponsors}/> */}
             <Route path="/news" component={News} />
             <Route path="/about" component={AboutUs}/>
             <Route path="/admin" component={Admin}/>
             <Route path="/sponsors" component={Sponsors}/>
             <Route path="/forms" component={Forms}/>
           </Switch>
        </div> 
      </BrowserRouter>
  </div>
  
  )

}

export default App;
