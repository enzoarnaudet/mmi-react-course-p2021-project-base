import React from 'react'
import styles from './PlaylistPage.module.css'
import Page from '../../components/Page'
import Background from '../../components/Background/Background'

const PlaylistPage = () => {
    return (

      <Page>
        <Background/>
      <div className="playlist-page">
        <h1 className={styles.h1}>Mes Playlists</h1>
      </div>
      </Page>
    )
  }
  

  export default PlaylistPage