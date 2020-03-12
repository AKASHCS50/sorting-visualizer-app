import React, { Component } from "react";
import { Consumer } from "./NumberContext";

const number_of_bars = 200;

class RandomButton extends Component {
  state = {
    brr: {}
  };

  GenerateRandom = (dispatch, e) => {
    let crr = [];
    for (let i = 0; i < number_of_bars; i++) {
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
          const { arr, dispatch } = value;
          return (
            <div className="Random-Btn">
              <button onClick={this.GenerateRandom.bind(this, dispatch)}>
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
