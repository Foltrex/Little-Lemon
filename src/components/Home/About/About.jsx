import React from 'react';
import styles from './About.module.css';
import restaurantChef from '../../../assets/images/restaurant chef B.jpg';
import restaurant from '../../../assets/images/restaurant.jpg';
import { Box, Flex } from '@chakra-ui/react';

const About = () => {
    return (
        <section className={styles.about}>
            <Flex as='div' gap={48}>
                <Box as='div' className={styles.content} flexGrow={4}>
                    <h1 className="title">Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <p className="lead-text">
                        Little Lemon is a charming neighborhood
                        bistro thatserves simple food and classic
                        cocktails in a lively but casual environment.
                        The restaurant features a locally-sourced
                        menu with daily specials.
                    </p>
                </Box>
                <Box flexGrow={6} position='relative'>
                    <img
                        className={styles.restaurantChef}
                        src={restaurantChef}
                        alt="Restuarant Chef is seasoning beautiful meal"
                    />
                    <img
                        className={styles.restaurant}
                        src={restaurant}
                        alt="Restaurant photo"
                    />
                </Box>
            </Flex>

        </section>
    );
}

export default About;
