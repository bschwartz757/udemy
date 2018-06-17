import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.entries(props.ingredients)
    .map(([k, v]) => {
      return (
        <li key={k}>
          <span style={{ textTransform: 'capitalize' }}>{k}: {v}</span>
        </li>
      )
    })

  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <p>Your burger has the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.total.toFixed(2)}</strong></p>
      <p>Confirm Order?</p>
      <Button btnType="Danger" click={props.cancel}>CANCEL</Button>
      <Button btnType="Success" click={props.continue}>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary;
