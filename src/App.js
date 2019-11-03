import React from "react";
import "./App.css";
import PhotoCard from './component/PhotoCard';
import "./component/components.css";

const apiKey = process.env.REACT_APP_NASA_KEY
console.log(apiKey);

function App() {
  return (
    <div className="App">
      <p>
        <PhotoCard apiKey={apiKey} />
      </p>
    </div>
  );
}

export default App;
