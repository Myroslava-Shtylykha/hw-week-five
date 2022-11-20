import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
    return (
      <div className="App">
        <div className="container">
          <Weather defaultCity="Lisbon" />
         
          <div className="link">
            This project was coded by Myroslava Shtylykha and is{" "}
            <a
              href="https://github.com/Myroslava-Shtylykha/hw-week-five"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://courageous-shortbread-6472d5.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </div>
        </div>
      </div>
    );
}
 
