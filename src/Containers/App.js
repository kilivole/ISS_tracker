import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import GetISS from '../Components/GetISS';
import _ from 'lodash';
//import isslogo from '../Icons/icon_iss.png';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {     
      isFetching: false,
      iss_position: []
    }
   // this.getApi = this.getApi.bind(this);
  }

 async componentDidMount(){
   this.getApi();
   this.timer = setInterval(() => this.getApi(), 4000);
   // this.getApi()
    /*const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data = await response.json();
    this.setState({iss_position : data}); 
  */
   /* fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(response => response.json())
    .then(satellites => this.setState({ iss_position : satellites}));*/
  }

  getApi(){
    this.setState({...this.state, isFetching: true});
   /* fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(response => response.json())
    .then(satellites => this.setState({ iss_position : satellites})); */
  }

  fetchISS = () => {
    this.setState({...this.state, isFetching: true});
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(result => {
            this.setState({ iss_position: result, isFetching: false})
        })
        .catch(e => {
            console.log(e);
            this.setState({...this.state, isFetching: true});
        });
};

getApi = this.fetchISS;


  render(){


    const {iss_position} = this.state;
    const lat = iss_position.latitude;
    const lon = iss_position.longitude;
     const position = [lat, lon];

     const isLoaded = this.state.isFetching;

     const issIcon = L.icon({
      iconUrl: require('../Static/Icons/icon_iss.png'),
      iconSize:     [50, 30], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [25, 16], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
  });
 // L.marker([lat, lon, {icon: issIcon}]).addTo(map);    
     //console.log(this.state.iss_position);

   /* if (lat != undefined && lon != undefined){ 
        
       // lat = iss_position.latitude;
        //lon = iss_position.longitude;
          
        return(
          console.log(position=[lat, lon])
          )
      }*/

      return (
        <div className="App">
          <section className="App-header bg-info">
          <GetISS iss_position={iss_position}/>        
          </section>
            <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            {isLoaded
             ? <h1>Loading API yet</h1>
             :<Marker 
                position={position}
                icon= {issIcon}
                >
                
                <Popup>
                  ISS Station
                </Popup>
              </Marker>
              }
            </MapContainer>
        </div>
    );      
      }  

}

export default App;
