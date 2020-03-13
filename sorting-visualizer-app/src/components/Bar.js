import React, { useState } from "react";

function Bar({ num, active }) {
  let color = "#fff";

  if (active === 1) color = "purple";
  if (active === 2) color = "green";
  if (active === 3) color = "yellow";
  if (active === 4) color = "red";

  return <div style={barStyle(num, color)}></div>;
}

const barStyle = (num, color) => {
  return {
    backgroundColor: color,
    width: "2px",
    height: num + "px"
  };
};

export default Bar;
