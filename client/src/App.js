import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import InputControl from './components/InputControl'
import AllInputs from './components/requiredInput.json'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = AllInputs.inputs.reduce((a, v) => ({ ...a, [v.name]: '' }), {});
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  componentDidMount() {
    console.log(this.state);
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  logData = () => {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <form>
          <Header />
          {AllInputs.inputs.map((field, index) => (
            <InputControl
              key={index}
              name={field.name}
              type={field.type}
              label={field.label}
              checks={field.checks}
              onChange={this.onChangeHandler}
            />
          ))}
          <div className="submit-wrapper">
            <button type='submit'>submit</button>
            <button type='clear'>clear</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App