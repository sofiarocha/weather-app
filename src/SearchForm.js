import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRefresh(`q=${this.state.city}`);
  };

  changeCity = event => {
    this.setState({
      city: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-row">
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                autoComplete="off"
                onChange={event => this.changeCity(event)}
              />
            </div>
            <div className="col-sm-2 align-self-end">
              <input
                type="submit"
                className="btn btn-secondary btn-sm"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
