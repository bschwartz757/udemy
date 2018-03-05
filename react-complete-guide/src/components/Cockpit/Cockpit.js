import React from 'react'
import styles from './Cockpit.css'

const cockpit = (props) => {

	const personClasses = []
	let btnClass = ''

	if (props.showPeople) {
		btnClass = styles.Red
	}

	if (props.people.length <= 2) {
		personClasses.push(styles.red)
	}
	if (props.people.length <= 1) {
		personClasses.push(styles.bold)
	}

	return (
		<div className={styles.Cockpit}>
			<h1>{props.appTitle}</h1>
			<p className={personClasses.join(' ')}>Wow this really works!</p>
			<button
				className={btnClass}
				onClick={props.click}>
				Toggle List
			</button>
		</div>
	)
}

export default cockpit