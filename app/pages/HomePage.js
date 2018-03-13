import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './HomePage.css';
import Player from '../components/Player';
import SearchInput from '../components/SearchInput';
import ResultList from '../components/ResultList';
import { search } from '../utils/api';
import { stream } from '../utils/soundcloud';
import { play } from '../utils/youtube';

import api from '../stores/api';
import player from '../stores/player';

@observer
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      results: [],
      playing: false
    };
  }

  onSearch(query) {
    api.search(query);
  }
  render() {
    const { fetching, results } = api;
    const { playing } = player;
    //const playing = false;
    return (
      <div className={`container ${playing ? 'playing' : ''}`}>
        <SearchInput onSearch={(query) => this.onSearch(query) }/>
        <div className="search-and-list">
          <ResultList results={results} />
        </div>
        <div className="player-wrap">
          <Player />
        </div>
      </div>
    );
  }
}

export default HomePage;
