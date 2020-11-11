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
    <Contenu>
      <div>
        
      </div>
    </Contenu>
    </div>
  )
}

export default HomePage
