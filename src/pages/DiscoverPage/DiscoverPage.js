import React from 'react'
import Page from '../../components/Page'
import styles from './DiscoverPage.module.css'


const DiscoverPage = () => {
  return (
    <Page>
      <div className={styles.section}>
      
      <div className={styles.contenuleft}> 
      </div>


      <div className={styles.contenumiddle}>
      <h1 className={styles.h1}> Nouveautés</h1>
      <div className={styles.page}>
        
       
        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/dystopia.png'} />
          <p className={styles.p}>Dystopia<br></br>Flyzen Beats </p>
        </div>

        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/introspection.png'} />
         <p className={styles.p}>Introspection<br></br>Flyzen Beats</p> 
        </div>

          <div className={styles.music}>
           <img className={styles.logo} src={'/cover/sku.png'} />
           <p className={styles.p}>Goosebumps<br></br>Travis Scott</p> 
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/pablo.png'} />
            <p className={styles.p}>Fade<br></br>Kanye West</p> 
          </div>

          <div className={styles.music}> 
             <img className={styles.logo} src={'/cover/sad.png'} />
             <p className={styles.p}>Sad!<br></br>xxxtentacion</p>   
          </div>
          </div>
          <div className={styles.page2}>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/mexico.png'} />
            <p className={styles.p}>Mexico<br></br>DA UZI</p>  
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/lounge.png'} />
            <p className={styles.p}>Lounge<br></br>Menz</p> 
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/mansland.png'} />
            <p className={styles.p}>MAN'S LAND<br></br>And the beast</p> 
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/apocalypse.png'} />
            <p className={styles.p}>Apocalypse<br></br>Menz</p>  
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/rage.png'} />
            <p className={styles.p}>Turbo S<br></br>7jaws</p> 
          </div>
      </div>




      <h1 className={styles.h1}>Genres</h1>



      <div className={styles.page2}>
    
        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/drill.jpg'} />
          <p className={styles.p}>DRILL</p>
        </div>

        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/chill.png'} />
         <p className={styles.p}>CHILL</p> 
        </div>

          <div className={styles.music}>
           <img className={styles.logo} src={'/cover/emo.png'} />
           <p className={styles.p}>EMO</p> 
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/fr.png'} />
            <p className={styles.p}>RAP FR</p> 
          </div>

          <div className={styles.music}>
             <img className={styles.logo} src={'/cover/hardstyle.png'} />
             <p className={styles.p}>HARDSTYLE</p>   
          </div>
          </div>
          <div className={styles.page2}>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/instrumentales.png'} />
            <p className={styles.p}>INSTRUMENTALES</p>  
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/lofi.png'} />
            <p className={styles.p}>LOFI</p> 
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/pop-punk.png'} />
            <p className={styles.p}>POP-PUNK</p> 
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/synthwave.png'} />
            <p className={styles.p}>SYNTHWAVE</p>  
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/us.png'} />
            <p className={styles.p}>US</p> 
          </div>
          </div>
      </div>
      <div className={styles.contenuright}> 

      </div>
      </div>



    </Page>
  )
}

export default DiscoverPage
