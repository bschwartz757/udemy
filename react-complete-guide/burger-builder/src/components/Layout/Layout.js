import React from 'react'
import Aux from '../../hoc/Aux'
import styles from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
)

export default Layout