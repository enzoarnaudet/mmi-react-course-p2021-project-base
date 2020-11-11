import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import styles from './Contenu.module.css'
import MenuItem from '../Menu/MenuItem'

const Contenu = () => {
    return (
  
<div className={styles.section}>

        <div className={styles.contenuleft}> 

        </div>
        
        <div className={styles.contenumiddle}>
             <ul>
                <div className={styles.contenumiddle}>
                    <img className={styles.cover} src={''} />
                    <li><button >Flyzen Beats - Dystopia</button></li>
                </div>

             <li><button >Menz Prod - Zgrinch</button></li>


             <li><button >Pejiite - Ninofap</button></li>


            </ul>   
        </div>

        <div className={styles.contenuright}> 

        </div>

</div>
    )
  }
  
  export default Contenu