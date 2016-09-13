import React, { Component } from 'react';
import styles from './Player.css';


export default class Player extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="player">
        <b>Alexander ström - Min favvolåt</b>
      </div>
    );
  }
}
