import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'
import styles from './Menu.module.css'
import Input from '../Input'

const Menu = () => {
  return (

    
    <div>
   
      <ul className={styles.menu}>
      <img className={styles.logo} src={'logo.png'} />
      
      <form className={styles.form}>
      
     <Input dark  type="text" placeholder="               Recherche">
       <img className={styles.loupe} src={'loupe.png'} />
      </Input>
     
      
      
      </form>
      <MenuItem to="/" >
     <img className={styles.loupe} src={'home.png'} />
      
      </MenuItem>
      <MenuItem to="/discover">
      <img className={styles.loupe} src={'discover.png'} />
     
      </MenuItem>
      <MenuItem to="/playlists">
      <img className={styles.loupe} src={'playlist.png'} />
       
      </MenuItem>
      <MenuItem to="/message">
      <img className={styles.loupe} src={'dm.png'} />
       
      </MenuItem>
      <MenuItem to="/profil">
      <img className={styles.loupe} src={'flyzen.png'} />
      
      </MenuItem>
      <MenuItem to="/login">
      
       Login/sign up
      </MenuItem>
      
      </ul>
      
       
    </div>

  )
}

export default Menu
