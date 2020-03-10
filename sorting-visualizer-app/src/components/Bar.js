import React from "react";

function Bar({ num }) {
  return <div style={barStyle(num)}>{num}</div>;
}

const barStyle = num => {
  return {
    background: "#fff",
    width: "20px",
    height: num + "px"
  };
};

export default Bar;
