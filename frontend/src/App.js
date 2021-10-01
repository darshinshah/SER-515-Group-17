import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import AboutUs from './Components/AboutUs';
import Greet from './Components/Greet'
import NavBarButton from './Components/NavBarButton';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Teams from './Components/Teams';
import Sponsors from './Components/Sponsors';
// import NavBarComp from './Components/NavBarComp';
function App() {
  
  return (
    <div className="App">

      
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
             <Route path="/about" component={AboutUs}/>
             <Route path="/sponsors" component={Sponsors}/>
           </Switch>
        </div> 
      </BrowserRouter>
  </div>
  
  )

}

export default App;
