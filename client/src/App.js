import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import InputControl from './components/InputControl'
import AllInputs from './components/requiredInput.json'
import axios from 'axios'


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
  setValue = (element, value) => {
    this.setState({ [element]: value })
  }
  onSubmit = (e) => {
    e.preventDefault();
    axios.post('/form-data', this.state)
      .then(res => { console.log(res.data) })
      .catch(err => { console.log(err.message) })

  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <Header />
          {AllInputs.inputs.map((field, index) => (
            <InputControl
              key={index}
              name={field.name}
              type={field.type}
              label={field.label}
              checks={field.checks}
              onChange={this.onChangeHandler}
              setValue={this.setValue}
            />
          ))}
          <div className="submit-wrapper">
            <button type='submit'>submit</button>
            <button type='clear'>clear</button>
          </div>
        </form>
        <div className="submit-wrapper bottom">
          <span>© 2022</span>
          <span>All Rights Reserved</span>
          <span>County Government of Busia</span>
        </div>
      </div>
    )
  }
}

export default App