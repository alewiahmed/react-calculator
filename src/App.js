import React, { Component } from 'react';
import Button from './components/button/';
import './App.css';

class App extends Component {
  state = {
    result: '',
    calculations: '',
    operandCount: 0,
    recentOperator: '',
    firstOperand: undefined,
    secondOperand: undefined
  };

  handleClick = obj => {
    let { operandCount } = this.state;
    switch (obj.type) {
      case 'number':
        if (operandCount == 1) {
          this.setState(state => {
            state.operandCount = 2;
            state.firstOperand = parseFloat(state.result);
            state.result = obj.value.toString();
            state.secondOperand = parseFloat(obj.value.toString());
            return state;
          });
        } else if (operandCount == 2) {
          this.setState(state => {
            let newResult = state.result + obj.value.toString();
            state.secondOperand = parseFloat(newResult);
            state.result = newResult;
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
    let { operandCount } = this.state;
    switch (operation) {
      case '=':
        this.calculate();
        this.clearCalculations();
        break;
      case '±':
        this.addSign();
        break;
      case 'C':
        this.clearResult();
        break;
      case 'AC':
        this.clearEverything();
        break;
      default:
        this.pushOperand(operation);
        if (operandCount == 2) {
          this.calculate();
        }
        break;
    }
  };

  calculate = () => {
    let { firstOperand, recentOperator, secondOperand } = this.state;
    if (!recentOperator) return;
    let theResult = 0;
    switch (recentOperator) {
      case '+':
        theResult = firstOperand + secondOperand;
        break;
      case '-':
        theResult = firstOperand - secondOperand;
        break;
      case '×':
        theResult = firstOperand * secondOperand;
        break;
      case '÷':
        theResult = firstOperand / secondOperand;
        break;
      default:
    }
    this.setState({
      operandCount: 1,
      result: theResult,
      firstOperand: theResult
    });
  };

  addSign = () => {
    let { operandCount } = this.state;
    if (operandCount == 0) {
      this.setState(state => {
        state.firstOperand = parseFloat(state.result) * -1;
      });
    } else {
      this.setState(state => {
        state.secondOperand = parseFloat(state.result) * -1;
      });
    }
    this.setState(state => {
      state.result = (parseFloat(state.result) * -1).toString();
      return state;
    });
  };

  clearCalculations = () => {
    this.setState({
      calculations: ''
    });
  };

  clearEverything = () => {
    this.setState({
      result: '',
      operandCount: 0,
      calculations: '',
      recentOperator: '',
      firstOperand: undefined,
      secondOperand: undefined
    });
  };

  clearResult = () => {
    this.setState({
      result: ''
    });
  };
  pushOperand = operator => {
    let { operandCount, calculations } = this.state;
    if (operandCount == 1 && calculations !== '') {
      this.setState(state => {
        let temp = state.calculations.split('');
        temp.splice(state.calculations.length - 1, 1, operator);
        state.calculations = temp.join('');
        return state;
      });
    } else {
      this.setState(state => {
        state.calculations = state.result
          ? state.calculations + state.result + operator
          : '0' + operator;
        return state;
      });
    }
    this.setState(state => {
      state.operandCount = 1;
      state.recentOperator = operator;
      state.firstOperand = parseFloat(state.result);
      state.secondOperand = parseFloat(state.result);
      return state;
    });
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
              obj={{ type: 'operation', value: 'C' }}
              onClick={this.handleClick}
            />
            <Button
              obj={{ type: 'operation', value: '±' }}
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
