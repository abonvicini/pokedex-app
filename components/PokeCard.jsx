import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PokeCard = ({ item }) => {
    const renderTypes = () => {
        return item.types.map((type) => {
            return (
                <Text style={styles.typeBox} key={type}>
                    {type}
                </Text>
            );
        });
    };

    return (
        <View style={styles.cardContainer}>
            <Text>PokeCard</Text>

            <View style={styles.typesContainer}>{renderTypes()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 352,
        height: 412,
        backgroundColor: 'gray',
        borderRadius: 8,
    },
    typesContainer: {
        // backgroundColor: 'tomato',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        padding: 0,
        width: 312,
        height: 'auto',
    },
    typeBox: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 18,
        textAlignVertical: 'center',
        color: 'white',
        paddingVertical: 2,
        paddingHorizontal: 8,

        width: 'auto',
        height: 25,

        /* Type - Water */

        backgroundColor: '#6493EB',
        borderRadius: 10,
    },
});

export default PokeCard;
