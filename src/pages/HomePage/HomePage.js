import React from 'react'
import Page from '../../components/Page'

import styles from './Artist.module.css'

const HomePage = () => {
  return (
    <Page>
      <div className={styles.page}>
        <h1 className={styles.title}>Home</h1>
      </div>
    </Page>
  )
}

export default HomePage
