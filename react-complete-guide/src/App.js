import React, {
	Component
} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		people: [
			{ name: "Blake", age: 35 },
			{ name: "Stacey", age: 30 },
			{ name: "Tilly", age: 4 },
			{ name: "Penny", age: 63 }
		]
	}

	switchNameHandler = (newName) => {
		this.setState({
			people: [
				{ name: newName, age: 3 },
				{ name: "Stacey", age: 30 },
				{ name: "Tilly", age: 4 },
				{ name: "Penny", age: 78 }
			]
		})
	}

	nameChangeHandler = (event) => {
		this.setState({
			people: [
				{ name: "Blake", age: 33 },
				{ name: event.target.value, age: 30 },
				{ name: "Tilly", age: 4 },
				{ name: "Penny", age: 63 }
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

		return (<div className="App">
			<h1>Hello from React!</h1>
			<p>Wow this really works!</p>
			<button
				onClick={() => this.switchNameHandler('Moxi')}
				style={style}>
				Switch Name
			</button>
			<Person
				name={this.state.people[0].name}
				age={this.state.people[0].age} />
			<Person
				name={this.state.people[1].name}
				age={this.state.people[1].age} />
			<Person
				name={this.state.people[2].name}
				age={this.state.people[2].age}
				click={this.switchNameHandler.bind(this, 'Blakers')}
				change={this.nameChangeHandler}>
				Hobbies: barking
				</Person>
			<Person
				name={this.state.people[3].name}
				age={this.state.people[3].age}>
				Hobbies: peeing
				</Person>
		</div>
		);
	}
}

export default App;