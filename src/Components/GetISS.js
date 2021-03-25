import React from 'react';

const GetISS = ({iss_position}) => {

            return(           
                <div>
                <p>
                latitude: <span>{iss_position.latitude}</span><br/>
                longitude: <span>{iss_position.longitude}</span>
                </p>
                </div>  
            );
      
    }

export default GetISS;


/*
const response = await fetch(api_url);
const data = await response.json();
const {iss_position:{latitude, longitude}} = data;
document.getElementById('lat').textContent = latitude;
document.getElementById('lon').textContent = longitude;
const api_url = 'http://api.open-notify.org/iss-now.json';

        return(           
            <div>
            <p>
            latitude: <span>{iss_position.latitude}</span><br/>
            longitude: <span>{iss_position.longitude}</span>
            </p>
            </div>  
        );   */