import React , { useContext } from 'react'
import { Link } from 'react-router-dom'
import Text from '../../components/Text'
import styles from './Contenu.module.css'
import {BackgroundContext} from '../../App.js'


const Contenu = () => {
const context = useContext(BackgroundContext)
const changeBackground = (src) => {
    context.changeSrc(src)
}
    return (
  
<div className={styles.section}>
        
             <ul>
                <div className={styles.contenu1}>

                    <img className={styles.cover} src={'cover/dystopia.png'}/>
                    <li><button onClick={ () => { changeBackground('cover/dystopia.png') }}>Flyzen Beats - Dystopia</button></li>     
                       

                </div>

                <div className={styles.contenu2}>

                    <img className={styles.cover} src={'cover/600_eib4vdcxsaca5uv.jpg'}/>
                    <li><button onClick={ () => { changeBackground('cover/600_eib4vdcxsaca5uv.jpg') }}>Menz Prod - Zgrinch</button></li>
                    
                </div>

                <div className={styles.playlist1}>

                    <img className={styles.playlistcover} src={'cover/drill.jpg'}/>
                    <li><button onClick={ () => { changeBackground('cover/drill.jpg') }}>Daily Mix Drill</button></li>

                </div>

                <div className={styles.contenu3}>
                    <img className={styles.cover} src={'cover/introspection.png'}/>
                    <div className={styles.contenuplaylist}>
                    <li><button onClick={ () => { changeBackground('cover/introspection.png') }}>Pejiite - Ninofap</button></li> 
                    </div>
                </div>
            </ul> 
</div>
    )
  }
  
  export default Contenu