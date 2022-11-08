import React from 'react';

export const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';
    const response = await fetch(url);
    return response.json();
};
