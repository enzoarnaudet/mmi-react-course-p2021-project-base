import React from 'react'
import Page from '../../components/Page'
import styles from './DiscoverPage.module.css'


const DiscoverPage = () => {
  return (
    <Page>
      <h1> Nouveautés</h1>
      <div className={styles.page}>
        
       
        <div>
          <img className={styles.logo} src={'/cover/dystopia.png'} />
          Dystopia - Flyzen Beats 
        </div>

        <div>
          <img className={styles.logo} src={'/cover/introspection.png'} />
          Introspection - Flyzen Beats
        </div>

          <div>
           <img className={styles.logo} src={'/cover/sku.png'} />
           Sku - Travis Scott
          </div>

          <div>
            <img className={styles.logo} src={'/cover/pablo.png'} />
            Sad! - xxxtentacion
          </div>

          <div>
             <img className={styles.logo} src={'/cover/sad.png'} />
             Sad! - xxxtentacion
          </div>
          </div>
          <div className={styles.page2}>

          <div>
            <img className={styles.logo} src={'/cover/mexico.png'} />
            Mexico - DA UZI
          </div>

          <div>
            <img className={styles.logo} src={'/cover/dystopia.png'} />
            Lounge - Menz
          </div>

          <div>
            <img className={styles.logo} src={'/cover/mansland.png'} />
            MAN'S LAND - And the beast
          </div>

          <div>
            <img className={styles.logo} src={'/cover/dystopia.png'} />
            Apocalypse - Menz
          </div>

          <div>
            <img className={styles.logo} src={'/cover/rage.png'} />
            Turbo S - 7jaws
          </div>
      </div>
      <h1>Genres</h1>
    </Page>
  )
}

export default DiscoverPage
