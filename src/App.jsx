import { useState } from 'react';
import MyMap from './components/MyMap';
import './App.css';

function App() {
  // Dummy data for restaurant suggestions
  const locationData = {
    location: "X8VW+8RX",
    type: "Chinese",
    priceRange: "Medium",
    populationDensity: "25%",
    visibility: "15%",
    proximityToRoads: "18%",
    competition: "10%",
    traffic: "20%",
    successRate: "83%"
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>MapMySuccess</h1>
      </nav>

      {/* Content section with sidebar and map */}
      <div className="content">
        <div className="sidebar">
          <h3>Location: {locationData.location}</h3>
          <p>Type: {locationData.type}</p>
          <p>Price Range: {locationData.priceRange}</p>
          <br />
          <p>Population Density: {locationData.populationDensity}</p>
          <p>Visibility: {locationData.visibility}</p>
          <p>Proximity to Roads: {locationData.proximityToRoads}</p>
          <p>Competition: {locationData.competition}</p>
          <p>Traffic: {locationData.traffic}</p>
          <h4>Success Rate: <strong>{locationData.successRate}</strong></h4>
        </div>
        
        <div className="map-container">
          <MyMap />
        </div>
      </div>
    </div>
  );
}

export default App;
