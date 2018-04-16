import React from 'react'
import styles from './Burger.css'
import Ingredients from './Ingredients/Ingredients'

const burger = (props) => {

  let ingredientList = []
  for (let [k, v] of Object.entries(props.ingredients)) {
    while (v !== 0) {
      ingredientList.push(<Ingredients key={k + v} type={k} />)
      v--
    }
  }

  if (!ingredientList.length) {
    ingredientList = <p>Please add ingredients</p>
  }

  return (
    <div className={styles.Burger}>
      <Ingredients type="bun-top" />
      {ingredientList}
      <Ingredients type="bun-bottom" />
    </div>
  )
}

export default burger