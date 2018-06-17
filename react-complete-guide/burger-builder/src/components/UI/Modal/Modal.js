import React from 'react';
import styles from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  const conditional = (props.show) ?
    {
      transform: 'translateY(0)',
      opacity: '1'
    } :
    {
      transform: 'translateY(-100vh)',
      opacity: '0'
    }
  return (
    <Aux>
      <Backdrop show={props.show} click={props.closeModal} />
      <div
        className={styles.Modal}
        style={conditional}>
        {props.children}
      </div>
    </Aux>
  )
}

export default modal;