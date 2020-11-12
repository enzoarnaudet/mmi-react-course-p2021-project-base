import React from 'react'
import PropTypes from 'prop-types';
import styles from './Text.module.css'

// const chaine1 = 'chaine1';
// const chaine2 = 'chaine2';
// const chaines = chaine1 + chaine2;
// console.log(chaines)

const Text = (props) => {
  const { children, size, typography, tag } = props;

  // "text"
  let classNames = styles.text
  if (size === 'large') {
    // "text textLarge"
    // classNames = classNames + ' ' + styles.textLarge
    classNames = `${classNames} ${styles.textLarge}`
  }
  else if (size === 'small') {
    // "text textSmall"
    classNames = classNames + ' ' + styles.textSmall
  }
  else if (size === 'xsmall') {
    // "text textSmall"
    classNames = classNames + ' ' + styles.textXSmall
  }
  else if (size === 'xlarge') {
    classNames = `${classNames} ${styles.textXLarge}`
  }


if (typography === 'medium') {
    classNames= classNames + ' ' + styles.textmedium
  }
else if (typography === 'bold') {
  
  classNames = classNames + ' ' + styles.textbold
}

let Tag = 'span'
if (tag === 'h1') {
  Tag= 'h1'
}

else if (tag === 'h2') {
  Tag= 'h2'
}

else if (tag === 'h3') {
  Tag= 'h3'
}

  return (
    <Tag className={classNames}>
      {children}
    </Tag>
  );
}

Text.propTypes = {
  size: PropTypes.oneOf(['small', 'xsmall', 'large', 'xlarge']),
  typography: PropTypes.oneOf(['bold', 'medium']),
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'p'])
}

Text.defaultProps = {}

export default Text