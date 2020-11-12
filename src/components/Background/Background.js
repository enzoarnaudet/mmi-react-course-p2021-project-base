import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import styles from './Background.module.css'
import MenuItem from '../Menu/MenuItem'


const Background = () => {
    return (
  
<div className={styles.background}>

    <ul>
        <li><img className={styles.cover} src={'cover/dystopia.png'}/></li>
        <li><img className={styles.cover} src={'cover/600_eib4vdcxsaca5uv.jpg'}/></li>
        <li><img className={styles.cover} src={'cover/introspection.png'}/></li>
    </ul>
    
</div>
    )
  }
  
  export default Background