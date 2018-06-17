import React from 'react'
import styles from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Meat', type: 'meat' },
  { label: 'Tomato', type: 'tomato' },
]

const buildControls = (props) => {

  return (
    <div className={styles.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(el => (
        <BuildControl
          key={el.label}
          label={el.label}
          add={() => props.addIngredient(el.type)}
          remove={() => props.removeIngredient(el.type)}
          disabled={props.disabled[el.type]} />
      ))}
      <button
        className={styles.OrderButton}
        disabled={!props.orderable}
        onClick={props.confirm}>Order Now!
      </button>
    </div>
  )

}

export default buildControls