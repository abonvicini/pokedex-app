import React from 'react';

export const fetchPokemon = async (pokeName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    console.log('url', url);
    // const url = 'https://pokeapi.co/api/v2/pokemon/23';
    const response = await fetch(url);
    return response.json();
};

export const fetchListPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
    const response = await fetch(url);
    return response.json();
};

export async function recursiveSequentialFetch({ id, data, maxCalls }) {
    // console.log(id);
    const response = await fetchPokemon(id);
    // console.log('response: ', response);

    const getTypes = () => {
        const { types } = response;
        const typesList = types.map((elem) => {
            return elem.type.name;
        });
        return typesList;
    };

    function getStatsCapitalized() {
        const typesList = getTypes();
        // console.log(typesList);
        // converting first letter to uppercase
        const typesCapitalized = typesList.map((elem) => {
            return elem.charAt(0).toUpperCase() + elem.slice(1);
        });

        return typesCapitalized;
    }
    function getNameCapitalized() {
        const { name } = response;
        // converting first letter to uppercase
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

        return nameCapitalized;
    }

    data.push({
        id: response.id,
        name: getNameCapitalized(),
        order: response.order,
        img: response.sprites.other['official-artwork'].front_default,
        types: getStatsCapitalized(),
    });

    // console.log('Sequential Fetch', id, data);

    if (id < maxCalls) {
        return recursiveSequentialFetch({ id: id + 1, data, maxCalls });
    } else {
        // console.log(
        //     'dataSorted: ',
        //     data.sort((a, b) => (a.order > b.order ? 1 : -1)),
        // );
        // data.map((poke) => console.log(poke.id));
        return { id, data, maxCalls };
    }
}
