import React from "react";
import "./App.css";
import NumberBars from "./components/NumberBars";
import { NumberProvider } from "./components/NumberContext";
import Navigation from "./components/Navigation";

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <Navigation />
        <NumberBars />
        <nav className="navbar navbar-light bg-primary text-center footer">
          <p className="footer-txt">
            For the <span id="ft-icon">❤</span> of web - © 2020 Akash
            Sharma
          </p>
        </nav>
      </div>
    </NumberProvider>
  );
}

export default App;
