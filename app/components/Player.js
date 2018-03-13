import React, { Component } from 'react';
import styles from './Player.css';
import { observer } from 'mobx-react';

import player from '../stores/player';

@observer
export default class Player extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { currentTrack, progress } = player;

    console.log('render player');

    return (
      <div className="player">
        <b>{currentTrack.title}</b>
      </div>
    );
  }
}
