import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  tomato: 0.75,
  bacon: 1.25,
  cheese: 1,
  meat: 1.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      tomato: 0
    },
    totalPrice: 4,
    orderEnabled: false
  }

  updateOrderState(ingredients) {
    const sum = Object.values(ingredients)
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    this.setState({ orderEnabled: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedIngredients[type] + 1
    const newTotal = this.state.totalPrice + INGREDIENT_PRICES[type]
    this.setState({
      totalPrice: newTotal,
      ingredients: updatedIngredients
    })
    this.updateOrderState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedIngredients[type] - 1
    const newTotal = this.state.totalPrice - INGREDIENT_PRICES[type]
    this.setState({
      totalPrice: newTotal,
      ingredients: updatedIngredients
    })
    this.updateOrderState(updatedIngredients)
  }

  render() {
    const disabledButtons = {}
    for (let key in this.state.ingredients) {
      disabledButtons[key] = !this.state.ingredients[key]
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledButtons}
          price={this.state.totalPrice}
          orderable={this.state.orderEnabled} />
      </Aux>
    )
  }

}

export default BurgerBuilder