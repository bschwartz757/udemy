import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent';
class App extends Component {
	state = {
		chars: [],
		word: ''
	}
	addCharHandler = (value) => {
		if (!value) return
		const cloned = { ...this.state }
		const newValue = value.split('').pop()
		cloned.chars.push({ id: cloned.chars.length, value: newValue })
		cloned.word = cloned.chars.map(char => char.value).join('')
		console.log(`cloned: ${JSON.stringify(cloned, null, 2)}`)
		this.setState(cloned)
	}
	removeCharHandler = (id) => {
		const cloned = { ...this.state }
		cloned.chars.splice(id, 1)
		cloned.word = cloned.chars.map(char => char.value).join('')
		console.log(`cloned: ${JSON.stringify(cloned, null, 2)}`)
		this.setState(cloned)
	}
	render() {
		const charList = <div>
			{
				(this.state.chars.length) ?
					this.state.chars.map((char) => {
						return <CharComponent
							value={char.value}
							click={() => this.removeCharHandler(char.id)}
							key={char.id}
						/>
					})
					: <span>No results to display</span>
			}
		</div>
		const validationState = (this.state.chars.length >= 5) ? 'Text long enough' : 'Text too short'
		return (
			<div className="App">
				<input type="text" onChange={(event) => this.addCharHandler(event.target.value)} defaultValue={this.state.word} />
				<Validation isValid={validationState} />
				{charList}
			</div>
		);
	}
}
export default App;