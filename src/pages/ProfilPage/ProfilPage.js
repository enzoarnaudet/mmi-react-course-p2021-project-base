import React from 'react'
import styles from './ProfilPage.module.css'
import Page from '../../components/Page'
import Text from '../../components/Text'
import Background from '../../components/Background/Background'

const ProfilPage = () => {
    return (
        <Page>
            <Background/>
    <div className={styles.section}>
             <div className={styles.contenuleft}> 

             </div>

                
             <div className={styles.contenumiddle}>
                    <div className={styles.contenumiddleleft}>
                
                        <img className={styles.profil} src={'flyzen.png'} alt="test"/>
                        <Text size= 'small' typography= 'medium' tag='p'>
                        <p className={styles.followers}><Text size= 'small' typography= 'bold' tag='p'>13</Text> tracks <Text size= 'small' typography= 'bold' tag='p'>4243 </Text>  followers</p>
                        </Text>
                        <Text size= 'small' typography= 'medium' tag='p'>
                        <p className={styles.description}>Je suis un beatmaker français <br></br>provenant de bordeaux.<br></br>Ma passion c’est la musique<br></br> ainsi que le rap.<br></br>Je fais différents genre de rap, <br></br>de la drill, du two step, et de <br></br>l’emo rap.</p>
                        </Text>
                    </div>
             
                    <div className={styles.contenumiddleright}>

                        <div>
                        <Text size= 'large' typography= 'bold' tag='h1'>
                            <h1 className={styles.h1}>FLYZEN Beats</h1>
                            </Text>
                        </div>                            
                            <ul className={styles.ul}>
                            <Text size= 'small' typography= 'bold' tag='h1'>
                                <li className={styles.puces}>Titres</li>
                                    <li className={styles.puces}>Albums</li>
                                    <li className={styles.puces}>Playlists</li>
                                    <li className={styles.puces}>Partages</li>
                                    </Text>
                                </ul>
                        
                                             <div>
                                                 <img className={styles.logo} src={'/cover/introspection.png'} alt="test"/>
                                                 <Text size= 'small' typography= 'medium' tag='p'>
                                                  <p className={styles.p}><Text size= 'xsmall' typography= 'medium' tag='p'>Smoke Break</Text> - Introspection </p>
                                                  </Text>
                                             </div>
                                             <div>
                                                 <img className={styles.logo} src={'/cover/introspection.png'} alt="test" />
                                                 <Text size= 'small' typography= 'medium' tag='p'>
                                                 <p className={styles.p}><Text size= 'xsmall' typography= 'medium' tag='p'>A Rainy Day </Text>- Introspection </p>
                                                 </Text>
                                             </div>
                                             <div>
                                                 <img className={styles.logo} src={'/cover/dystopia.png'} alt="test" />
                                                 <Text size= 'small' typography= 'medium' tag='p'>
                                                 <p className={styles.p}><Text size= 'xsmall' typography= 'medium' tag='p'>The Sanctuary </Text>- Feel </p>
                                                  </Text>
                                             </div>
                                             <div>
                                                 <img className={styles.logo} src={'/cover/dystopia.png'}  alt="test"/>
                                                 <Text size= 'small' typography= 'medium' tag='p'>
                                                 <p className={styles.p}><Text size= 'xsmall' typography= 'medium' tag='p'>Black Coffin </Text>- Feel </p>
                                                 </Text>
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