import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/images/Logo.png';
import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import LinksStack from './LinksStack/LinksStack';

const Footer = () => {
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

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
                    templateAreas={
                        isLargerThan700
                            ? `"logo title-1 title-2 title-3"
                               "logo column-1 column-2 column-3"`
                            : `"logo"
                               "title-1"
                               "column-1"
                               "title-2"
                               "column-2"
                               "title-3"
                               "column-3"`
                    }
                    templateRows={
                        isLargerThan700
                            ? '48px 168px'
                            : '200px repeat(6, auto)'
                    }
                    templateColumns={
                        isLargerThan700
                            ? '162px repeat(3, 1fr)'
                            : '1fr'
                    }
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
