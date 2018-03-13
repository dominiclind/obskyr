import React, { Component } from 'react';
import * as styles from './ResultList.css';

import ResultListItem from './ResultListItem';


class ResultList extends Component {
  render() {
    const { results = [] } = this.props;
    return (
      <div className="result-list">
        {results.map((track, i) => <ResultListItem key={i} track={track} />)}
      </div>
    );
  }
}

export default ResultList;
