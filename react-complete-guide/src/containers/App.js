import React, {
  PureComponent
} from 'react';
import styles from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

// PureComponent checks for shallow differences when updating components (the same behavior as shouldComponentUpdate)
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props)
    this.state = {
      people: [
        { id: 'asdf', name: "Blake", age: 35 },
        { id: 'Fvc', name: "Stacey", age: 30 },
        { id: 'qtqert', name: "Tilly", age: 4 },
        { id: 'poiu', name: "Penny", age: 63 }
      ],
      showPeople: false
    }
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.people !== this.state.people ||
  //     nextState.showPeople !== this.state.showPeople
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[Update App.js] inside componentDidUpdate')
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
    console.log('[App.js] inside render()')
    let peopleList

    if (this.state.showPeople) {
      peopleList = <People
        people={this.state.people}
        click={this.deletePersonHandler}
        change={this.nameChangeHandler} />
    }

    return (
      <div className={styles.App}>
        <button onClick={() => { this.setState({ showPeople: true }) }}>Show People</button>
        <Cockpit
          appTitle={this.props.title}
          showPeople={this.state.showPeople}
          people={this.state.people}
          click={this.toggleListHandler} />
        {peopleList}
      </div>
    );
  }
}

export default App;