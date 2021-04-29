import React, { Component } from 'react';

class SearchBar extends Component {
  handleInput = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" className="form-search form-control" onChange={this.handleInput} />
      </div>
    );
  }
}

export default SearchBar;
