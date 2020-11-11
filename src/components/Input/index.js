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
 const { type, placeholder, dark, white } = props
  let className=styles.input
  let classWhite=styles.input2
 
  if(dark) {
className=styles.inputDark + ' ' + className
  }

  if(white) {
    classWhite=styles.inputwhite
  }
  return (
    <div>
      <input
   classWhite={classWhite}
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
  dark: PropTypes.bool,
  white:PropTypes.bool
}
Input.defaultProps = {
  dark: true
}
Input.defaultProps = {
  white: true
}

export default Input