import React from 'react'
import styles from './Cockpit.css'
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

  const personClasses = []
  let btnClass = styles.Button

  if (props.showPeople) {
    btnClass = [styles.Button, styles.Red].join(' ')
  }

  if (props.people.length <= 2) {
    personClasses.push(styles.red)
  }
  if (props.people.length <= 1) {
    personClasses.push(styles.bold)
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={personClasses.join(' ')}>Wow this really works!</p>
      <button
        className={btnClass}
        onClick={props.click}>
        Toggle List
      </button>
    </Aux>
  )
}

export default cockpit