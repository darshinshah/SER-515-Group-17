import React  from 'react';
import axios from 'axios';
import './LoginBox.css';
import history from './history';

class LoginBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          email:'',
          password:'',
          role :'',
          message:'',
          API:'',
          loggedIn:false
      };
      this.handleDropdownChange = this.handleDropdownChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  

    handleDropdownChange=(e) =>{
      this.setState({ role: e.target.value });
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})

        if(name === 'role'){
          this.setState({API : value})
        }
    }

    submitRegister(e){
      e.preventDefault();
      history.push('/Registration');
      window.location.reload();
    }
  
    submitLogin(e) {
      // e.preventDefault();

        const user = {email: this.state.email,
                    password: this.state.password,
                    role : this.state.role} ;
        if(this.state.email ==='' || this.state.password === '' || this.state.role === '' || this.state.role === 'Select Role'){
          this.setState({
            message : 'Please select appropriate credentials',
          })
        }else{
        axios({
          method: "post",
          url: "http://localhost:8082/v1/" + this.state.role,
          data: user,
          headers: { "Content-Type": "application/json" },
        })
          .then((response)=> {
            
              if(response.data === "User not registered" ){
                this.setState({
                  message : 'Please select appropriate credentials',
                })
              } else if(response.data === "User logged in" && (this.state.role ===  'Tournament_Manager')){
                this.setState({
                  loggedIn: true
                })
                history.push('/TournamentManagerPage');
                window.location.reload(); 
              }else if (response.data.teamId === 0){
                this.setState({
                  message : 'Please select appropriate credentials',
                })
              }else if(response.data === "User logged in" && (this.state.role ===  'Volunteer_Manager')){
                this.setState({
                  loggedIn: true
                })
                history.push('/VolunteerManagerPage');
                window.location.reload();
              }else if(response.data === "User logged in" && (this.state.role ===  'Referee_Manager')){
                this.setState({
                  loggedIn: true
                })
                history.push('/RefereeManagerPage');
                window.location.reload();
              }else if(this.state.role==='Coach'){
                this.setState({
                  loggedIn: true
                })
                history.push('/CoachPage');
                window.location.reload(); 
              }
            
            
          })
          .catch(function (response) {
            //handle error
            // alert(response.data )
          });
        }
        

    }
  
    render() {
      return (
        <div className="login-card">
          <div className="login-card__header">
            Login
          </div>
          <div className="login-card__controls">
            
            <div className="login-card__control">
                <label>Roles</label>
                <select id="dropdown" onChange={this.handleDropdownChange}>
                <option value="Select Role">Select Role</option>
                <option value="Coach">Coach</option>
                <option value="Tournament_Manager">Tournament Manager</option>
                <option value= "Volunteer_Manager">Volunteer Manager</option>
                <option value= "Referee_Manager">Referee Manager</option>
                </select>
            </div>
  
            <div className="login-card__control">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="Username"
                value = {this.state.email}
                onChange = {this.handleChange} />
            </div>
  
            <div className="login-card__control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                value = {this.state.password}
                onChange = {this.handleChange}
                />
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>

            <button
              type="button"
              className="login-btn"
              onClick={this.submitRegister
              .bind(this)}>Register</button>
          </div>
          <div style={{color: "red"}}>
            {this.state.message}
          </div>
        </div>
      );
    }
  
}

export default LoginBox;