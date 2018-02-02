import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char';
class App extends Component {
	state = {
		userInput: ''
	}

	inputChangeHandler = (event) => {
		this.setState({ userInput: event.target.value })
	}

	removeCharHandler = (index) => {
		const text = this.state.userInput.split('')
		text.splice(index, 1)
		const newText = text.join('')
		this.setState({ userInput: newText })
	}

	render() {

		const charList = this.state.userInput.split('').map((char, index) => {
			return <Char
				value={char}
				click={() => this.removeCharHandler(index)}
				key={index}
			/>
		})

		return (
			<div className="App">
				<input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
				<Validation inputLength={this.state.userInput.length} />
				<div>
					{charList}
				</div>
			</div>
		);
	}
}
export default App;