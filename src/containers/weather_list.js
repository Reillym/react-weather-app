import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const tempData = cityData.list.map(weather => weather.main.temp);
    const pressureData = cityData.list.map(weather => weather.main.pressure);
    const humidityData = cityData.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord;
    return (
      <tr key={cityName}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={tempData} color="red" units="K"/></td>
        <td><Chart data={pressureData} color="orange" units="hPa" /></td>
        <td><Chart data={humidityData} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
