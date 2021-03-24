import React, { useState } from 'react';
import { useParams } from 'react-router';
import vehicleData from '../../vehicleData/vehicleData';
import './Destination.css';

const Destination = () => {
    const [location, setLocation] = useState({
        from: '',
        to: ''
    });
    const handleSearchBtn = () => {
        console.log(location.from, location.to);
    }
    const {vehicleType} = useParams();
    let vehicleToDisplay ;
        vehicleData.map( vehicle => {
        if(vehicle.type.toLowerCase() === vehicleType){
            return vehicleToDisplay = vehicle ;
        }
    })
    const {image, set, type} = vehicleToDisplay;
    return (
        <div className="destination">
            <div className="location-search">
                <h5>Pick from</h5>
                <input onBlur={event => setLocation({...location, from: event.target.value})} required name="from" type="text"/>
                <h5>Pick to</h5>
                <input onBlur={event => setLocation({...location, to: event.target.value})} required name="to" type="text"/><br/>
                <button onClick={handleSearchBtn}>Search</button>
                <div className="from-to">
                    <ul>
                        <div className="vertical-line"></div>
                        <li>{location.from}</li>
                        <br/>
                        <li>{location.to}</li>
                    </ul>
                </div>
                <div className="available-vehicle">
                    <img src={image} alt=""/>
                    <h5>{set}</h5>
                </div>
            </div>
        </div>
    );
};

export default Destination;