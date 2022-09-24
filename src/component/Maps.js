import '../styles/Maps.css'
import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { IconLocation } from './IconLocation';


export default function Map(props) { //mapa para details
    // const [map, setMap] = useState([])
    const city = props.city

        

    return(
        <>
      
            <MapContainer id='map' center={{lat:city.latitude, lng:city.longitude}} zoom={11} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

            <Marker
            icon={IconLocation}
            position={{lat:city.latitude, lng:city.longitude}}>
                <Popup>
                {city.city}❤️
                </Popup>
            </Marker>
    </MapContainer>
        
        </>
        )
    }