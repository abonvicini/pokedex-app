import { useQuery } from '@tanstack/react-query';
//Funcion que fetchea la data
import { fetchPokemon } from '../lib/api';

//useQuery hook
export const usePokeFetch = (pokeName) => {
    const { isFetching, error, isError, data, status } = useQuery({
        queryKey: ['pokemon', pokeName],
        // queryFn: fetchPokemon,
        queryFn: () => fetchPokemon(pokeName),
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

    function getAbilitiesCapitalized() {
        const abilities = getAbilities();
        // converting first letter to uppercase
        const abilitiesCapitalized = abilities.map((elem) => {
            return elem.charAt(0).toUpperCase() + elem.slice(1);
        });

        return abilitiesCapitalized;
    }

    function getStatsCapitalized() {
        const typesList = getTypes();
        console.log(typesList);
        // converting first letter to uppercase
        const typesCapitalized = typesList.map((elem) => {
            return elem.charAt(0).toUpperCase() + elem.slice(1);
        });

        return typesCapitalized;
    }

    let pokemonInfo = {};

    if (data && status === 'success') {
        pokemonInfo = {
            name: getNameCapitalized(),
            id: data.id,
            order: data.order,
            types: getStatsCapitalized(),
            title: 'About',
            info: {
                weight: data.weight,
                height: data.height,
                abilities: getAbilitiesCapitalized(),
            },
            // description: 'Lorem ipsum',
            stats: getStats(),
            imageArtWork: data.sprites.other['official-artwork'].front_default,
            color: 'cadetblue',
        };
        console.log('imageArtWork: ', pokemonInfo.imageArtWork);
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
