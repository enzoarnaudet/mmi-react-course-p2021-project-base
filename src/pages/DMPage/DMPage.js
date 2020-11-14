import React from 'react'

import Page from '../../components/Page'

import styles from './DMPage.module.css'

import Text from '../../components/Text'
//import Contenu from '../../components/Contenu/Contenu'
import Social from '../../components/Social/Social'
import Input from '../../components/Input'
import Background from '../../components/Background/Background'




const DMPage = () => {
  return (
      <Page>
          <Background/>
          
  <div className={styles.section}>
           <div className={styles.contenuleft}> 

           </div>

              
           <div className={styles.contenumiddle}>
                  <div className={styles.contenumiddleleft}>
                  <div className={styles.social}>
                  <Social></Social>
            
           
</div>
                    
                  </div>
           
                  <div className={styles.contenumiddleright}>

                      <div className={styles.headerMessage}>
                      <Text size= 'large' typography= 'bold' tag='h1'>
                          <p>Menz</p></Text>
                          <Text size= 'small' typography= 'medium' tag='h1'>
                          <p>En Ligne</p>
                          </Text>
                      </div> 

                            <div>
                               <p className={styles.msg}>Yo mec je cherche une prod pour un de mes nouveaux sons, t'en as une à me proposer?</p>
                               <p className={styles.msg1}> <img className={styles.cover} src={'cover/dystopia.png'}/></p>
                               <p className={styles.msg1}>Ecoute celle-ci et dis moi ce que tu en pense!</p>
                               <p className={styles.msg}>Ducoup je viens d'écouter c'est vraiment lourd! Tu peux me l'envoyer ?</p>
                               <p className={styles.msg1}>Ok je te l'envoi pour que tu puisse la télécharger...</p>


                            </div>







                                                  <div> 
                                                        <form className={styles.taille}>
                                                        <Input dark  type="text" placeholder="Écris ton message..." >
                                                        </Input>
                                                        </form>
                                                    </div>
                                                                           

                  </div>
           </div>
           <div className={styles.contenuright}> 

           </div>
  </div>
      </Page>
      
      
  )
}
  
  export default DMPage
  