import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onFormSubmit = event => {
    // prevents the browser from submitting the form normally
    event.preventDefault();
    // go fetch weather data with input value
    this.props.fetchWeather(this.state.input);
    // clear search bar
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            className="form-control"
            placeholder="get a five day forcast in your city"
            value={this.state.input}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
