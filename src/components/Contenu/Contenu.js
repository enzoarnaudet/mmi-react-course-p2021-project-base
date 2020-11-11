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
                <div className={styles.contenu1}>

                    <img className={styles.cover} src={'cover/dystopia.png'}/>
                    <li><button >Flyzen Beats - Dystopia</button></li>

                </div>

                <div className={styles.contenu2}>

                    <img className={styles.cover} src={'cover/600_eib4vdcxsaca5uv.jpg'}/>
                    <li><button >Menz Prod - Zgrinch</button></li>
                    
                </div>

                <div className={styles.contenu3}>

                    <img className={styles.cover} src={'cover/introspection.png'}/>
                    <li><button >Pejiite - Ninofap</button></li>

                </div>
                
            </ul>   
        </div>

        <div className={styles.contenuright}> 

        </div>

</div>
    )
  }
  
  export default Contenu