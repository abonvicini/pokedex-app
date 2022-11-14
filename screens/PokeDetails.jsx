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
                    <View style={styles.headerPoke}>
                        <TouchableWithoutFeedback
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                style={styles.arrowImg}
                                source={require('../img/arrow-leftx4.png')}
                            />
                        </TouchableWithoutFeedback>
                        <Text style={styles.pokeNameText}>
                            {pokemonInfo.name}
                        </Text>
                        <Text style={styles.pokeNumberText}>
                            #{pokemonInfo.id}
                        </Text>
                    </View>

                    <Image
                        style={styles.pokeImage}
                        source={require('../img/PokeballX4.png')}
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
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    pokeNumberText: {
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        lineHeight: 20,
        fontSize: 16,
        fontStyle: 'normal',
        textAlign: 'right',
        textAlignVertical: 'center',
    },
    arrowImg: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginRight: 20,
        zIndex: 5,
    },
    headerPoke: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 40,
        marginHorizontal: 20,
    },
    pokeNameText: {
        flex: 1,
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        lineHeight: 40,
        fontSize: 30,
        fontStyle: 'normal',
        textAlignVertical: 'center',
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
