import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { recursiveSequentialFetch } from '../lib/api';

export const usePokeSetUp = () => {
    const [pokeData, setPokeData] = React.useState([]);
    const [statusSetUp, setStatusSetUp] = React.useState('idle');

    React.useEffect(() => {
        console.log(statusSetUp);

        recursiveSequentialFetch({ id: 1, data: [], maxCalls: 92 })
            .then((data) => {
                // console.log('Sequential Fetch Done', data.data);
                setPokeData(data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log('fin');
                setStatusSetUp('success');
            });
    }, []);

    return { pokeData, statusSetUp };
};
