import React from "react";
import "./App.css";
import PhotoCard from './component/PhotoCard';

const apiKey = process.env.REACT_APP_NASA_KEY

function App() {
  return (
    <div className="App">
      <p>
        <PhotoCard apiLey={apiKey} />
      </p>
    </div>
  );
}

export default App;
