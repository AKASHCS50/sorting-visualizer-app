import React from "react";
import "./App.css";
import NumberBars from "./components/NumberBars";
import { NumberProvider } from "./components/NumberContext";
import RandomButton from "./components/RandomButton";
import Navigation from "./components/Navigation";

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <Navigation />
        <NumberBars />
      </div>
    </NumberProvider>
  );
}

export default App;
