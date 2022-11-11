import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import PokeCard, { typesColors } from '../components/PokeCard';
import { usePokeFetch } from '../hooks/usePokeFetch';

const PokeDetails = ({ route, navigation }) => {
    const fallback = { pokeName: 1 };
    const { pokeName } = route.params || fallback;
    console.log('pokeName', pokeName);
    const { isFetching, error, isError, data, status, pokemonInfo } =
        usePokeFetch(pokeName);

    status === 'success' && console.log('pokeInfo: ', data.types[0]);
    if (isFetching) {
        return <Text>Loading</Text>;
    }

    return (
        <View style={styles.pageContainer(typesColors[pokemonInfo.types[0]])}>
            <Image
                style={styles.pokeImage}
                source={require('../img/pokeball.png')}
            />
            <PokeCard item={pokemonInfo} />

            {/* <Button
                title="Return to Home"
                color="tomato"
                onPress={() => navigation.goBack()}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: (colorBase) => ({
        display: 'flex',

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorBase,
    }),
    pokeImage: {
        width: 208,
        height: 208,
        // position: 'absolute',
        marginVertical: 10,
        alignSelf: 'flex-end',
    },
});

export default PokeDetails;
