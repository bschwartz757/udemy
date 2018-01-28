import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

	state = {
		users: [
			{ name: "FooBazBob" }
		]
	}

	nameChangeHandler = (event) => {
		this.setState({
			users: [
				{ name: event.target.value },
			]
		})
	}

	render() {

		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

		return (
			<div className="App">
				<h1>Here's the stuff:</h1>
				<UserInput change={this.nameChangeHandler} style={style} />
				<UserOutput name={this.state.users[0].name} />
			</div>
		);
	}
}

export default App;
