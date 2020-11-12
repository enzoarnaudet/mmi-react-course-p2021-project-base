import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import styles from './Social.module.css'
import MenuItem from '../Menu/MenuItem'
import Text from '../../components/Text'


const Social = () => {
    return (
  
<div className={styles.section}>
<Text size= 'small' typography= 'medium' tag='p'> 
            <ul>
                <div className={styles.contenu}>
                    <div>
                        <img className={styles.cover} src={'42764_415.jpg'}/>
                    </div>
                    
                    <div className={styles.son1} >
                    
                        <li><a href="" >Menz</a></li>
                        <div className={styles.son}>
                        <a href="" >Dystopia<br></br>Flyzen BEATS</a></div>
                       
                    </div>

                    <div>
                        <p>en ligne</p>
                    </div>
                   
                </div>

                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'42765_415.jpg'}/>
                    </div>
                    <div className={styles.son1}>
                        <li><a href="" >Pop Hip</a></li>
                        <div className={styles.son}>
                        <a href="" >Dystopia<br></br>Flyzen BEATS</a></div>
                    </div>

                    <div>
                        <p>en ligne</p>
                    </div>         
                </div>


                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'large_c64c1a5b1a877c9c29c8c375775debbb.jpg'}/>
                    </div>
                <div className={styles.son1}> 
                        <li><a href="" >Pablin</a></li>
                        <div className={styles.son}>
                        <a href="" >Dystopia<br></br>Flyzen BEATS</a></div>
                </div>

                <div>
                    <p>en ligne</p>
                </div>
                </div>


                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'large_abd452473d389e5cb99f13bf278ebf00.jpg'}/>
                    </div>
                    <div className={styles.son1}>
                        <li><a href="" >Pejiite</a></li>
                        <div className={styles.son}>
                        <a href="" >Dystopia<br></br>Flyzen BEATS</a></div>
                    </div>

                    <div>
                        <p>en ligne</p>
                    </div>

                    
                    
                </div>

                <div className={styles.contenu}>
                    <div>
                    <img className={styles.cover} src={'channels4_profile.jpg'}/>
                    </div>
                    <div className={styles.son1}>
                        <li><a href="" >Ninovember</a></li>
                        <div className={styles.son}>
                        <a href="" >Dystopia<br></br>Flyzen BEATS</a></div>
                    </div>

                    <div>
                        <p>en ligne</p>
                    </div>
                    
                    
                </div>
            </ul> 
            </Text>
</div>
    )
  }
  
  export default Social