import React, { Component } from 'react';
import Button from './components/button/';
import './App.css';

class App extends Component {
  state = {
    result: '',
    calculations: ''
  };

  handleClick = obj => {
    switch (obj.type) {
      case 'number':
        this.setState(state => {
          state.result = state.result + obj.value;
          return state;
        });
        break;
      case 'operation':
        this.handleOperation(obj.value);
        break;
      default:
    }
  };

  handleOperation = operation => {
    console.log('operation');
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
