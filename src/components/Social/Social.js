import React from 'react'
//import { Link } from 'react-router-dom'

import styles from './Social.module.css'

import Text from '../../components/Text'


const Social = () => {
    return (
  
<div className={styles.section}>
<Text size= 'small' typography= 'medium' tag='p'> 
            <ul>
                <div className={styles.contenu}>
                    <div>
                        <img className={styles.cover} src={'42764_415.jpg'} alt="test"/>
                    </div>
                    
                    <div className={styles.son1} >
                    
                        <li><a>Menz</a></li>
                        <div className={styles.son}>
                        <a href="" >Dystopia<br></br>Flyzen BEATS</a></div>
                       
                    </div>

                    <div className={styles.temps}>
                        <p>en ligne</p>
                    </div>
                   
                </div>

                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'42765_415.jpg'}/>
                    </div>
                    <div className={styles.son1}>
                        <li><a>Pop Hip</a></li>
                        <div className={styles.son}>
                        <a href="" >Kamikaze<br></br>Pop Hip</a></div>
                    </div>

                    <div className={styles.temps}>
                        <p>en ligne</p>
                    </div>         
                </div>


                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'large_c64c1a5b1a877c9c29c8c375775debbb.jpg'}/>
                    </div>
                <div className={styles.son1}> 
                        <li><a>Pablin</a></li>
                        <div className={styles.son}>
                        <a  >Coronavirus<br></br>Menz</a></div>
                </div>

                <div className={styles.temps}>
                    <p>il y'a 2 min</p>
                </div>
                </div>


                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'large_abd452473d389e5cb99f13bf278ebf00.jpg'}/>
                    </div>
                    <div className={styles.son1}>
                        <li><a  >Pejiite</a></li>
                        <div className={styles.son}>
                        <a  >Utopia<br></br>Flyzen BEATS</a></div>
                    </div>

                    <div className={styles.temps}>
                        <p>il y'a 5h</p>
                    </div>

                    
                    
                </div>

                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'channels4_profile.jpg'}/>
                    </div>
                    <div className={styles.son1}>
                        <li><a  >Ninovember</a></li>
                        <div className={styles.son}>
                        <a  >01 MANIKIN<br></br>XXXTENTACION</a></div>
                    </div>

                    <div className={styles.temps}>
                        <p>il y'a 2j</p>
                    </div>
                    
                    
                </div>
            </ul> 
            </Text>
</div>
    )
  }
  
  export default Social