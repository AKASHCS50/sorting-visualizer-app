import React from "react";
import "./App.css";
import NumberBars from "./components/NumberBars";
import { NumberProvider } from "./components/NumberContext";
import RandomButton from "./components/RandomButton";

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <RandomButton />
        <NumberBars />
      </div>
    </NumberProvider>
  );
}

export default App;
