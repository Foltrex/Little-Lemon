import React from 'react'
import styles from './Specials.module.css';
import Button from '../common/Button/Button';
import Card from './Card/Card';
import greekSalad from '../../assets/images/greek salad.jpg';
import bruchetta from '../../assets/images/bruchetta.svg'
import lemonDessert from '../../assets/images/lemon dessert.jpg';
import { Flex } from '@chakra-ui/react';

const Specials = (props) => {
    const specials = [
        { title: 'Greek salad', image: greekSalad, price: '$ 12.99', text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ' },
        { title: 'Bruchetta', image: bruchetta, price: '$ 5.99', text: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ' },
        { title: 'Lemon Dessert', image: lemonDessert, price: '$ 5.00', text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." },
    ];

    return (
        <>
            <section className={styles.specials}>
                <Flex justifyContent='space-between'>
                    <h1 className='title'>This weeks specials!</h1>
                    <Button text='Online Menu' />
                </Flex>
                <Flex justify='space-between' gap={34}>
                    {specials.map(special => (
                        <Card
                            key={special.title}
                            title={special.title}
                            image={special.image}
                            price={special.price}
                            text={special.text}
                        />
                    ))}
                </Flex>
            </section>
        </>
    )
}

export default Specials