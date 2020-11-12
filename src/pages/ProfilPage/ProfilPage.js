import React from 'react'
import styles from './ProfilPage.module.css'
import Page from '../../components/Page'

const ProfilPage = () => {
    return (
        <Page>
    <div className={styles.section}>
             <div className={styles.contenuleft}> 

             </div>

                
             <div className={styles.contenumiddle}>
                    <div className={styles.contenumiddleleft}>
                
                        <img className={styles.profil} src={'flyzen.png'} />
                    
                        <p className={styles.abonne}>13 tracks 4243 followers</p>
                       
                        <p>Je suis un beatmaker français <br></br>provenant de bordeaux.<br></br>Ma passion c’est la musique ainsi que le rap.<br></br>Je fais différents genre de rap, de la drill, du two step, et de l’emo rap.</p>
                    
                    </div>
             
                    <div className={styles.contenumiddleright}>

                        <div>
                            <h1 className={styles.h1}>FLYZEN Beats</h1>
                        </div>                            
                            <ul>
                                <li className={styles.puces}>Titres</li>
                                    <li className={styles.puces}>Albums</li>
                                    <li className={styles.puces}>Playlists</li>
                                    <li className={styles.puces}>Partages</li>
                                </ul>
                        
                                             <div>
                                                 <img className={styles.logo} src={'/cover/dystopia.png'} />
                                                  <p className={styles.p}>Dystopia - Flyzen Beats </p>
                                             </div>
                                             <div>
                                                 <img className={styles.logo} src={'/cover/dystopia.png'} />
                                                 <p className={styles.p}>Dystopia - Flyzen Beats </p>
                                             </div>
                                             <div>
                                                 <img className={styles.logo} src={'/cover/dystopia.png'} />
                                                 <p className={styles.p}>Dystopia - Flyzen Beats </p> 
                                             </div>
                                             <div>
                                                 <img className={styles.logo} src={'/cover/dystopia.png'} />
                                                 <p className={styles.p}>Dystopia - Flyzen Beats </p>
                                             </div>

                    </div>
             </div>
             <div className={styles.contenuright}> 

             </div>
    </div>
        </Page>
        
        
    )
  }
  
  export default ProfilPage