import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Ingredients.css'

class Ingredients extends Component {
  render() {
    let ingredient = (this.props.type === 'bun-bottom') ?
      <div className={styles.BunBottom}></div> :
      (this.props.type === 'bun-top') ?
        <div className={styles.BunTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div> :
        (this.props.type === 'meat') ?
          <div className={styles.Meat}></div> :
          (this.props.type === 'cheese') ?
            <div className={styles.Cheese}></div> :
            (this.props.type === 'bacon') ?
              <div className={styles.Bacon}></div> :
              (this.props.type === 'lettuce') ?
                <div className={styles.Lettuce}></div> :
                (this.props.type === 'tomato') ?
                  <div className={styles.Tomato}></div> :
                  null
    return ingredient
  }
}

Ingredients.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Ingredients