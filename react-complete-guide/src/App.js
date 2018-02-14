import React, {
	Component
} from 'react';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

		let showList
		let btnClass = ''

		const rand = Math.random()
		if (rand > 0.7) {
			throw new Error('foobar')
		}

		if (this.state.showPeople) {
			showList = <div>
				{this.state.people.map((person, index) => {
					return <ErrorBoundary key={person.id}>
						<Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							change={(event) => this.nameChangeHandler(event, person.id)}
						/>
					</ErrorBoundary>
				})}
			</div>
			btnClass = styles.Red
		}

		const pClasses = []
		if (this.state.people.length <= 2) {
			pClasses.push(styles.red)
		}
		if (this.state.people.length <= 1) {
			pClasses.push(styles.bold)
		}

		return (
			<div className={styles.App}>
				<h1>Hello from React!</h1>
				<p className={pClasses.join(' ')}>Wow this really works!</p>
				<button
					className={btnClass}
					onClick={this.toggleListHandler}>
					Toggle List
			</button>
				{showList}
			</div>
		);
	}
}

export default App;