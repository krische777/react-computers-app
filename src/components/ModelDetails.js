import React from 'react'
import PropTypes from "prop-types";

export default class ModelDetails extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
  }

  render() {
    return <ul>
      <li key="name">Name: {this.props.name} </li>
      <li key="manufacturer">Manufacturer: {this.props.manufacturer}</li>
      <li key="year">Year: {this.props.year}</li>
      <li key="origin">Origin: {this.props.origin}</li>
    </ul>
  }
}