import 'dotenv/config';
import React from "react";
import "./App.css";
import PhotoCard from './component/PhotoCard';

const apiKey = process.env.NASA_KEY

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
