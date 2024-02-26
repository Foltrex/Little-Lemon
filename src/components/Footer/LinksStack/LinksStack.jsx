import { Flex, GridItem } from '@chakra-ui/react';
import React from 'react';
import styles from './LinksStack.module.css';

const LinksStack = ({ title, links, col }) => {
    const style = col === 3 ? { whiteSpace: 'nowrap'} : {};

    return (
        <>
            <GridItem area={`title-${col}`} alignSelf='end'>
                <h2
                    className={styles.title}
                    style={style}
                >
                    {title}
                </h2>
            </GridItem>
            <GridItem area={`column-${col}`}>
                <Flex flexDirection='column'>
                    {links.map(link => (
                        <p key={link}>{link}</p>
                    ))}
                </Flex>
            </GridItem>
        </>
    );
}

export default LinksStack;
