import React from 'react'
import Page from '../../components/Page'
import styles from './DiscoverPage.module.css'


const DiscoverPage = () => {
  return (
    <Page>
      <div className="discover-page">
        <h1> Nouveautés</h1>
       
        <div>
          <img className={styles.logo} src={'dystopia.png'} />
          Dystopia - Flyzen Beats 
        </div>

        <div>
          <img className={styles.logo} src={'introspection.png'} />
          Introspection - Flyzen Beats
        </div>

          <div>
           <img className={styles.logo} src={'sku.png'} />
           Sku - Travis Scott
          </div>

          <div>
            <img className={styles.logo} src={'pablo.png'} />
            Sad! - xxxtentacion
          </div>

          <div>
             <img className={styles.logo} src={'sad.png'} />
             Sad! - xxxtentacion
          </div>

          <div>
            <img className={styles.logo} src={'mexico.png'} />
            Mexico - DA UZI
          </div>

          <div>
            <img className={styles.logo} src={'logo.png'} />
            Lounge - Menz
          </div>

          <div>
            <img className={styles.logo} src={'mansland.png'} />
            MAN'S LAND - And the beast
          </div>

          <div>
            <img className={styles.logo} src={'logo.png'} />
            Apocalypse - Menz
          </div>

          <div>
            <img className={styles.logo} src={'rage.png'} />
            Turbo S - 7jaws
          </div>
      </div>
      <h1>Genres</h1>
    </Page>
  )
}

export default DiscoverPage
