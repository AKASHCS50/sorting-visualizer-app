import React, { Component } from "react";
import { Consumer } from "./NumberContext";

class RandomButton extends Component {
  state = {
    brr: {}
  };

  GenerateRandom = (dispatch, size, e) => {
    let crr = [];
    for (let i = 0; i < size; i++) {
      crr.push({
        num: this.randomNumber(5, 400),
        active: 0
      });
    }
    this.setState({
      brr: crr
    });

    dispatch({
      type: "CHANGE_ARR",
      payload: crr
    });
  };

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, size } = value;
          return (
            <div className="Random-Btn">
              <button onClick={this.GenerateRandom.bind(this, dispatch, size)}>
                New
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default RandomButton;
