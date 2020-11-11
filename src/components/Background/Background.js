import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import styles from './Background.module.css'
import MenuItem from '../Menu/MenuItem'


var images = document.querySelectorAll('.image');
var titles = document.querySelectorAll('.title');

function showImage (index) {
  var activeImage = document.querySelector('.image.is-active');
  activeImage.classList.remove('is-active');
  images[index].classList.add('is-active');
}

for (var i = 0; i < titles.length; i+=1) {
  titles[i].addEventListener('click',  function () {
    var titleIndex = this.getAttribute('data-image');
    showImage(titleIndex);
  }); 
}

const Background = () => {
    return (
  
<div className={styles.background}>

    <ul>
        <li><img className={styles.cover} src={'cover/dystopia.png'}/></li>
        <li><img className={styles.cover} src={'cover/600_eib4vdcxsaca5uv.jpg'}/></li>
        <li><img className={styles.cover} src={'cover/introspection.png'}/></li>
    </ul>
    
</div>
    )
  }
  
  export default Background