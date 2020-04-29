import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

// an object to use whenever you press AC
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

export default class Calculator extends Component {

  state = {...initialState};

  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({...initialState});
  }

  setOperation(operation) {
    console.log(operation)
  }

  addDigit(number) {
    // To make sure that the user doesn't implement two or more dots
    if (number === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    // clear display whenever the conditions is true
    const clearDisplay = this.state.displayValue === '0' ||
      this.state.clearDisplay;
    // need to clear the display will be empty otherwise it will display the value
    const currentValue = clearDisplay ? '' : this.state.displayValue;

    const displayValue = currentValue + number;

    // display the state on the screen display
    this.setState({displayValue, clearDisplay: false});

    if (number !== '.') {
      const index = this.state.current;
      const values = [...this.state.values]; // clone a new array

      const newValue = parseFloat(displayValue);

      values[index] = newValue;
      this.setState({ values });
      console.log(values);
    }
  }

  render() {
    return (
      <div className='Calculator'>
        <Display value={this.state.displayValue}></Display>
        <Button label="AC" click={this.clearMemory} triple/>
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation/>
      </div>
    )
  }
}