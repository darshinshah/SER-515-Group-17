import React  from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import  Image  from './Image';
import './Maps.css';

class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      MapsData :[],
      image:null,
      flag:false,
      fieldName:'',
      city:'',
      matchesData:[]
    };

    this.fieldClicked = this.fieldClicked.bind(this);
    this.generateMatches = this.generateMatches.bind(this);
  }

    
  containerStyle = {
      width: '800px',
      height: '500px',
    };

  center = {
      lat: -3.745,
      lng: -38.523
    };


  fieldClicked = (e) =>{

    this.setState(()=>({
      image : e.image,
      flag :true,
      fieldName : e.fieldname,
      city : e.city
    }))
  }

  generateMatches=()=>{
    const venuesdata = this.state.MapsData;
    const matchesdata = this.state.matchesData;
    var obj = {};

    for(let i =0;i<venuesdata.length;i++){
      for(let j =0;j<matchesdata.length;j++){
        if(venuesdata[i].fieldname === matchesdata[j].venue){
          let name = venuesdata[i].fieldname;
          if(obj[name] === undefined){
            obj[name] = [];
            obj[name].push(matchesdata[j]);
          }else{
            obj[name].push(matchesdata[j]);
          }

        }

      }
    }
  }




  componentDidMount(){
    
    axios({
      method: "get",
      url: "http://localhost:8082/v1/fields",
      headers: { "Content-Type": "application/json" },
    }).then((response)=> {

      this.setState(()=>({
        MapsData:response.data
      }))
    })
    .catch(function (response) {
      //handle error
    });

    axios.get("http://localhost:8082/getFixtures", { "Content-Type": "application/json" }).then(
            (response) => {
              this.setState(()=>({
                matchesData: response.data
              }))
              this.generateMatches();
            }
      )


  }



  render() {
    return (

      <div className = "row">
         <div className = "column">
            <LoadScript googleMapsApiKey="AIzaSyB7apJEF8DQVz90lnXzx7dri-OFyBlWIOg">

              <GoogleMap mapContainerStyle={this.containerStyle} center={this.center} zoom={2} >

                 {this.state.MapsData.map((x, index)=>(
                   <Marker key = {index} position={{lat:x.latitude, lng : x.longitude}} onClick = {()=>this.fieldClicked(x)} />
                 ))}
   
              </GoogleMap>

            </LoadScript>
    
         </div>


      <div className = "column">
          <Image value = {this.state.flag} src = {this.state.image} fieldName = {this.state.fieldName} city = {this.state.city}/>
      </div>
   

  </div>

      
    );
  }

}

export default Maps;
