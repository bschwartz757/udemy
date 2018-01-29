import React, {
	Component
} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		people: [
			{ id: 'asdf', name: "Blake", age: 35 },
			{ id: 'Fvc', name: "Stacey", age: 30 },
			{ id: 'qtqert', name: "Tilly", age: 4 },
			{ id: 'poiu', name: "Penny", age: 63 }
		],
		showPeople: false
	}

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.people.findIndex(p => {
			return p.id === id
		})

		// spread operator here returns a copy of the original person item
		// equivalent to this.state.people[personIndex].slice()
		// this is necessary to avoid mutating the original person array
		const person = {
			...this.state.people[personIndex]
		}

		person.name = event.target.value

		// gets a new copy of the original state array
		const people = [...this.state.people]
		people[personIndex] = person

		this.setState({
			people: people
		})
	}

	deletePersonHandler = (personIndex) => {
		// gets a new copy of the original state array		
		const people = [...this.state.people]
		people.splice(personIndex, 1)
		this.setState({ people: people })
	}

	toggleListHandler = () => {
		const show = this.state.showPeople
		this.setState({ showPeople: !show })
	}

	render() {

		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

		let showList = (this.state.showPeople) ?
			<div>
				{this.state.people.map((person, index) => {
					return <Person
						click={() => this.deletePersonHandler(index)}
						name={person.name}
						age={person.age}
						key={person.id}
						change={(event) => this.nameChangeHandler(event, person.id)}
					/>
				})}
			</div>
			: null

		return (
			<div className="App">
				<h1>Hello from React!</h1>
				<p>Wow this really works!</p>
				<button
					onClick={this.toggleListHandler}
					style={style}>
					Toggle List
			</button>
				{showList}
			</div>
		);
	}
}

export default App;