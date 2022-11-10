import React from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { usePokeFetch } from '../hooks/usePokeFetch';

const PokeHome = () => {
    function miniCard() {
        return (
            <View>
                <View style={styles.headerMiniCard}>
                    <Text style={styles.textHeaderMiniCard}>#001</Text>
                </View>
                <View style={styles.contentMiniCard}>
                    <Image
                        style={styles.pokeImageMiniCard}
                        source={{ uri: `${pokemonInfo.imageArtWork}` }}
                    />
                </View>
                <View style={styles.footerMiniCard}>
                    <Text style={styles.textFooterMiniCard}>Bulbasaur</Text>
                </View>
            </View>
        );
    }

    const { isFetching, error, isError, data, status, pokemonInfo } =
        usePokeFetch('bulbasaur');

    if (isFetching) {
        return <ActivityIndicator size="small" color="#0000ff" />;
    }

    return (
        <View style={styles.homeContainer}>
            {/* <Text>PokeHome</Text> */}
            {/* HeaderHome */}
            {/* SearchBox */}
            {/* PokemonCardsList */}

            {/* MiniPokeCard */}
            <TouchableHighlight
                onHideUnderlay={() => console.log('on hide')}
                activeOpacity={0.5}
                underlayColor={'#EEEEEE'}
                onPress={() => Alert.alert('Tap')}
                style={styles.miniCardContainer}
            >
                {miniCard()}
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 24,
        paddingHorizontal: 16,
    },
    miniCardContainer: {
        //Display
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        //Tamaño
        width: 104,
        // height: 112,
        //Colors
        backgroundColor: '#FFFFFF',
        //Decos
        borderColor: '#74CB48',
        borderWidth: 1,
        borderRadius: 8,
    },
    headerMiniCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

        paddingTop: 8,
        paddingHorizontal: 8,

        // height: 16,
    },
    textHeaderMiniCard: {
        // width: ,

        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 16,

        display: 'flex',
        alignItems: 'center',
        textAlign: 'right',
        width: '100%',
        color: '#74CB48',
    },
    contentMiniCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',

        width: '100%',
    },
    pokeImageMiniCard: {
        width: 72,
        height: 72,

        // alignSelf: 'center',
    },
    footerMiniCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

        paddingVertical: 4,
        paddingHorizontal: 8,

        backgroundColor: '#74CB48',

        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    textFooterMiniCard: {
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 16,

        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',

        color: '#FFFFFF',
    },
});

export default PokeHome;
