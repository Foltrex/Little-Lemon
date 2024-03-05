import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const links = [
    {name: 'Home', to: '/'},
    {name: 'About', to: '/'},
    {name: 'Menu', to: '/'},
    {name: 'Reservations', to: '/booking'},
    {name: 'Order Online', to: '/'},
    {name: 'Login', to: '/'},
  ]

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Product Logo" />
      <ul>
        {links.map(link => (
          <li>
            <Link key={link.name} to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar