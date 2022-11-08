import { useQuery } from '@tanstack/react-query';
//Funcion que fetchea la data
import { fetchPokemon } from '../lib/api';

//useQuery hook
export const usePokeFetch = () => {
    const { isFetching, error, isError, data, status } = useQuery({
        queryKey: ['pokemon'],
        queryFn: fetchPokemon,
    });

    const getAbilities = () => {
        const { abilities } = data;
        const abilitiesNames = abilities.map((elem) => {
            return elem.ability.name;
        });
        return abilitiesNames;
    };

    const getTypes = () => {
        const { types } = data;
        const typesList = types.map((elem) => {
            return elem.type.name;
        });
        return typesList;
    };

    const getStats = () => {
        const filteredStats = {};
        const { stats } = data;
        stats.forEach((elem) => {
            filteredStats[elem.stat.name] = elem.base_stat;
        });
        return filteredStats;
    };

    function getNameCapitalized() {
        const { name } = data;
        // converting first letter to uppercase
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

        return nameCapitalized;
    }

    let pokemonInfo = {};

    if (data && status === 'success') {
        pokemonInfo = {
            name: getNameCapitalized(),
            id: data.id,
            order: data.order,
            types: getTypes(),
            title: 'About',
            info: {
                weight: data.weight,
                height: data.height,
                abilities: getAbilities(),
            },
            // description: 'Lorem ipsum',
            stats: getStats(),
            imageArtWork: data.sprites.other['official-artwork'].front_default,
        };
    }

    return {
        isFetching,
        error,
        isError,
        data,
        status,
        pokemonInfo,
    };
};
//Options for useQuery
