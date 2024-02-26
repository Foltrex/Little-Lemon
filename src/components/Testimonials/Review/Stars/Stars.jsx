import React from 'react';
import styles from './Stars.module.css';
import lodash from 'lodash'
import { ReactComponent as StarRate } from '../../../../assets/icons/Star rate.svg';
import { Flex } from '@chakra-ui/react';

const Stars = ({ amount }) => {
    return (
        <Flex justifyContent='start' gap={8}>
            {lodash.range(amount).map(i => <StarRate key={i} width={16} height={16}/>)}
        </Flex>
    );
}

export default Stars;
