import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
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
                <View style={styles.headerPoke}>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            style={styles.arrowImg}
                            source={require('../img/arrow-leftx4.png')}
                        />
                    </TouchableWithoutFeedback>
                    <Text style={styles.pokeNameText}>{pokemonInfo.name}</Text>
                    <Text style={styles.pokeNumberText}>#{pokemonInfo.id}</Text>
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
    pokeNumberText: {
        // flex: 0.2,
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        lineHeight: 20,
        fontSize: 16,
        fontStyle: 'normal',
        // borderWidth: 1,
        // borderColor: 'green',
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
        // flex: ,
        flexDirection: 'row',

        justifyContent: 'flex-start',

        // textAlignVertical: 'center',
        marginTop: 40,
        marginHorizontal: 20,
        // paddingTop: 15,
    },
    pokeNameText: {
        flex: 1,
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        lineHeight: 40,
        fontSize: 30,
        fontStyle: 'normal',
        // borderWidth: 1,
        // borderColor: 'green',
        // textAlign: 'center',
        textAlignVertical: 'center',

        // justifyContent: 'flex-start',

        // alignSelf: 'flex-end',
    },
    randomButton: {
        position: 'absolute',
        bottom: 0,
        right: 15,
        borderRadius: 100,
        width: 'auto',
    },
    pageContainer: (colorBase) => ({
        // marginTop: 40,

        // display: 'flex',

        flex: 1,
        flexDirection: 'column',

        // alignItems: 'center',
        // justifyContent: 'flex-end',
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
