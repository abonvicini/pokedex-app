import { useQuery } from '@tanstack/react-query';
import { fetchListPokemons } from '../lib/api';

export const usePokeList = () => {
    const { isFetching, error, isError, data, status, refetch } = useQuery({
        queryKey: ['listPokemons'],
        queryFn: fetchListPokemons,
        // queryHash: { refetchOnWindowFocus: true },
    });

    let pokeNames = [];

    const getPokeNames = () => {
        const pokeNameList = data.results.map((item) => {
            return item.name;
        });
        return pokeNameList;
    };

    if (data && status === 'success') {
        pokeNames = getPokeNames();
    }

    return {
        isFetching,
        error,
        isError,
        data,
        status,
        refetch,
        pokeNames,
    };
};
