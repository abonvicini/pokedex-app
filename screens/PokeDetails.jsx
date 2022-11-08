import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import PokeCard from '../components/PokeCard';
import { usePokeFetch } from '../hooks/usePokeFetch';

const PokeDetails = ({ navigation }) => {
    const { isFetching, error, isError, data, status, pokemonInfo } =
        usePokeFetch();

    if (isFetching) {
        return <Text>Loading</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                }}
            >
                Pokemon Details
            </Text>
            <PokeCard item={pokemonInfo} />

            <Button
                title="Return to Home"
                color="tomato"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default PokeDetails;
