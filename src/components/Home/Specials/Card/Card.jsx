import React from 'react';
import styles from './Card.module.css';
import { ReactComponent as BikeSvg } from '../../../../assets/icons/Bike.svg';
import { Box, Flex, Image } from '@chakra-ui/react';

const Card = ({ title, image, price, text }) => {
    return (
        <>
            <Box flexGrow={1} as='div' className={styles.card} maxWidth={264}>
                <Image className={styles.image} src={image} alt={title} />
                <header>
                    <Flex justifyContent='space-between' className={styles.header}>
                        <h2 className="card-title">{title}</h2>
                        <span className={styles.price}>{price}</span>
                    </Flex>
                </header>
                <div className={styles.content}>
                    <p className="paragraph-text">{text}</p>
                </div>
                <footer className={styles.footer}>
                    <button className={styles.deliveryButton}>
                        Order a delivery
                        <BikeSvg />
                    </button>
                </footer>
            </Box>
        </>
    )
}

export default Card