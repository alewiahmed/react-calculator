import React, { Component } from 'react';
import styles from './styles';

export default class Button extends Component {
  static defaultProps = {
    length: 0
  };
  render() {
    let { obj, style, secondary, onClick, buttonText } = this.props;
    secondary = secondary ? styles.secondary : {};
    return (
      <button
        style={{ ...styles.button, ...style, ...secondary }}
        onClick={() => onClick(obj)}
      >
        <p style={{ ...styles.buttonText, ...buttonText }}>{obj.value}</p>
      </button>
    );
  }
}
