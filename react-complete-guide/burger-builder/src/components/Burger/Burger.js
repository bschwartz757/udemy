import React from 'react'
import styles from './Burger.css'
import Ingredients from './Ingredients/Ingredients'

const burger = (props) => {
  console.log(props)
  const ingredientList = Object.keys(props.ingredients)
    .map(ing => {
      return [...Array(props.ingredients[ing])]
        .map(v, t => { // eslint-disable-line
          console.log(v)
          return <Ingredients key={ing + t} type={ing} />
        })
    })

  return (
    <div className={styles.Burger}>
      <Ingredients type="bun-top" />
      {ingredientList}
      <Ingredients type="bun-bottom" />
    </div>
  )
}

export default burger