import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import vehicleData from '../../vehicleData/vehicleData';

const Home = () => {
  return (
    <div className="home">
      {
          vehicleData.map(vehicle =>{
          return <>
              <Link to="/vehicle-bike">
                  <div className="vehicle-cart">
                    <img src={vehicle.image} alt="" />
                    <h3>{vehicle.type}</h3>
                  </div>
              </Link>
            </>
          } )
      }
    </div>
  );
};

export default Home;
