import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, style, onClick }) => {
  return (
    <button
      className={styles.button}
      style={style}
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default Button