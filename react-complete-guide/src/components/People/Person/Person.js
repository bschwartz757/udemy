import React, { Component } from 'react'
import styles from './Person.css'

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
	}

	render() {
		console.log('[Person.js] inside render')
		return (
			<div className={styles.Person}>
				<p onClick={this.props.click}>Hello, I'm {this.props.name} and I'm {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.change} defaultValue={this.props.name} />
			</div>
		)
	}

}

export default Person