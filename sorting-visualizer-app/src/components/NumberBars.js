import React, { Component } from "react";
import { Consumer } from "./NumberContext";
import uuid from "react-uuid";
import Bar from "./Bar";

class NumberBars extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { arr } = value;
          return (
            <div className="Arraybox">
              {arr.map(numb => (
                <Bar num={numb.num} active={numb.active} key={uuid()} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default NumberBars;
