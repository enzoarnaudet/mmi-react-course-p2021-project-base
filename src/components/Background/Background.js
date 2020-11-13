import React, { useContext } from 'react'
import {BackgroundContext} from '../../App.js'
import styles from './Background.module.css'
const Background = () => {
const context = useContext(BackgroundContext)
    return (
        
        <div className={styles.cover}>
        <div className={styles.carre}></div>
        <img className={styles.image} src={context.src}/>
        </div>
    )
  }
  export default Background