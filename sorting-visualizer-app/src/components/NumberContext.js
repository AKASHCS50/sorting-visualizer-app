import React, { Component, createContext } from "react";

export const NumberContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_ARR":
      return {
        ...state,
        arr: action.payload
      };
    // case "CHANGE_SIZE":
    //   return {
    //     ...state,
    //     arr: action.payload
    //   };
    default:
      return state;
  }
};

export class NumberProvider extends Component {
  state = {
    arr: [
      { num: 46, active: 0 },
      { num: 256, active: 0 },
      { num: 399, active: 0 },
      { num: 369, active: 0 },
      { num: 166, active: 0 },
      { num: 285, active: 0 },
      { num: 395, active: 0 },
      { num: 59, active: 0 },
      { num: 39, active: 0 },
      { num: 313, active: 0 },
      { num: 166, active: 0 },
      { num: 34, active: 0 },
      { num: 318, active: 0 },
      { num: 200, active: 0 },
      { num: 66, active: 0 },
      { num: 100, active: 0 },
      { num: 228, active: 0 },
      { num: 67, active: 0 },
      { num: 80, active: 0 },
      { num: 293, active: 0 },
      { num: 320, active: 0 },
      { num: 353, active: 0 },
      { num: 343, active: 0 },
      { num: 158, active: 0 },
      { num: 297, active: 0 },
      { num: 111, active: 0 },
      { num: 398, active: 0 },
      { num: 109, active: 0 },
      { num: 319, active: 0 },
      { num: 100, active: 0 },
      { num: 304, active: 0 },
      { num: 347, active: 0 },
      { num: 124, active: 0 },
      { num: 59, active: 0 },
      { num: 290, active: 0 },
      { num: 117, active: 0 },
      { num: 328, active: 0 },
      { num: 168, active: 0 },
      { num: 12, active: 0 },
      { num: 395, active: 0 },
      { num: 196, active: 0 },
      { num: 56, active: 0 },
      { num: 43, active: 0 },
      { num: 242, active: 0 },
      { num: 254, active: 0 },
      { num: 313, active: 0 },
      { num: 98, active: 0 },
      { num: 192, active: 0 },
      { num: 142, active: 0 },
      { num: 141, active: 0 }
    ],
    size: 4,
    dispatch: action => this.setState(state => reducer(state, action))
  };
  // console.log(this.state.size);
  render() {
    return (
      <NumberContext.Provider value={this.state}>
        {this.props.children}
      </NumberContext.Provider>
    );
  }
}

export const Consumer = NumberContext.Consumer;
