import React from 'react'
import Page from '../../components/Page'
import styles from './DiscoverPage.module.css'


const DiscoverPage = () => {
  return (
    <Page>
      <h1 className={styles.h1}> Nouveautés</h1>
      <div className={styles.page}>
        
       
        <div>
          <img className={styles.logo} src={'/cover/dystopia.png'} />
          <p className={styles.p}>Dystopia - Flyzen Beats </p>
        </div>

        <div>
          <img className={styles.logo} src={'/cover/introspection.png'} />
         <p className={styles.p}>Introspection - Flyzen Beats</p> 
        </div>

          <div>
           <img className={styles.logo} src={'/cover/sku.png'} />
           <p className={styles.p}>Sku - Travis Scott</p> 
          </div>

          <div>
            <img className={styles.logo} src={'/cover/pablo.png'} />
            <p className={styles.p}>Sad! - xxxtentacion</p> 
          </div>

          <div>
             <img className={styles.logo} src={'/cover/sad.png'} />
             <p className={styles.p}>Sad! - xxxtentacion</p>   
          </div>
          </div>
          <div className={styles.page2}>

          <div>
            <img className={styles.logo} src={'/cover/mexico.png'} />
            <p className={styles.p}>Mexico - DA UZI</p>  
          </div>

          <div>
            <img className={styles.logo} src={'/cover/lounge.png'} />
            <p className={styles.p}>Lounge - Menz</p> 
          </div>

          <div>
            <img className={styles.logo} src={'/cover/mansland.png'} />
            <p className={styles.p}>MAN'S LAND - And the beast</p> 
          </div>

          <div>
            <img className={styles.logo} src={'/cover/apocalypse.png'} />
            <p className={styles.p}>Apocalypse - Menz</p>  
          </div>

          <div>
            <img className={styles.logo} src={'/cover/rage.png'} />
            <p className={styles.p}>Turbo S - 7jaws</p> 
          </div>
      </div>




      <h1 className={styles.h1}>Genres</h1>



      <div className={styles.page}>
    
        <div>
          <img className={styles.logo} src={'/cover/drill.jpg'} />
          <p className={styles.p}>DRILL</p>
        </div>

        <div>
          <img className={styles.logo} src={'/cover/drill.jpg'} />
         <p className={styles.p}>EMO RAP</p> 
        </div>

          <div>
           <img className={styles.logo} src={'/cover/drill.jpg'} />
           <p className={styles.p}>TWO-STEP</p> 
          </div>

          <div>
            <img className={styles.logo} src={'/cover/drill.jpg'} />
            <p className={styles.p}>RAP METAL</p> 
          </div>

          <div>
             <img className={styles.logo} src={'/cover/drill.jpg'} />
             <p className={styles.p}>RAPCORE</p>   
          </div>
          </div>
          <div className={styles.page2}>

          <div>
            <img className={styles.logo} src={'/cover/drill.jpg'} />
            <p className={styles.p}>POP RAP</p>  
          </div>

          <div>
            <img className={styles.logo} src={'/cover/drill.jpg'} />
            <p className={styles.p}>COUNTRY RAP</p> 
          </div>

          <div>
            <img className={styles.logo} src={'/cover/drill.jpg'} />
            <p className={styles.p}>CRUNK</p> 
          </div>

          <div>
            <img className={styles.logo} src={'/cover/drill.jpg'} />
            <p className={styles.p}>CLOUD RAP</p>  
          </div>

          <div>
            <img className={styles.logo} src={'/cover/drill.jpg'} />
            <p className={styles.p}>GANGSTA RAP</p> 
          </div>
      </div>
    </Page>
  )
}

export default DiscoverPage
