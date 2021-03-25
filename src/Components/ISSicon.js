import React from 'react';
import L from 'leaflet';
import icon from '../ISS_spacecraft_model_1.png';

const ISSicon = (()=>{

 const issIcon = new L.Icon({
    iconUrl: icon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
});   
})


export default ISSicon;