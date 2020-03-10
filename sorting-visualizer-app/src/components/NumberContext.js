import React, { useState, createContext } from "react";

export const NumberContext = createContext();

export const NumberProvider = props => {
  const [arr, newState] = useState([]);

  return (
    <NumberContext.Provider value={[arr, newState]}>
      {props.children}
    </NumberContext.Provider>
  );
};
