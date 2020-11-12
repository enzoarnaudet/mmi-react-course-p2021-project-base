import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import styles from './Contenu.module.css'
import MenuItem from '../Menu/MenuItem'

const Contenu = () => {
    return (
  
<div className={styles.section}>
        
             <ul>
                <div className={styles.contenu1}>

                    <img className={styles.cover} src={'cover/dystopia.png'}/>
                    <li><button >Flyzen Beats - Dystopia</button></li>

                </div>

                <div className={styles.contenu2}>

                    <img className={styles.cover} src={'cover/600_eib4vdcxsaca5uv.jpg'}/>
                    <li><button >Menz Prod - Zgrinch</button></li>
                    
                </div>

                <div className={styles.playlist1}>

                    <img className={styles.playlistcover} src={'cover/drill.jpg'}/>
                    <li><button >Daily Mix Drill</button></li>

                </div>

                <div className={styles.contenu3}>
                    <img className={styles.cover} src={'cover/introspection.png'}/>
                    <div className={styles.contenuplaylist}>
                    <li><button >Pejiite - Ninofap</button></li>
                    
                    </div>
                </div>
            </ul> 
</div>
    )
  }
  
  export default Contenu