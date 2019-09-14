import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './components/ModelDetails';


class App extends React.Component {

  data = [
    {
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    {
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      name: "Commodore 64",
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  ]
  state = {
    value: "",
  }
  updateSelection = (event) => {
    const chosenCar = this.data.find(car => car.name === event.target.value)
    console.log(chosenCar)
    console.log({ chosenCar })
    this.setState({ chosenCar })
  }

  addCar = () => {

    if (this.state) {
      //console.log(this.state.chosenCar)
      this.props.dispatch({
        type: 'ADD_CAR',
        payload: this.state.chosenCar
      })
    }
  }

  render() {

    return (<div className="App">
      <div>
        {this.props.addedCars
          .map(car =>
            <ModelDetails
              key={car.name}
              name={car.name}
              manufacturer={car.manufacturer}
              year={car.year}
              origin={car.origin} />)
        }
      </div>

      <select onChange={this.updateSelection}
        value={this.state.chosenCar ? this.state.chosenCar.name : ""
        }>
        <option value={""}>-- pick a model --</option>

        {this.data.map(car =>
          <option key={car.name} value={car.name}>
            {car.name} ({car.year})
    </option>)}

      </select>
      <button onClick={this.addCar} >Add</button>

    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addedCars: state
  }
}

export default connect(mapStateToProps)(App)



