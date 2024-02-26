import React from 'react';
import styles from './Card.module.css';
import { ReactComponent as BikeSvg } from '../../../assets/icons/Bike.svg';
import { Flex, Image } from '@chakra-ui/react';

const Card = ({ title, image, price, text }) => {
    return (
        <>
            <div className={styles.card}>
                <Image
                    src={image}
                    alt={title}
                    width={264}
                    height={185}
                    borderRadius='16px 16px 0 0'
                    objectFit='cover'
                    objectPosition='center'
                />
                <div className={styles.content}>
                    <Flex justifyContent='space-between'>
                        <h2 className="card-title">{title}</h2>
                        <span className={styles.price}>{price}</span>
                    </Flex>
                    <p className="paragraph-text">{text}</p>
                    <button className={styles.deliveryButton}>
                        Order a delivery
                        <BikeSvg />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card