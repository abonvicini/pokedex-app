import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const HeaderPokeCard = ({ pokemonInfo }) => {
    return (
        <View style={styles.headerPoke}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image
                    style={styles.arrowImg}
                    source={require('../img/arrow-leftx4.png')}
                />
            </TouchableWithoutFeedback>
            <Text style={styles.pokeNameText}>{pokemonInfo.name}</Text>
            <Text style={styles.pokeNumberText}>#{pokemonInfo.id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default HeaderPokeCard;
