import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import vehicleData from '../../vehicleData/vehicleData';//I have created fake vehicle data in src file//

const Home = () => {
  return (
    <div className="home">
      {
          vehicleData.map(vehicle =>{
          return <>
              <Link to={"/vehicle-"+vehicle.type.toLowerCase()}>
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
