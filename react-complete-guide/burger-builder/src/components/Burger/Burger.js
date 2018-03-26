import React from 'react'
import styles from './Burger.css'
import Ingredients from './Ingredients/Ingredients'

const burger = (props) => {
  return (
    <div className={styles.Burger}>
      <Ingredients type="bun-top" />
      <Ingredients type="cheese" />
      <Ingredients type="meat" />
      <Ingredients type="bun-bottom" />
    </div>
  )
}

export default burger