import React, { Component } from 'react'

export class MultipleChoices extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: []
        }
    }
    componentDidMount() {
        console.log(this.state.selected)
    }
    onCheck = (e) => {
        let filteredItem = this.state.selected.filter(item => item === e.target.value);
        let filteredItems = this.state.selected.filter(item => item !== e.target.value);

        // console.log(filteredItem);
        // console.log(filteredItems);
        console.log(e.target.checked);

        if (filteredItem.length === 0 || filteredItems.length === 0) {
            this.state.selected.push(e.target.value)
        }
        if (filteredItem !== 0 && filteredItem[0] === e.target.value) {
            this.setState({ selected: filteredItems })
        }
        console.log(this.state.selected);
    }
    render() {
        return (
            <div className="checkbox-wrapper">
                <span>Output</span>
                {this.state.selected[0]}
                {this.props.checks.map((item, i) => (
                    <div key={i}>
                        <input
                            type="checkbox"
                            name={item}
                            onChange={this.onCheck}
                            placeholder="Your answer"
                            value={item}
                        />
                        <label>{item}</label>
                    </div>
                ))}
            </div>
        )
    }

}

export default MultipleChoices