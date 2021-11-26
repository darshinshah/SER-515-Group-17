import React  from 'react';
import axios from 'axios';
import './LoginBox.css';
import history from './history';


class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            role :'',
            message:''
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
    }

    submitRegister = function(e){
        e.preventDefault();

        const user = {email: this.state.email,
                    password: this.state.password,
                    role : this.state.role}
        if(this.state.email ==='' || this.state.password === '' || this.state.role === '' || this.state.role === 'Select Role'){
          this.setState({
            message : 'Please select appropriate credentials',
          })
        }else{            
            axios({
              method: "post",
              url: "http://localhost:8082/v1/signup",
              data: user,
              headers: { "Content-Type": "application/json" },
            })
              .then((response)=> {
                  if(response.data === "User registered"){
                    alert(response.data)
                    history.push('/');
                    window.location.reload();

                  }else if(response.data === "Registration is closed. Please try Next season. Thank you!"){
                    this.setState({
                      message : 'Registration is closed. Please try Next season. Thank you!'
                    })
                  }
                
              })
              .catch(function (response) {
                //handle error
                alert(response.data )
              });
        }

    }
    render() {
    return(
        <div className="login-card">
          <div className="login-card__header">
            Registration
          </div>
          <div className="login-card__controls">
            
            <div className="login-card__control">
                <label>Roles</label>
                <select id="dropdown" onChange={this.handleDropdownChange}>
                <option value="Select Role">Select Role</option>
                <option value="Player">Player</option>
                <option value="Coach">Coach</option>
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
              onClick={this.submitRegister
              .bind(this)}>Register</button>

            <div style={{color: "red"}}>
            {this.state.message}
            </div>
          </div>
        </div>
    )
    }

}


export default Registration;