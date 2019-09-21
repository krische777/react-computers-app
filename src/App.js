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
    const chosenComputer = this.data.find(computer => computer.name === event.target.value)
    console.log(chosenComputer)
    console.log({ chosenComputer })
    this.setState({ chosenComputer })
  }

  addComputer = () => {

    if (this.state) {
      //console.log(this.state.chosenCar)
      this.props.dispatch({
        type: 'ADD_CAR',
        payload: this.state.chosenComputer
      })
    }
  }

  render() {

    return (<div className="App">
      <div>
        {this.props.addedComputers
          .map(computer =>
            <ModelDetails
              key={computer.name}
              name={computer.name}
              manufacturer={computer.manufacturer}
              year={computer.year}
              origin={computer.origin} />)
        }
      </div>

      <select onChange={this.updateSelection}
        value={this.state.chosenComputer? this.state.chosenComputer.name : ""
        }>
        <option value={""}>-- pick a model --</option>

        {this.data.map(computer =>
          <option key={computer.name} value={computer.name}>
            {computer.name} ({computer.year})
    </option>)}

      </select>
      <button onClick={this.addComputer} >Add</button>

    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addedComputers: state
  }
}

export default connect(mapStateToProps)(App)



