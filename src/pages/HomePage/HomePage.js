import React from 'react'
import Page from '../../components/Page'

import styles from './Artist.module.css'
import Contenu from '../../components/Contenu/Contenu'
import Menu from '../../components/Menu/Menu'

const HomePage = () => {
  return (
    <div>
    <Menu>
      
      <div className={styles.page}>
        <h1 className={styles.title}>Home</h1>

      </div>

    </Menu>
    <div className={styles.section}>
    <div className={styles.contenuleft}> 

    </div>

        <div className={styles.contenumiddle}>
            <Contenu>
              <div>
        
              </div>
            </Contenu>
        </div>
        <div className={styles.contenuright}> 

        </div>

        </div>
    </div>
  )
}

export default HomePage
