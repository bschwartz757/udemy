import React from 'react';
import Person from './Person/Person'

const people = (props) => props.people.map(
	(person, index) => {
		return <Person
			click={() => props.click(index)}
			key={person.id}
			name={person.name}
			age={person.age}
			change={(event) => props.change(event, person.id)}
		/>
	})

export default people