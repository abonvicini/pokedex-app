import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Button from '../components/Button';
import HeaderPokeCard from '../components/HeaderPokeCard';
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
        const randomId = getRandomArbitrary(1, 906);
        setRandomPoke({ pokeName: randomId });
    };

    if (isFetching) {
        content = (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }

    if (isError) {
        console.log(error);
        Alert.alert('Upss!', `Ha ocurrido un error, vuelve a intentarlo.`);
        navigation.goBack();
    }

    if (status === 'success' && data) {
        content = (
            <View style={styles.container}>
                <View
                    style={styles.pageContainer(
                        typesColors[pokemonInfo.types[0]],
                    )}
                >
                    <HeaderPokeCard pokemonInfo={pokemonInfo} />

                    <Image
                        style={styles.pokeImage}
                        source={require('../img/pokeballX4.png')}
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
            </View>
        );
    }

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setRandomPoke(null);
            };
        }, []),
    );

    return content;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    randomButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        position: 'absolute',
        bottom: 0,
        right: 15,
        borderRadius: 100,
        width: 'auto',
    },
    pageContainer: (colorBase) => ({
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colorBase,
    }),
    pokeImage: {
        resizeMode: 'center',
        width: 300,
        height: 300,
        position: 'absolute',
        top: 0,
        marginVertical: 10,
        alignSelf: 'flex-end',
    },
});

export default PokeDetails;
