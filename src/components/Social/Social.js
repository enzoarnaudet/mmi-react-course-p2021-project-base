import React from 'react'


import styles from './Social.module.css'

import Text from '../../components/Text'


const Social = () => {
    return (
  
<div className={styles.section}>
<Text size= 'small' typography= 'medium' tag='p'> 
            <ul>
                <div className={styles.contenu}>
                    <div>
                        <img className={styles.cover} src={'42764_415.jpg'}  alt="test"/>
                    </div>
                    
                    <div className={styles.son1} >
                    
                        <li><a href="gg" >Menz</a></li>
                        <div className={styles.son}>
                        <a href="gg" >Dystopia<br></br>Flyzen BEATS</a></div>
                       
                    </div>

                    <div className={styles.temps}>
                        <p>en ligne</p>
                    </div>
                   
                </div>

                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'42765_415.jpg'} alt="test"/>
                    </div>
                    <div className={styles.son1}>
                        <li><a href="gg" >Pop Hip</a></li>
                        <div className={styles.son}>
                        <a href="gg" >Kamikaze<br></br>Pop Hip</a></div>
                    </div>

                    <div className={styles.temps}>
                        <p>en ligne</p>
                    </div>         
                </div>


                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'large_c64c1a5b1a877c9c29c8c375775debbb.jpg'} alt="test"/>
                    </div>
                <div className={styles.son1}> 
                        <li><a href="gg" >Pablin</a></li>
                        <div className={styles.son}>
                        <a href="gg" >Coronavirus<br></br>Menz</a></div>
                </div>

                <div className={styles.temps}>
                    <p>il y'a 2 min</p>
                </div>
                </div>


                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'large_abd452473d389e5cb99f13bf278ebf00.jpg'} alt="tet"/>
                    </div>
                    <div className={styles.son1}>
                        <li><a href="gg" >Pejiite</a></li>
                        <div className={styles.son}>
                        <a href="gg" >Utopia<br></br>Flyzen BEATS</a></div>
                    </div>

                    <div className={styles.temps}>
                        <p>il y'a 5h</p>
                    </div>

                    
                    
                </div>

                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'channels4_profile.jpg'} alt="test"/>
                    </div>
                    <div className={styles.son1}>
                        <li><a href="gg" >Ninovember</a></li>
                        <div className={styles.son}>
                        <a href="gg" >01 MANIKIN<br></br>XXXTENTACION</a></div>
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