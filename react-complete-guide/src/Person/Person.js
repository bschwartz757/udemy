import React from 'react'
import './Person.css'

const person = (props) => {
	return (
		<div className="person">
			<p onClick={props.click}>Hello, I'm {props.name} and I'm {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.change} defaultValue={props.name} />
		</div>
	)
}

export default person