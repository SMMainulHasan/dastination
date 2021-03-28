import React, { useState } from 'react';
import { useParams } from 'react-router';
import vehicleData from '../../vehicleData/vehicleData';
import './Destination.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    const [location, setLocation] = useState({
        from: '',
        to: ''
    });

    const [clickedSearch, setClickedSearch] = useState(false)
    const handleSearchBtn = () => {
        setClickedSearch(true);
    }
    const {vehicleType} = useParams();
    let vehicleToDisplay ;
        vehicleData.map( vehicle => {
        if(vehicle.type.toLowerCase() === vehicleType){
            return vehicleToDisplay = vehicle ;
        }
    })
    const {image, set, type, rent} = vehicleToDisplay;
    return (
        <div className="destination">
            <div className="location-search">
            {
            clickedSearch
            ? <>
                    <div className="from-to">
                        <ul>
                            <div className="vertical-line"></div>
                            <li>{location.from}</li>
                            <br/>
                            <li>{location.to}</li>
                        </ul>
                    </div>
                    <div className="available-vehicle">
                        <h5><img src={image} alt=""/> &nbsp; {type}</h5>
                        <h5><FontAwesomeIcon icon={faUserFriends} /> &nbsp; {set}</h5>
                        <h4>${rent}</h4>
                    </div>
                    <div className="available-vehicle">
                        <h5><img src={image} alt=""/> &nbsp; {type}</h5>
                        <h5><FontAwesomeIcon icon={faUserFriends} /> &nbsp; {set}</h5>
                        <h4>${rent}</h4>
                    </div>
                    <div className="available-vehicle">
                        <h5><img src={image} alt=""/> &nbsp; {type}</h5>
                        <h5><FontAwesomeIcon icon={faUserFriends} /> &nbsp; {set}</h5>
                        <h4>${rent}</h4>
                    </div>
                </>
            : <> 
                <h5>Pick from</h5>
                <input onBlur={event => setLocation({...location, from: event.target.value})} required name="from" type="text"/>
                <h5>Pick to</h5>
                <input onBlur={event => setLocation({...location, to: event.target.value})} required name="to" type="text"/><br/>
                <button onClick={handleSearchBtn}>Search</button>
             </>
            } 
            </div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58411.91863502084!2d90.40289326111213!3d23.792096233301667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1616924400134!5m2!1sen!2sbd" width="600" height="500" allowfullscreen="" loading="lazy"></iframe>
            
        </div>
    );
};

export default Destination;