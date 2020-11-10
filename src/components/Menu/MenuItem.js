import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'



const MenuItem = (props) => {
   

  return (
        <li>
        <Link className={styles.menuItem} to={props.to} >{props.children}</Link>
      </li>
     
     
     )

}

export default MenuItem