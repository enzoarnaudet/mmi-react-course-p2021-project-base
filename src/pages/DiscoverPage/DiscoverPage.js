import React , { useContext } from 'react'
import Page from '../../components/Page'
import styles from './DiscoverPage.module.css'
import Text from '../../components/Text'
import Social from '../../components/Social/Social'

import {BackgroundContext} from '../../App.js'
import Background from '../../components/Background/Background'


const DiscoverPage = () => {
const context = useContext(BackgroundContext)
const changeBackground = (src) => {
    context.changeSrc(src)
}
  return (
    <Page>
      <Background/>
      <div className={styles.section}>
      
      <div className={styles.contenuleft}> 
      </div>


      <div className={styles.contenumiddle}>
      <Text size= 'xlarge' typography= 'bold' tag='h1'>
       <p>Nouveautés </p> 
        </Text>
      <div className={styles.page}>
        
       
        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/dystopia.png'} alt="test" />
          <Text size= 'small' typography= 'bold' tag='p'>
          <button className={styles.p} onClick={ () => { changeBackground('/cover/dystopia.png') }}>Dystopia<br></br>Flyzen Beats</button>
           </Text>
        </div>

        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/introspection.png'} alt="test" />
          <Text size= 'small' typography= 'bold' tag='p'>
          <button className={styles.p} onClick={ () => { changeBackground('cover/introspection.png') }}>Introspection<br></br>Flyzen Beats</button>
         </Text>
        </div>

          <div className={styles.music}>
           <img className={styles.logo} src={'/cover/sku.png'} alt="test"/>
           <Text size= 'small' typography= 'bold' tag='p'>
           <button className={styles.p} onClick={ () => { changeBackground('cover/sku.png') }}> Goosebumps<br></br>Travis Scott</button>
            </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/pablo.png'} alt="test" />
            <Text size= 'small' typography= 'bold' tag='p'>
            <button className={styles.p} onClick={ () => { changeBackground('cover/pablo.png') }}>Fade<br></br>Kanye West</button>
             </Text>
          </div>

          <div className={styles.music}> 
             <img className={styles.logo} src={'/cover/sad.png'} alt="test"/>
             <Text size= 'small' typography= 'bold' tag='p'>
             <button className={styles.p} onClick={ () => { changeBackground('cover/sad.png') }}>Sad!<br></br>XXXTENTACION</button> 
             </Text>  
          </div>
          </div>
          <div className={styles.page2}>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/mexico.png'} alt="test"/>
            <Text size= 'small' typography= 'bold' tag='p'>
            <button className={styles.p} onClick={ () => { changeBackground('cover/mexico.png') }}>Mexico<br></br>DA UZI</button>
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/lounge.png'} alt="test"/>
            <Text size= 'small' typography= 'bold' tag='p'>
            <button className={styles.p} onClick={ () => { changeBackground('cover/lounge.png') }}>Lounge<br></br>Menz</button>
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/mansland.png'} alt="test"/>
            <Text size= 'small' typography= 'bold' tag='p'>
            <button className={styles.p} onClick={ () => { changeBackground('cover/mansland.png') }}>And the beast<br></br>MAN'S LAND</button>
            </Text> 
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/apocalypse.png'} alt="test"/>
            <Text size= 'small' typography= 'bold' tag='p'>
            <button className={styles.p} onClick={ () => { changeBackground('cover/apocalypse.png') }}>Apocalypse<br></br>Menz</button>
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/rage.png'} alt="test"/>
            <Text size= 'small' typography= 'bold' tag='p'>
            <button className={styles.p} onClick={ () => { changeBackground('cover/rage.png') }}>Turbo S<br></br>7jaws</button>
             </Text>
          </div>
      </div>



      <Text size= 'xlarge' typography= 'bold' tag='h1'>
      <p>Genres</p>
      </Text>


      <div className={styles.page2}>
    
        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/drill.jpg'} alt="test" />
          <Text size= 'small' typography= 'bold' tag='p'>
          <p className={styles.p}>DRILL</p>
          </Text>
        </div>

        <div className={styles.music}>
          <img className={styles.logo} src={'/cover/chill.png'} alt="test" />
          <Text size= 'small' typography= 'bold' tag='p'>
         <p className={styles.p}>CHILL</p> 
         </Text>
        </div>

          <div className={styles.music}>
           <img className={styles.logo} src={'/cover/emo.png'} alt="test" />
           <Text size= 'small' typography= 'bold' tag='p'>
           <p className={styles.p}>EMO</p>
            </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/fr.png'} alt="test"/>
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>RAP FR</p> 
            </Text>
          </div>

          <div className={styles.music}>
             <img className={styles.logo} src={'/cover/hardstyle.png'} alt="test"/>
             <Text size= 'small' typography= 'bold' tag='p'>
             <p className={styles.p}>HARDSTYLE</p>  
              </Text>
          </div>
          </div>
          <div className={styles.page2}>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/instrumentales.png'} alt="test"/>
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>INSTRU</p> 
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/lofi.png'} alt="test"/>
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>LOFI</p>
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/pop-punk.png'}alt="test" />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>POP-PUNK</p> 
            </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/synthwave.png'}alt="test" />
            <Text size= 'small' typography= 'bold' tag='p'>
            <p className={styles.p}>SYNTHWAVE</p> 
             </Text>
          </div>

          <div className={styles.music}>
            <img className={styles.logo} src={'/cover/us.png'} alt="test"/>
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
