import React from 'react'

import Page from '../../components/Page'

import styles from './DMPage.module.css'

import Text from '../../components/Text'
import Contenu from '../../components/Contenu/Contenu'
import Social from '../../components/Social/Social'
import Input from '../../components/Input'





const DMPage = () => {
  return (
      <Page>
  <div className={styles.section}>
           <div className={styles.contenuleft}> 

           </div>

              
           <div className={styles.contenumiddle}>
                  <div className={styles.contenumiddleleft}>
                  <div className={styles.section}>
            
           
</div>
                    
                  </div>
           
                  <div className={styles.contenumiddleright}>

                      <div className={styles.headerMessage}>
                      <Text size= 'large' typography= 'bold' tag='h1'>
                          <p>Menz</p></Text>
                          <Text size= 'small' typography= 'medium' tag='h1'>
                          <p>En Ligne</p>
                          </Text>
                         <div> 
                              <form>
                                    <Input type="text" />
                              </form>
                          </div>
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
  