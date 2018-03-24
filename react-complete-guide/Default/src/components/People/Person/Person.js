import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount')
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount')
    if (this.props.position === 0) {
      this.inputElement.focus()
    }
  }

  render() {
    console.log('[Person.js] inside render')
    return (
      <Aux>
        <p onClick={this.props.click}>Hello, I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={input => { this.inputElement = input }}
          type="text"
          onChange={this.props.change}
          defaultValue={this.props.name} />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
}

export default withClass(Person, styles.Person)