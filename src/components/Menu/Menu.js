import React from 'react'

import MenuItem from './MenuItem'
import styles from './Menu.module.css'
import Input from '../Input'

const Menu = () => {
  return (

    
    <div>
   
      <ul className={styles.menu}>

      <MenuItem to="/mentionslegales" >
      <img className={styles.logo} src={'logo.png'} alt="test" />
      </MenuItem>
      
      
      
      <form className={styles.form}>
      
     <Input dark  type="text" placeholder="               Recherche" >
     <div><img className={styles.loupe} src={'loupe.png'}  alt="test"/></div>
    
      </Input>
     
      
      
      </form>
      <MenuItem to="/" >
     <img className={styles.home} src={'home.png'} alt="test" />
    
      </MenuItem>
      <MenuItem to="/discover">
      <img className={styles.discover} src={'discover.png'} alt="test" />
     
      </MenuItem>
      <MenuItem to="/playlists">
      <img className={styles.playlist} src={'playlist.png'} alt="test" />
       
      </MenuItem>
      <MenuItem to="/message">
      <img className={styles.message} src={'dm.png'} alt="test" />
       
      </MenuItem>
      <MenuItem to="/profil">
      <img className={styles.profil} src={'flyzen.png'} alt="test" />
      
      </MenuItem>
      <MenuItem to="/login" >
      
       Login/sign up
      </MenuItem>
      
      </ul>
      
       
    </div>

  )
}

export default Menu
