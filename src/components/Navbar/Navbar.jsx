import React, { useState } from 'react'
import styles from './Navbar.module.css';
import logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as HamburgerMenuIcon } from '../../assets/icons/icon_hamburger menu.svg';
import Close from '../../assets/icons/Close.svg';
import { useMediaQuery } from '@chakra-ui/react';

const Navbar = (props) => {
  const [displaySideBar, setDisplaySideBar] = useState(false);
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  const links = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/' },
    { name: 'Menu', to: '/' },
    { name: 'Reservations', to: '/booking' },
    { name: 'Order Online', to: '/' },
    { name: 'Login', to: '/' },
  ]

  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <img className={styles.logo} src={logo} alt="Product Logo" />
      </Link>

      {!isLargerThan900 &&
        <button className={styles.hamburgerButton} onClick={() => setDisplaySideBar(true)}>
          <HamburgerMenuIcon />
        </button>
      }

      {(isLargerThan900 || displaySideBar) && (
        <>
          <button className={styles.close} onClick={() => setDisplaySideBar(false)}>
            <img src={Close} alt="Close button" />
          </button>
            <ul>
              {links.map(link => (
                <li key={link.name}>
                  <Link key={link.name} to={link.to} onClick={() => setDisplaySideBar(false)}>{link.name}</Link>
                </li>
              ))}
            </ul>
        </>
      )}
    </nav>
  )
}

export default Navbar