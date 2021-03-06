import React from 'react';
 
import { NavLink } from 'react-router-dom';
import NavBarButton from './NavBarButton';
import './Navigation.css';

const Navigation = () => {


    return (
       <div className="navigation-buttons">
         
         
         
         <NavBarButton><NavLink to="/" className="navlink">Home</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/teams" className="navlink">Teams</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/Fixtures" className="navlink">Schedules</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/pointstable" className="navlink">Points Table</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/apply" className="navlink">Apply</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/maps" className="navlink">Maps</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/sponsors" className="navlink">Sponsors</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/news" className="navlink">News</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/referees" className="navlink">Referees</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/volunteer" className="navlink">Volunteer</NavLink></NavBarButton>
         <NavBarButton><NavLink to="/about" className="navlink">About Us</NavLink></NavBarButton>         
         
       </div>
    );
}
 
export default Navigation;