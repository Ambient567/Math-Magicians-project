/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <div className="row">
          <div className="res">0</div>
        </div>
        <div className="row">
          <div className="pads">AC</div>
          <div className="pads">+/-</div>
          <div className="pads">%</div>
          <div className="pads">&#247;</div>
        </div>
        <div className="row">
          <div className="pads">7</div>
          <div className="pads">8</div>
          <div className="pads">9</div>
          <div className="pads">x</div>
        </div>
        <div className="row">
          <div className="pads">4</div>
          <div className="pads">5</div>
          <div className="pads">6</div>
          <div className="pads">-</div>
        </div>
        <div className="row">
          <div className="pads">1</div>
          <div className="pads">2</div>
          <div className="pads">3</div>
          <div className="pads">+</div>
        </div>
        <div className="row">
          <div className="pads zero">0</div>
          <div className="pads">.</div>
          <div className="pads">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
