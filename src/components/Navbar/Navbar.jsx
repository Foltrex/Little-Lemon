import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../assets/images/Logo.svg';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
        <img className={styles.logo} src={logo} alt="Product Logo" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar