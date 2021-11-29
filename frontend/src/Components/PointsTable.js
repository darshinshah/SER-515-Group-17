import './RefereeTablePage.css'
import React from "react";
import axios from 'axios';
class PointsTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pointsData: [],
            points:''
        }
        this.parse = this.parse.bind(this);

    }

    parse = (data)=>{
        var arr = [];
        var val ='';
        var i =1;
        for(var key of Object.keys(data)){
            var obj1= [];
            if(i===1){
                val += key;
                i++;
            }
            obj1.push(key);
            obj1.push(data[key][0]);
            obj1.push(data[key][1]);
            arr.push(obj1);
        }
        this.setState({
            pointsData: arr,
            points: val
        })
        
        
    }

    componentDidMount(){
        axios.get("http://localhost:8082/getStandings", { "Content-Type": "application/json" }).then(
            (response) => {
                this.parse(response.data);               
            }
        )
    }

    render(){
        return(
            <div className="refereetablepage">
            <div className="refereetablepage__content">
                <div className='app-container'>
                    <strong>Points Table</strong>
                    <table>
                        <thead>
                            <tr>
                                <th>Home Team</th>
                                <th>Won</th>
                                <th>Lose</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pointsData.map((data,index) => (
                                <tr key={index}>
                                    <td>{data[0]}</td>
                                    <td>{data[1]}</td>
                                    <td>{data[2]}</td>
                                    <td>{data[1] * 3}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        Winner of the Tournament is &ensp;
                        <strong>
                             {this.state.points}
                        </strong>
                    </div>
                </div>
            </div>
            <div className="refereetablepage__footer">
    
            </div>
        </div>
           
        )

    }

    

}

export default PointsTable;