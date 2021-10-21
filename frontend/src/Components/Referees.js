import './Referees.css';
import React from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

export class Referee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employee:{
               
                name:'',
                emailId:'',
                age:'',
                gender:'',
                experience:'',
                availability:''
            }
           
        }
    }
    changeHandler=e=>{
        const name=e.target.name;
        const value = e.target.value;
        this.setState({employee:{
            ...this.state.employee,
            [name]:value
        }});
    }

    onCreate=(e)=>{
         console.log(this.state.employee.name);
        console.log(this.state.employee.emailId);
        console.log(this.state.employee.age);
        console.log(this.state.employee.gender);

        console.log(this.state.employee.experience);
        console.log(this.state.employee.availability);
        
        e.preventDefault();
        const user=this.state.employee;

            

        axios({
          method: "post",
          url: "http://localhost:8080/v1/registerReferee",
          data: user,
          headers: { "Content-Type": "application/json" },
        })
          .then((response)=> {
              if(response.data === "Referee is already registered!"){
                this.setState({
                  message : 'Referee is already registered!',
                })
              }else if(response.data === "User registered" ){
                this.setState({
                  message : 'Referee registered',
                })
              }
            console.log(response); 
            alert(response.data )
            
          })
          .catch(function (response) {
            //handle error
          });
        


    }

    render(){
        return(
            <div >
                <h2 className="refereedetail">Referee Center for Soccer Tournament</h2>
                <form className="loginform">
                    <div className="applypage__form_row">
                    <p>
                        <label>  Name <input type="text" placeholder="Enter your name"
                         name="name" value={this.state.employee.name} onChange={this.changeHandler}></input></label>
                    </p>
                    </div>
                    <div className="applypage__form_row">
                    <p>
                        <label> Email <input type="text" placeholder="Enter your email"
                         name="emailId" value={this.state.employee.emailId} onChange={this.changeHandler}></input></label>
                    </p>
                    </div>
                    <div className="applypage__form_row">
                    <p>
                        <label> Age<input type="number" placeholder="Enter your Age"
                         name="age" value={this.state.employee.age} onChange={this.changeHandler}></input></label>
                    </p>
                    </div>
                    <div className="applypage__form_row">
                    <p>
                        <label> Gender <input type="text" placeholder="Enter your gender"
                         name="gender" value={this.state.employee.gender} onChange={this.changeHandler}></input></label>
                    </p>
                    </div>
                   
                    <p>
                        <label> Availability
                        <select id="dropdown" name="availability" onChange={this.changeHandler}>
                            <option value="available">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>    
                        </select>
                        </label>
                    </p>
                   
                    <div className="applypage__form_row">
                    <p>
                        <label> Experience <input type="number" placeholder="Enter exp."
                         name="experience" value={this.state.employee.experience} onChange={this.changeHandler}></input></label>
                    </p>
                    </div>
                </form>
                <button onClick={this.onCreate.bind(this)}  style={{width:"12rem"}}>submit</button>
            </div>
        )
    }

}
  
export default Referee;