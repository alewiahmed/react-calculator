import React, { Component } from 'react';
import Button from './components/button/';
import './App.css';

class App extends Component {
  state = {
    result: 0,
    calculations: ''
  };

  render() {
    let { result, calculations } = this.state;
    return (
      <div className="App">
        <div className="calculator-container">
          <div className="result-container">
            <p className="white-text small-result">{calculations}</p>
            <p className="white-text big-result">{result}</p>
          </div>
          <div className="row">
            <Button value={'AC'} />
            <Button value={'CE'} />
            <Button value={'%'} />
            <Button value={'÷'} secondary />
          </div>
          <div className="row">
            <Button value={7} />
            <Button value={8} />
            <Button value={9} />
            <Button value={'×'} secondary />
          </div>
          <div className="row">
            <Button value={4} />
            <Button value={5} />
            <Button value={6} />
            <Button value={'-'} secondary />
          </div>
          <div className="row">
            <Button value={1} />
            <Button value={2} />
            <Button value={3} />
            <Button value={'+'} secondary />
          </div>
          <div className="row">
            <Button value={0} style={{ width: '120px' }} />
            <Button value={'.'} />
            <Button value={'='} secondary />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
