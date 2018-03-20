import React, { PureComponent } from 'react';
import Person from './Person/Person'

class People extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[People.js] inside constructor', props)
  }

  componentWillMount() {
    console.log('[People.js] inside componentWillMount')
  }

  componentDidMount() {
    console.log('[People.js] inside componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update People.js] inside componentWillReceiveProps', nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update People.js] inside shouldComponentUpdate', nextProps, nextState)
  //   return nextProps.people !== this.props.people ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.click !== this.props.click
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update People.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[Update People.js] inside componentDidUpdate')
  }

  render() {
    console.log('[People.js] inside render')
    return this.props.people.map(
      (person, index) => {
        return <Person
          click={() => this.props.click(index)}
          key={person.id}
          name={person.name}
          age={person.age}
          change={(event) => this.props.change(event, person.id)}
        />
      })
  }

}

export default People