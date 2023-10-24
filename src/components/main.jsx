import React from "react";
import drone1 from "../assets/drone1.png"
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className='landing-page'>
         <div className='landing-text'>
          <h2>The World’s Smallest Quadcopter</h2>
            <h1>BuzzBee Nano Drone</h1>
            <h4>Ideal For Indoor Usage & Ultra Portable. 3 User Modes, Junior, Intermediate & Healess.
           </h4>
           <button className='landing-button'>SHOP NOW</button>
         </div>
         <div className='landing-image'>
                <img src={drone1}></img>
         </div>
      </div>
    </>
  );
};

export default Home;
