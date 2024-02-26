import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/images/Logo.png';
import { Grid, GridItem } from '@chakra-ui/react';
import LinksStack from './LinksStack/LinksStack';

const Footer = () => {
    const linksColumns = [
        {
            title: 'Doormat Navigation',
            links: ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login']
        },
        {
            title: 'Contact',
            links: ['Address', 'Phone Number', 'Email']
        },
        {
            title: 'Social Media Links',
            links: ['Instagram', 'Facebook', 'Telegram']
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.background}></div>
            <div className={styles.bottomNavigation}>
                <Grid
                    as='div'
                    templateAreas={`"logo title-1 title-2 title-3"
                                    "logo column-1 column-2 column-3"`}
                    templateRows='48px 168px'
                    templateColumns='162px repeat(3, 1fr)'
                    justifyContent='space-between'
                    columnGap={21}
                    rowGap={24}
                >
                    <GridItem area='logo' alignSelf='start'>
                        <img src={logo} alt="Green Logo" />
                    </GridItem>
                    {linksColumns.map((linksColumn, index) => (
                        <LinksStack
                            key={linksColumn.title}
                            col={index + 1}
                            title={linksColumn.title}
                            links={linksColumn.links}
                        />
                    ))}
                </Grid>
            </div>
        </footer>
    );
}

export default Footer;
