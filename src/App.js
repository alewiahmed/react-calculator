import React, { Component } from 'react';
import Button from './components/button/';
import './App.css';

class App extends Component {
  state = {
    inputs: [],
    result: '',
    calculations: '',
    recentOperator: ''
  };

  handleClick = obj => {
    let { recentOperator, inputs } = this.state;
    switch (obj.type) {
      case 'number':
        if (typeof inputs[inputs.length - 1] == 'string') {
          this.setState(state => {
            state.result = obj.value.toString();
            state.inputs.pop();
            return state;
          });
        } else {
          this.setState(state => {
            state.result += obj.value.toString();
            return state;
          });
        }
        break;
      case 'operation':
        this.handleOperation(obj.value);
        break;
      default:
    }
  };

  handleOperation = operation => {
    switch (operation) {
      case '=':
        this.equal();
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
      case '%':
        this.pushOperand(operation);
        break;
    }
  };

  equal = () => {};

  pushOperand = operator => {
    let { inputs, result } = this.state;
    if (typeof inputs[inputs.length - 1] != 'string') {
      this.setState(state => {
        state.calculations = state.result
          ? state.calculations + state.result + operator
          : '0' + operator;
        return state;
      });
    } else {
      this.setState(state => {
        let temp = state.calculations.split('');
        temp.splice(state.calculations.length - 1, 1, operator);
        state.calculations = temp.join('');
        return state;
      });
    }
    this.setState(state => {
      state.inputs = [parseFloat(state.result ? state.result : 0), operator];
      state.recentOperator = operator;
      return state;
    });
  };

  showCalculations = () => {
    let { calculations, recentOperator } = this.state;
    return calculations;
  };

  render() {
    let { result, calculations } = this.state;
    return (
      <div className="App">
        <div className="calculator-container">
          <div className="result-container">
            <p className="white-text small-result">{calculations}</p>
            <p className="white-text big-result">
              {result === '' ? 0 : result}
            </p>
          </div>
          <div className="row">
            <Button
              obj={{ type: 'operation', value: 'AC' }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'operation', value: 'CE' }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'operation', value: '%' }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'operation', value: '÷' }}
              onClick={this.handleClick}
              secondary
            />
          </div>
          <div className="row">
            <Button
              obj={{ type: 'number', value: 7 }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'number', value: 8 }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'number', value: 9 }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'operation', value: '×' }}
              onClick={this.handleClick}
              secondary
            />
          </div>
          <div className="row">
            <Button
              obj={{ type: 'number', value: 4 }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'number', value: 5 }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'number', value: 6 }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'operation', value: '-' }}
              onClick={this.handleClick}
              secondary
            />
          </div>
          <div className="row">
            <Button
              obj={{ type: 'number', value: 1 }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'number', value: 2 }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'number', value: 3 }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'operation', value: '+' }}
              onClick={this.handleClick}
              secondary
            />
          </div>
          <div className="row">
            <Button
              obj={{ type: 'number', value: 0 }}
              onClick={this.handleClick}
              style={{ width: '120px' }}
            />
            <Button
              obj={{ type: 'operation', value: '.' }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'operation', value: '=' }}
              onClick={this.handleClick}
              secondary
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
