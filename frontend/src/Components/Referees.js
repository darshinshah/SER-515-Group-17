import './Referees.css';
import React from 'react';
import axios from 'axios';

export class Referee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employee:{
                id:'',
                name:'',
                email:'',
                yearsOfExp:'',
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

    onCreate=()=>{
        console.log(this.state.employee.id);
        console.log(this.state.employee.name);
        console.log(this.state.employee.email);
        console.log(this.state.employee.yearsOfExp);
        console.log(this.state.employee.availability);
        
    }

    render(){
        return(
            <div>
                <h2>Referee Center for Soccer Tournament</h2>
                <form className="loginform">
                    <p>
                        <label> Id: </label> <input type="text"
                         name="id" value={this.state.employee.id} onChange={this.changeHandler}></input>
                    </p>
                    <p>
                        <label>  Name: <input type="text"
                         name="name" value={this.state.employee.name} onChange={this.changeHandler}></input></label>
                    </p>
                    <p>
                        <label> Email: <input type="text"
                         name="email" value={this.state.employee.email} onChange={this.changeHandler}></input></label>
                    </p>
                    <p>
                        <label> Availability:
                        <select id="dropdown" name="availability" onChange={this.changeHandler}>
                            <option value="available">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>    
                        </select>
                        </label>
                    </p>
                    <p>
                        <label> Years of Experience: <input type="text"
                         name="yearsOfExp" value={this.state.employee.yearsOfExp} onChange={this.changeHandler}></input></label>
                    </p>
                </form>
                <button onClick={this.onCreate}>submit</button>
            </div>
        )
    }

}
  
export default Referee;