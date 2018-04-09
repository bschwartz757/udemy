import React from 'react'
import styles from './Burger.css'
import Ingredients from './Ingredients/Ingredients'

const burger = (props) => {
  // console.log(props)
  let ingredientList = Object.keys(props.ingredients)
    .map(ing => {
      return [...Array(props.ingredients[ing])]
        .map((v, t) => {
          return <Ingredients key={ing + t} type={ing} />
        })
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);

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