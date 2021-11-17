import './Apply.css';
import React from 'react';
import axios from 'axios';
import history from './history';
export class Volunteer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                volunteerId:'',
                name:'',
                age:'',
                emailId:'',
                gender:'',
                phoneNumber:'',
                city:'',
                message:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    submitForm(e){

        e.preventDefault();

        const user = {
                name:this.state.name,
                age:this.state.age,
                emailId:this.state.emailId,
                gender:this.state.gender,
                phoneNumber:this.state.phoneNumber,
                city:this.state.city,
        }
        axios({
            method: "post",
            url: "http://localhost:8082/saveVolunteer",
            data: user,
            headers: { "Content-Type": "application/json" },
          }).then((response)=>{
              if(response.data === 'Volunteer Registered'){
                alert("Application Submitted");
                history.push('/');
                window.location.reload();
              }else if(response.data === 'Registration is closed. Please try Next season. Thank you!'){
                  this.setState({
                      message : 'Registration is closed. Please try Next season. Thank you!'
                  })
              }
          })


    }






    render(){
        return(
            <div className="applypage">
                <div className="applypage__content">
                    <div className="header">
                        Application for Volunteer
                    </div>
                    <div className="applypage__text">
    
                        <form className="applypage__form">                            
                            <div className="subheader_separator subheader_main"> Information</div>
                            <div className="applypage__form_row">
                                <label>
                                    Name:
                                </label>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                            </div>
                            <div className="applypage__form_row">
                                <label>
                                    Email: 
                                </label>
                                <input type="text" name="emailId" value={this.state.emailId} onChange={this.handleChange}></input>
                            </div>
                            <div className="applypage__form_row">
                                <label>
                                    Phone Number
                                </label>
                                <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}></input>
                            </div>
                            <div className="applypage__form_row">
                                <label>
                                    Gender
                                </label>
                                <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange}></input>
                           
                            </div>
                            <div className="applypage__form_row">
                                <label>
                                    age
                                </label>
                                <input type="text" name="age" value={this.state.age} onChange={this.handleChange}></input>
                            </div>
                           
                            <div className="applypage__form_row">
                                <label>
                                    City
                                </label>
                                <input type="text" name="city" value={this.state.city} onChange={this.handleChange}></input>
                            </div>
                            
                           
                            <div className="applypage__form_row" style={{ paddingTop: "5rem" }}>
    
                                <input type="submit" value="Submit Form" style={{ width: "12rem" }} onClick={this.submitForm.bind(this)}/>
                            </div>
                            <div style={{color: "red"}}>
                            {this.state.message}
                            </div>
    
    
                        </form>
                    </div>
                </div>
            </div>
        )}
}

export default Volunteer;