import React from 'react';
import {
    fetchListPokemons,
    fetchPokemon,
    recursiveSequentialFetch,
} from '../lib/api';
import { usePokeList } from './usePokeList';

export const usePokeSetUp = () => {
    const [pokeData, setPokeData] = React.useState([]);
    const [statusSetUp, setStatusSetUp] = React.useState('idle');
    // const pokeList = fetchListPokemons();
    // if (pokeList) {
    //     pokeList
    //         .then((data) => {
    //             console.log('data', data);
    //         })
    //         .catch((err) => {
    //             console.log('err', err.message);
    //         })
    //         .finally(() => {
    //             console.log('End');
    //         });
    // }

    const { pokeNames, status } = usePokeList();

    React.useEffect(() => {
        // console.log(statusSetUp);
        if (status === 'success') {
            recursiveSequentialFetch({ id: 1, data: [], maxCalls: 50 })
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
        }
    }, [status]);

    return { pokeData, statusSetUp };
};
