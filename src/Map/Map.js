import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import Dashboard from '../Manage/Dashboard';
import Sidebar from '../Manage/Sidebar';


const SimpleMap = (props) => {
    const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
    const [zoom, setZoom] = useState(11);
    return (
      <div class="container">
        <Dashboard/>
        <Sidebar/>
        <h1 style={{color:'black', fontFamily:"Open Sans", fontSize:'35px', fontWeight:'bold', marginLeft:'200px'}}>Google Map View</h1>
        <div style={{ height: '670px', width: '1070px', marginLeft:'250px', marginRight:'250px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'replace your api' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
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
          />

        </GoogleMapReact>
      </div>
      </div>
    );
}

export default SimpleMap;

