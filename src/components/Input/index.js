import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'

/*
  props = {

    type: 'password'
    type: 'email'
  }
*/
const Input = (props) => {
 const { type, placeholder, dark } = props
  let className=styles.input
  if(dark) {
className=styles.inputDark + ' ' + className
  }
  return (
    <div>
      <input
   
      className={className}
    
      placeholder={placeholder}
       type={type}
      />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['password', 'email', 'text']),
  placeholder: PropTypes.string,
  dark: PropTypes.bool
}
Input.defaultProps = {
  dark: true
}

export default Input