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
      city:''
    };

    this.fieldClicked = this.fieldClicked.bind(this);
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


  componentDidMount(){
    
    axios({
      method: "get",
      url: "http://localhost:8080/v1/fields",
      headers: { "Content-Type": "application/json" },
    }).then((response)=> {

      this.setState(()=>({
        MapsData:response.data
      }))
    
    
  })
  .catch(function (response) {
    //handle error
  });

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
