import { useState } from 'react';
import MyMap from './components/MyMap';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar /> {/* Include the Navbar here */}
      <div className="content">
        <div className="sidebar">
          {/* Add your suggestions or content here */}
          <h2>Suggestions</h2>
          <p>Click on the map for suggestions like population density, competition, traffic, etc.</p>
        </div>
        <div className="map-container">
          <MyMap />
        </div>
      </div>
    </>
  );
}

export default App;
