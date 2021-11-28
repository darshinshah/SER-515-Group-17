import './Apply.css';
import React from 'react';
import axios from 'axios';
import history from './history';

export class Referee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {

        name: '',
        emailId: '',
        age: '',
        gender: '',
        experience: '',
        availability: '',
        message: ''
      }

    }
  }
  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      employee: {
        ...this.state.employee,
        [name]: value
      }
    });
  }

  onCreate = (e) => {
    e.preventDefault();
    const user = this.state.employee;
    axios({
      method: "post",
      url: "http://localhost:8082/registerReferee",
      data: user,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.data === "Referee is already registered!") {
          this.setState({
            message: 'Referee is already registered!',
          })
          alert(response.data);
        } else if (response.data === "User registered") {
          alert(response.data);
          history.push('/');
          window.location.reload();
        } else if (response.data === "Registration is closed. Please try Next season. Thank you!") {
          this.setState({
            message: 'Registration is closed. Please try Next season. Thank you!'
          })
        }
      })
      .catch(function (response) {
        //handle error
      });



  }

  render() {
    return (
      <div className="applypage">
        <div className="applypage__content">
          <div className="header">
            Referees Center for the Soccer Tournament
          </div>
          <div className="applypage__text">
            <form className="applypage__form">
              <div className="subheader_separator subheader_main">Information</div>
              <div className="applypage__form_row">
                <label>
                  Name:
                </label>
                <input type="text" name="name" value={this.state.employee.name} onChange={this.changeHandler}></input>
              </div>
              <div className="applypage__form_row">
                <label>
                  Email:
                </label>
                <input type="text" name="emailId" value={this.state.employee.emailId} onChange={this.changeHandler}></input>
              </div>
              <div className="applypage__form_row">
                <label>
                  Age:
                </label>
                <input type="text" name="age" value={this.state.employee.age} onChange={this.changeHandler}></input>
              </div>
              <div className="applypage__form_row">
                <label>
                  Gender:
                </label>
                <input type="text" name="gender" value={this.state.employee.gender} onChange={this.changeHandler}></input>
              </div>
              <div className="applypage__form_row">
                <label>
                  Availability:
                </label>
                <input type="text" name="availability" value={this.state.employee.availability} onChange={this.changeHandler}></input>
              </div>
              <div className="applypage__form_row">
                <label>
                  Experience:
                </label>
                <input type="text" name="experience" value={this.state.employee.experience} onChange={this.changeHandler}></input>
              </div>
              <div className="applypage__form_row" style={{ paddingTop: "5rem" }}>
                <input type="submit" value="Submit Form" style={{ width: "12rem" }} onClick={this.onCreate.bind(this)} />
              </div>
              <div style={{ color: "red" }}>
                {this.state.employee.message}
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }

}

export default Referee;