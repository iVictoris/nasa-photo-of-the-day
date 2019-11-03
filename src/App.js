import React from "react";
import "./App.css";
import PhotoCard from './component/PhotoCard';
import "./component/components.css";

const apiKey = process.env.REACT_APP_NASA_KEY

function App() {
  return (
    <div className="App">
        <PhotoCard apiKey={apiKey} />
    </div>
  );
}

export default App;
