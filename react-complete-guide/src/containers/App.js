import React, {
	Component
} from 'react';
import styles from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

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

		let peopleList

		if (this.state.showPeople) {
			peopleList = <People
				people={this.state.people}
				click={this.deletePersonHandler}
				change={this.nameChangeHandler} />
		}

		return (
			<div className={styles.App}>
				<Cockpit
					showPeople={this.state.showPeople}
					people={this.state.people}
					click={this.toggleListHandler} />
				{peopleList}
			</div>
		);
	}
}

export default App;