import React from 'react';
import axios from 'axios';

class LoginBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          email:'',
          password:'',
          role :''
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
  
    submitLogin(e) {
        e.preventDefault();

        const user = {email: this.state.email,
                    password: this.state.password,
                    role : this.state.role} 
            
        console.log(user);

        axios({
          method: "post",
          url: "http://localhost:8080/api/savelogin",
          data: user,
          headers: { "Content-Type": "application/json" },
        })
          .then(function (response) {
            //handle success
            
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
        
        // axios.post(`http://localhost:8080/api/login`, {user})
        //     .then(res=>{
        //         console.log(res);
        //     })



    }
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
            <div>
            <select id="dropdown" onChange={this.handleDropdownChange}>
              <option value="Select Role">Select Role</option>
              <option value="Player">Player</option>
              <option value="Coach">Coach</option>
              <option value="Referee">Referee</option>
              <option value="Tournament Manager">Tournament Manager</option>
            </select>
            </div>
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="Username"
                value = {this.state.email}
                onChange = {this.handleChange} />
            </div>
  
            <div className="input-group">
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
          </div>
        </div>
      );
    }
  
  }

  export default LoginBox;