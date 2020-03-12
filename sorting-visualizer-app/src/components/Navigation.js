import React from "react";
import RandomButton from "./RandomButton";
import SortButton from "./SortButton";

function Navigation() {
  return (
    <div style={nav}>
      <ul style={nav_ul}>
        <li style={heading}> Sorting Algorithm Visualizer </li>
        <li style={sort_btn}>
          <RandomButton />
        </li>
        <li style={sort_btn}>
          <SortButton />
        </li>
      </ul>
    </div>
  );
}

const nav = {
  display: "flex",
  width: "100vw",
  height: "13vh",
  backgroundColor: "#333",
  position: "fixed",
  top: "0",
  left: "0",
  color: "white"
};

const nav_ul = {
  minWidth: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  listStyle: "none",
  padding: "20px",
  cursor: "default"
};

const heading = {
  fontSize: "1.25rem"
};

const sort_btn = {
  fontSize: "1.3rem",
  cursor: "pointer",
  backgroundColor: "#96a2967a",
  padding: "10px",
  borderRadius: "10px",
  minWidth: "80px",
  textAlign: "center"
};

export default Navigation;
