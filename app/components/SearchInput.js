import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  onSearch() {
    if (this.props.onSearch && this.state.search.length > 3) {
      this.props.onSearch(this.state.search);
      this.setState({ search: '' });
    }
  }

  render() {
    return (
      <form className="search-form">
        <input
          value={this.state.search}
          type="text" onChange={(e) => this.setState({ search: e.target.value })}
        />
        <button onClick={() => this.onSearch()}>search</button>
      </form>
    );
  }
}

export default SearchInput;
