import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const HeaderPokeList = () => {
    return (
        <View style={styles.headerPokedex}>
            <Image
                style={styles.imageHeader}
                source={require('../img/pokeball-headerX3.png')}
            />
            <Text style={styles.titleTextHeader}>Pokédex</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleTextHeader: {
        fontFamily: 'Poppins_700Bold',
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 32,
        textAlignVertical: 'center',
        marginLeft: 10,
    },
    imageHeader: {
        height: 24,
        width: 24,
        resizeMode: 'center',

        // paddingTop: 15,
    },
    headerPokedex: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 10,

        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HeaderPokeList;
