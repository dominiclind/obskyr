import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Circle } from 'react-progressbar.js';

import './ResultListItem.css';


import player from '../stores/player';

@observer
class ResultListItem extends Component {


  onPlay() {
    const { track } = this.props;
    player.play(track);
  }
  render() {
    const { currentTrack, progress } = player;
    const { track } = this.props;
    const playing = currentTrack.id === track.id;
    return (
      <div
        className={`result-list-item ${playing ? 'playing' : ''}`}
        onClick={() => this.onPlay()}
      >
        <div className="track-thumb" style={{backgroundImage: `url(${track.thumb})`}} />
        <p className="track-title">{track.title}</p>
        <b className="track-source">{track.source}</b>
        { playing ? (
          <div className="track-progress">
            <Circle
              progress={progress}
              text={''}
              options={{
                strokeWidth: 10,
                color: 'red',
                trailColor: 'rgba(0,0,0,.1)',
                trailWidth: 10,
                svgStyle: null
              }}
              initialAnimate={false}
              containerClassName={'.progressbar'}
            />
          </div>
        ) : null}
    </div>
    );
  }
}

export default ResultListItem;
