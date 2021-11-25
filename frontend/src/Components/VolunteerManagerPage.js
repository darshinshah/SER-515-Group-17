import React from "react";
import axios from 'axios';
import history from './history';
class VolunteerManagerPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fixtures:[],
            volunteersData:[]
        };
    }
    componentDidMount(){
        axios.get("http://localhost:8082/allVolunteers", { "Content-Type": "application/json" }).then(
            (response) => {
                this.setState({
                    volunteersData:response.data
                })
            }
        )
        axios.get("http://localhost:8082/getFixturesWithoutVolunteers", { "Content-Type": "application/json" }).then(
            (response) => {
                this.setState({
                    fixtures:response.data
                })
            }
        )
    }

    handleItemChanged(i, event) {
        var items = this.state.fixtures;
        items[i]["volunteerName"]  = event.target.value;
    
        this.setState({
          fixtures: items
        });
    }

    submit(e){
        const matches = this.state.fixtures;
        axios({
            method: "post",
            url: "http://localhost:8082/saveFixturesWithoutVolunteers",
            data: matches,
            headers: { "Content-Type": "application/json" },
          }).then((response)=>{
            alert(response.data);
            history.push('/VolunteersAssigned');
            window.location.reload();
          })
          .catch(function (response) {
            //handle error
          });

    }
    assignAutomatically(e){

        axios.get("http://localhost:8082/assignVolunteersAutomatically", { "Content-Type": "application/json" }).then(
            (response) => {
                alert(response.data);
                history.push('/VolunteersAssigned');
                window.location.reload();
            }
        )

    }



    render() {
        var context = this;
        return (
            <div className="refereetablepage">
            <div className="refereetablepage__content">
                <div className='app-container'>
                    <strong>List of Volunteers Registered</strong>
                    <table>
                        <thead>
                            <tr>
                                <th>Volunteer Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>age</th>
                                <th>Gender</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.volunteersData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.emailId}</td>
                                    <td>{data.phoneNumber}</td>
                                    <td>{data.age}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={context.assignAutomatically.bind(context)}>Randomly assign the Volunteers to the Fixtures</button>
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
                                <th>Volunteer Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.fixtures.map((data,index) => (
                                <tr key={data.matchId}>
                                    <td>{data.homeTeam}</td>
                                    <td>{data.awayTeam}</td>
                                    <td>{data.category}</td>
                                    <td>{data.venue}</td>
                                    <td><input onChange={ context.handleItemChanged.bind(context, index) } value= {data.volunteerName}/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type = "button" onClick={context.submit.bind(context)}>Assign the Volunteers</button>
            </div>
            </div>
        
        </div>
        )

    }
}

export default VolunteerManagerPage;