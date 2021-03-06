import React from "react";
import axios from 'axios';
import history from './history';
import Logout from "./Logout";
class RefereeManagerPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fixtures:[],
            refereesData:[]
        };
    }
    componentDidMount(){
        axios.get("http://localhost:8082/getReferees", { "Content-Type": "application/json" }).then(
            (response) => {
                this.setState({
                    refereesData:response.data
                })
            }
        )
        axios.get("http://localhost:8082/getFixturesWithoutReferees", { "Content-Type": "application/json" }).then(
            (response) => {
                this.setState({
                    fixtures:response.data
                })
            }
        )
    }

    handleItemChanged(i, event) {
        var items = this.state.fixtures;
        items[i]["refereeName"]  = event.target.value;
    
        this.setState({
          fixtures: items
        });
    }

    submit(e){
        const matches = this.state.fixtures;
        axios({
            method: "post",
            url: "http://localhost:8082/saveFixturesWithoutReferees",
            data: matches,
            headers: { "Content-Type": "application/json" },
          }).then((response)=>{
            alert(response.data);
            history.push('/RefereesAssigned');
            window.location.reload();
          })
          .catch(function (response) {
            //handle error
          });

    }
    assignAutomatically(e){

        axios.get("http://localhost:8082/assignRefereesAutomatically", { "Content-Type": "application/json" }).then(
            (response) => {
                alert(response.data);
                history.push('/RefereesAssigned');
                window.location.reload();
            }
        )

    }



    render() {
        var context = this;
        return (
            <div className="refereetablepage">
            <div className="refereetablepage__content">
                <Logout/>
                <div className='app-container'>
                    <strong>List of Referees Registered</strong>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Experience</th>
                                <th>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.refereesData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.emailId}</td>
                                    <td>{data.age}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.experience}</td>
                                    <td>{data.availability}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={context.assignAutomatically.bind(context)}>Randomly assign the Referees to the Fixtures</button>
                </div>
                <div className='app-container'>
                    <strong>List of Fixtures</strong>
                    <table>
                        <thead>
                            <tr>
                                <th>Home Team</th>
                                <th>Away Team</th>
                                <th>Category</th>
                                <th>Venue</th>
                                <th>Referee Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.fixtures.map((data,index) => (
                                <tr key={data.matchId}>
                                    <td>{data.homeTeam}</td>
                                    <td>{data.awayTeam}</td>
                                    <td>{data.category}</td>
                                    <td>{data.venue}</td>
                                    <td><input onChange={ context.handleItemChanged.bind(context, index) } value= {data.refereeName}/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type = "button" onClick={context.submit.bind(context)}>Assign the Referees</button>
            </div>
            </div>
        
        </div>
        )

    }
}

export default RefereeManagerPage;