import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import PokeCard, { typesColors } from '../components/PokeCard';
import { usePokeFetch } from '../hooks/usePokeFetch';
import { getRandomArbitrary } from '../utils/functions';

const PokeDetails = ({ route, navigation }) => {
    let content;

    const [randomPoke, setRandomPoke] = React.useState(null);

    const { pokeName } = randomPoke === null ? route.params : randomPoke;

    const { isFetching, error, isError, data, status, pokemonInfo, refetch } =
        usePokeFetch(pokeName);

    const handleRandom = () => {
        const randomId = getRandomArbitrary(1, 850);
        setRandomPoke({ pokeName: randomId });
        // refetch();
    };

    // status === 'success' && console.log('pokeInfo: ', data.types[0]);
    if (isFetching) {
        content = <Text>Loading</Text>;
    }

    if (status === 'success' && data) {
        content = (
            <View
                style={styles.pageContainer(typesColors[pokemonInfo.types[0]])}
            >
                {/* <View> */}
                <Image
                    style={styles.pokeImage}
                    source={require('../img/pokeball.png')}
                />
                <PokeCard item={pokemonInfo} />
                <Button
                    mode="outlined"
                    onPress={handleRandom}
                    style={styles.randomButton}
                >
                    Randomize
                </Button>
            </View>
        );
    }

    useFocusEffect(
        React.useCallback(() => {
            // alert('Screen was focused');
            return () => {
                setRandomPoke(null);
                // alert(randomPoke);
            };
        }, []),
    );

    return content;
};

const styles = StyleSheet.create({
    randomButton: {
        position: 'absolute',
        bottom: 0,
        right: 15,
        borderRadius: 100,
        width: 'auto',
    },
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
