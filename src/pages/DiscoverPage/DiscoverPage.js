import React from 'react'
import Page from '../../components/Page'
import styles from './DiscoverPage.module.css'
import Text from '../../components/Text'
import Social from '../../components/Social/Social'


const DiscoverPage = () => {
  return (
    <Page>
      <div className={styles.section}>
      
      <div className={styles.contenuleft}> 
      </div>


      <div className={styles.contenumiddle}>
      <Text size= 'xlarge' typography= 'bold' tag='h1'>
       Nouveautés   
        </Text>
      <div className={styles.page}>
        
       
        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/dystopia.png'} />
          <Text size= 'small' typography= 'bold' tag='p'>
          <p>Dystopia<br></br>Flyzen Beats </p>
           </Text>
        </div>

        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/introspection.png'} />
          <Text size= 'small' typography= 'bold' tag='p'>
         <p className={styles.p}>Introspection<br></br>Flyzen Beats</p> 
         </Text>
        </div>

          <div className={styles.music}>
           <img className={styles.logo} src={'/cover/sku.png'} />
           <Text size= 'small' typography= 'bold' tag='p'>
           <p className={styles.p}>Goosebumps<br></br>Travis Scott</p>
            </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/pablo.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>Fade<br></br>Kanye West</p>
             </Text>
          </div>

          <div className={styles.music}> 
             <img className={styles.logo} src={'/cover/sad.png'} />
             <Text size= 'small' typography= 'bold' tag='p'>
             <p className={styles.p}>Sad!<br></br>xxxtentacion</p> 
             </Text>  
          </div>
          </div>
          <div className={styles.page2}>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/mexico.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>Mexico<br></br>DA UZI</p> 
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/lounge.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>Lounge<br></br>Menz</p>
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/mansland.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>And the beast<br></br>MAN'S LAND</p>
            </Text> 
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/apocalypse.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>Apocalypse<br></br>Menz</p> 
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/rage.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>Turbo S<br></br>7jaws</p>
             </Text>
          </div>
      </div>



      <Text size= 'xlarge' typography= 'bold' tag='h1'>
      Genres
      </Text>


      <div className={styles.page2}>
    
        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/drill.jpg'} />
          <Text size= 'small' typography= 'bold' tag='p'>
          <p className={styles.p}>DRILL</p>
          </Text>
        </div>

        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/chill.png'} />
          <Text size= 'small' typography= 'bold' tag='p'>
         <p className={styles.p}>CHILL</p> 
         </Text>
        </div>

          <div className={styles.music}>
           <img className={styles.logo} src={'/cover/emo.png'} />
           <Text size= 'small' typography= 'bold' tag='p'>
           <p className={styles.p}>EMO</p>
            </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/fr.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>RAP FR</p> 
            </Text>
          </div>

          <div className={styles.music}>
             <img className={styles.logo} src={'/cover/hardstyle.png'} />
             <Text size= 'small' typography= 'bold' tag='p'>
             <p className={styles.p}>HARDSTYLE</p>  
              </Text>
          </div>
          </div>
          <div className={styles.page2}>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/instrumentales.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>INSTRU</p> 
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/lofi.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>LOFI</p>
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/pop-punk.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>POP-PUNK</p> 
            </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/synthwave.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>SYNTHWAVE</p> 
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/us.png'} />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>US</p> 
            </Text>
          </div>
          </div>
      </div>
      <div className={styles.contenuright}> 
         <Social> 
          <div>
            
          </div>
         </Social> 
      </div>
      </div>



    </Page>
  )
}

export default DiscoverPage
