import React from 'react';
import styles from './Button.module.css';

const Button = ({text, style}) => {
  return (
    <button 
        className={styles.button}
        style={style}>
        {text}
    </button>
  )
}

export default Button