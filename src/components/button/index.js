import React, { Component } from 'react';
import styles from './styles';

export default class Button extends Component {
  static defaultProps = {
    length: 0
  };
  render() {
    let { value, length, style, secondary } = this.props;
    secondary = secondary ? styles.secondary : {};
    return (
      <button style={{ ...styles.button, ...style, ...secondary }}>
        <p>{value}</p>
      </button>
    );
  }
}
