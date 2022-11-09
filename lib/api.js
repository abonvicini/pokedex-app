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
