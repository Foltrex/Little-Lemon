import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, style, onClick, ariaLabel }) => {
  return (
    <button
      className={styles.button}
      style={style}
      onClick={() => onClick()}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  )
}

export default Button