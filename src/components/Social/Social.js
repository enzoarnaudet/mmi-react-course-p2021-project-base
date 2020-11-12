import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import styles from './Social.module.css'
import MenuItem from '../Menu/MenuItem'


const Social = () => {
    return (
  
<div className={styles.section}>
            
            <ul>
                <div className={styles.contenu}>

                    <img className={styles.cover} src={'42764_415.jpg'}/>
                    <li><button >Menz</button></li>

                </div>

                <div className={styles.contenu}>

                    <img className={styles.cover} src={'42765_415.jpg'}/>
                    <li><button >Pop Hip</button></li>
                    
                </div>

                <div className={styles.contenu}>

                    <img className={styles.cover} src={'large_c64c1a5b1a877c9c29c8c375775debbb.jpg'}/>
                    <li><button >Pablin</button></li>

                </div>

                <div className={styles.contenu}>
                    <img className={styles.cover} src={'large_abd452473d389e5cb99f13bf278ebf00.jpg'}/>
                    
                    <li><button >Pejiite</button></li> 
                    
                </div>

                <div className={styles.contenu}>
                    <img className={styles.cover} src={'channels4_profile.jpg'}/>
                    
                    <li><button >Ninofapnovember</button></li> 
                    
                </div>
            </ul> 
  
</div>
    )
  }
  
  export default Social