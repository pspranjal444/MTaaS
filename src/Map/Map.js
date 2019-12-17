import React, { useState } from 'react';
import {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import Dashboard from '../Manage/Dashboard';
import Sidebar from '../Manage/Sidebar';
import Axios from 'axios';



class SimpleMap extends Component {
    // const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
    // const [zoom, setZoom] = useState(11);
    static defaultProps = {
      center: {
        lat: 37.2941,
        lng: -121.8996
      },
      zoom: 11
    };
    constructor(){
      super()
      this.state = {
        coord: []
      }
    }

    componentDidMount(){
      Axios.get('http://localhost:3001/getPosition').then(result=>{
        console.log(result.data)
        this.setState({
          coord: result.data
        })
      });
    }

    render(){
      // const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
      // const [zoom, setZoom] = useState(11);
      let coord = this.state.coord.map(entry=>{
        console.log(entry.lat)
        return(
          <Marker
            lat={entry.lat}
            lng={entry.lon}
            name={entry.name+'-'+entry.user_id}
            color="blue"
          />
        );
      }); 
      return (
      <div class="container">
        <Dashboard/>
        <Sidebar/>
        <h1 style={{color:'black', fontFamily:"Open Sans", fontSize:'35px', fontWeight:'bold', marginLeft:'200px'}}>Google Map View</h1>
        <div style={{ height: '670px', width: '1070px', marginLeft:'250px', marginRight:'250px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'replace your api' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          {coord}
          {/* <Marker
            lat={11.0168}
            lng={76.9558}
            name="My Marker"
            color="blue"
          />

          <Marker
            lat={12.0168}
            lng={77.9558}
            name="My Marker"
            color="blue"
          />
          <Marker
            lat={13.0168}
            lng={75.9558}
            name="My Marker"
            color="blue"
          />
          <Marker
            lat={14.0168}
            lng={78.9558}
            name="My Marker"
            color="blue"
          />
          <Marker
            lat={15.0168}
            lng={79.9558}
            name="My Marker"
            color="blue"
          /> */}

        </GoogleMapReact>
      </div>
      </div>
    );}
}

export default SimpleMap;

