import React , { useContext } from 'react'
import { Link } from 'react-router-dom'
import Text from '../../components/Text'
import styles from './Contenu.module.css'
import {BackgroundContext} from '../../App.js'
import {SpotifyContext} from '../SpotifyProvider'

const Contenu = () => {
const contextBackground = useContext(BackgroundContext)
const contextSpotify = useContext(SpotifyContext)
const playtrack = (src, uri) => {
    const data = {
        "device_id": contextSpotify.deviceId,
        "uris": [ uri ]
      }
  console.log(data)
      contextSpotify.spotifyApi.play(data)
        .then(function() {
          console.log('play')
        })

    contextBackground.changeSrc(src)
}
    return (
  
<div className={styles.section}>
        
             <ul>
                <div className={styles.contenu1}>

                    <img className={styles.cover} src={'cover/dystopia.png'}/>
                    <div className={styles.playertitre}>
                        <Text size= 'small' typography= 'bold' tag='p'>
                        <li><button className={styles.p} onClick={ () => { playtrack('cover/dystopia.png', "spotify:track:7FullO2NDkyvxLuxYVKINa") }}>Flyzen Beats - Dystopia</button></li>
                        <img className={styles.player} src={'player.png'}/>
                        </Text>
                        <Text size= 'small' typography= 'medium' tag='p'>
                        <p>#usrap  #drill  #popsmoke  #frenchdrill</p>
                        </Text>
                    </div>

                </div>

                <div className={styles.contenu2}>

                    <img className={styles.cover} src={'cover/600_eib4vdcxsaca5uv.jpg'}/>
                    <div className={styles.playertitre}>
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/600_eib4vdcxsaca5uv.jpg', "spotify:track:41LhQUkElADQ5YUbpYv2D0") }}>Menz Prod - Zgrinch</button></li>
                    <img className={styles.player} src={'player.png'}/>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <p>#usrap  #trap  #travisscott  #future</p>
                    </Text>
                    </div>
                </div>

                <div className={styles.playlist1}>

                    <img className={styles.playlistcover} src={'cover/drill.jpg'}/>
                    <div className={styles.contenuplaylist}>
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/drill.jpg', ) }}>Daily Mix Drill</button></li>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <div className={styles.contenutous}>
                    <div className={styles.contenuplaylistgauche}>
                    
                            <ul>
                                <li><p>1- Energizer - menz</p></li>
                                <li><p>2- Dystopia - Flyzen</p></li>
                                <li><p>3- Tour- Macky Gee</p></li>
                                <li><p>4- Ninofap - Pejiite</p></li>
                            </ul>
                    </div>
                    <div className={styles.contenuplaylistgauche}>
                        
                    <ul>
                                <li><p>1- Energizer - menz</p></li>
                                <li><p>2- Dystopia - Flyzen</p></li>
                                <li><p>3- Tour- Macky Gee</p></li>
                                <li><p>4- Ninofap - Pejiite</p></li>
                            </ul>
                    </div>
                    </div>
                    </Text>
                    </div>
                    
                    
                </div>

                <div className={styles.contenu3}>
                    <img className={styles.cover} src={'cover/introspection.png'}/>
                    <div className={styles.playertitre}>
                    
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/introspection.png', "spotify:track:48K2mX5Jx0wjRyFvupLRgg") }}>Pejiite - Ninofap</button></li>
                    <img className={styles.player} src={'player.png'}/>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <p>#usrap  #lofi  #xxxtentacion  #lilpeep</p>

                    </Text>
                    
                    </div>
                </div>
        <div className={styles.contenu1}>

                    <img className={styles.cover} src={'cover/sku.png'}/>
                    <div className={styles.playertitre}>
                        <Text size= 'small' typography= 'bold' tag='p'>
                        <li><button className={styles.p} onClick={ () => { playtrack('cover/sku.png') }}>Travis Scoot - Goosebumps</button></li>
                        <img className={styles.player} src={'player.png'}/>
                        </Text>
                        <Text size= 'small' typography= 'medium' tag='p'>
                        <p>#usrap  #drill  #popsmoke  #frenchdrill</p>
                        </Text>
                    </div>

                </div>

                <div className={styles.contenu2}>

                    <img className={styles.cover} src={'cover/pablo.png'}/>
                    <div className={styles.playertitre}>
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/pablo.png') }}>Kanye West - West</button></li>
                    <img className={styles.player} src={'player.png'}/>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <p>#usrap  #trap  #kanyewest  #future</p>
                    </Text>
                    </div>
                </div>

                <div className={styles.playlist1}>

                    <img className={styles.playlistcover} src={'cover/drill.jpg'}/>
                    <div className={styles.contenuplaylist}>
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/drill.jpg') }}>Daily Mix Drill 2</button></li>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <div className={styles.contenutous}>
                    <div className={styles.contenuplaylistgauche}>
                    
                            <ul>
                                <li><p>1- Energizer - menz</p></li>
                                <li><p>2- Dystopia - Flyzen</p></li>
                                <li><p>3- Tour- Macky Gee</p></li>
                                <li><p>4- Ninofap - Pejiite</p></li>
                            </ul>
                    </div>
                    <div className={styles.contenuplaylistgauche}>
                        
                    <ul>
                                <li><p>1- Energizer - menz</p></li>
                                <li><p>2- Dystopia - Flyzen</p></li>
                                <li><p>3- Tour- Macky Gee</p></li>
                                <li><p>4- Ninofap - Pejiite</p></li>
                            </ul>
                    </div>
                    </div>
                    </Text>
                    </div>
                    
                    
                </div>

                <div className={styles.contenu3}>
                    <img className={styles.cover} src={'cover/sad.png'}/>
                    <div className={styles.playertitre}>
                    
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/sad.png') }}>XXXTENTACION - Sad!</button></li>
                    <img className={styles.player} src={'player.png'}/>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <p>#usrap  #lofi  #xxxtentacion  #lilpeep</p>

                    </Text>
                    
                    </div>
                </div>

                <div className={styles.contenu3}>
                    <img className={styles.cover} src={'cover/mexico.png'}/>
                    <div className={styles.playertitre}>
                    
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/mexico.png') }}>DA UZI - Mexico</button></li>
                    <img className={styles.player} src={'player.png'}/>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <p>#usrap  #lofi  #dauzi  #mexico</p>

                    </Text>
                    
                    </div>
                </div>
                <div className={styles.contenu3}>
                    <img className={styles.cover} src={'cover/lounge.png'}/>
                    <div className={styles.playertitre}>
                    
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/lounge.png') }}>Menz - Lounge</button></li>
                    <img className={styles.player} src={'player.png'}/>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <p>#usrap  #lofi  #hardcore  #menz</p>

                    </Text>
                    
                    </div>
                </div>

                <div className={styles.contenu3}>
                    <img className={styles.cover} src={'cover/mansland.png'}/>
                    <div className={styles.playertitre}>
                    
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/mansland.png') }}>MAN'S LAND - And the beats</button></li>
                    <img className={styles.player} src={'player.png'}/>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <p>#usrap  #lofi  #hardcore  #menz</p>

                    </Text>
                    
                    </div>
                </div>
                <div className={styles.contenu3}>
                    <img className={styles.cover} src={'cover/apocalypse.png'}/>
                    <div className={styles.playertitre}>
                    
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/apocalypse.png') }}>Menz - Apocalypse</button></li>
                    <img className={styles.player} src={'player.png'}/>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <p>#usrap  #lofi  #hardcore  #menz</p>

                    </Text>
                    
                    </div>
                </div>

                <div className={styles.playlist1}>

                    <img className={styles.playlistcover} src={'cover/drill.jpg'}/>
                    <div className={styles.contenuplaylist}>
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/drill.jpg') }}>Daily Mix Drill 3</button></li>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <div className={styles.contenutous}>
                    <div className={styles.contenuplaylistgauche}>
                    
                            <ul>
                                <li><p>1- Energizer - menz</p></li>
                                <li><p>2- Dystopia - Flyzen</p></li>
                                <li><p>3- Tour- Macky Gee</p></li>
                                <li><p>4- Ninofap - Pejiite</p></li>
                            </ul>
                    </div>
                    <div className={styles.contenuplaylistgauche}>
                        
                    <ul>
                                <li><p>1- Energizer - menz</p></li>
                                <li><p>2- Dystopia - Flyzen</p></li>
                                <li><p>3- Tour- Macky Gee</p></li>
                                <li><p>4- Ninofap - Pejiite</p></li>
                            </ul>
                    </div>
                    </div>
                    </Text>
                    </div>
                    
                    
                </div>

                <div className={styles.contenu3}>
                    <img className={styles.cover} src={'cover/rage.png'}/>
                    <div className={styles.playertitre}>
                    
                    <Text size= 'small' typography= 'bold' tag='p'>
                    <li><button className={styles.p} onClick={ () => { playtrack('cover/rage.png') }}>7Jaws - Turbo S</button></li>
                    <img className={styles.player} src={'player.png'}/>
                    </Text>
                    <Text size= 'small' typography= 'medium' tag='p'>
                    <p>#usrap  #lofi  #rapfr  #7jaws</p>

                    </Text>
                    
                    </div>
                </div>
                
            </ul> 
</div>
    )
  }
  
  export default Contenu