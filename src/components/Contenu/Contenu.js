import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import styles from './Contenu.module.css'
import MenuItem from '../Menu/MenuItem'

const Contenu = () => {
    return (
  
      
      <div>
     
        <ul className={styles.menu}>
        <img className={styles.logo} src={'logo.png'} />
        
        <form className={styles.form}>
         <img className={styles.loupe} src={'loupe.png'} />
        <Input  type="text" placeholder="               Recherche">
        
        </Input>
       
        
        
        </form>
        <MenuItem to="/" >
        <img className={styles.loupe} src={'home.png'} />
          Home
        </MenuItem>
        <MenuItem to="/discover">
        <img className={styles.loupe} src={'discover.png'} />
         Discover
        </MenuItem>
        <MenuItem to="/playlists">
        <img className={styles.loupe} src={'playlist.png'} />
          Playlists
        </MenuItem>
        <MenuItem to="/message">
        <img className={styles.loupe} src={'dm.png'} />
         Message
        </MenuItem>
        <MenuItem to="/profil">
        <img className={styles.loupe} src={'flyzen.png'} />
        Profil
        </MenuItem>
        <MenuItem to="/login">
        
         Login/sign up
        </MenuItem>
        
        </ul>
        
         
      </div>
  
    )
  }
  
  export default Contenu