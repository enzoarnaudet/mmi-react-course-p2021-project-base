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
      
      <Input type="text" placeholder="               Rechercher"/>

      
      
      </form>
      <MenuItem to="/" >
        Home
      </MenuItem>
      <MenuItem to="/discover">
       Discover
      </MenuItem>
      <MenuItem to="/playlists">
        Playlists
      </MenuItem>
      <MenuItem to="/message">
       Message
      </MenuItem>
      <MenuItem to="/profil">
      Profil
      </MenuItem>
      <MenuItem to="/login">
       Login
      </MenuItem>
      
      </ul>
      
       
    </div>

  )
}

export default Menu
