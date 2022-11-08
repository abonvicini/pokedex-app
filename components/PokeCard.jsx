import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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

    const renderAbilities = () => {
        return item.info.abilities.map((abilitie) => {
            return <Text key={abilitie} style={styles.text}>{abilitie}</Text>;
        });
    };

    return (
        <View style={styles.cardContainer}>
            <Text>PokeCard</Text>
            <Image style={{width: 200, height: 200}} source={{uri: `${item.imageArtWork}`}} />

            <View style={styles.typesContainer}>{renderTypes()}</View>
            <Text style={styles.titleText}>{item.title}</Text>
            <View style={styles.infoWrapper}>
            <View style={styles.infoContainer}>
                {/* FALTA ICONO */}
                <View style={styles.infoDetails}>
                    <Text style={styles.text}>Ico</Text>
                    <View style={styles.gapper8} />
                    <Text style={styles.text}>{item.info.weight / 10} kg</Text>
                </View>
                <Text style={[styles.text, styles.textDetails]}>Weight</Text>
            </View>
            <View style={styles.divider24}/>
            <View style={styles.infoContainer}>
                <View style={styles.infoDetails}>
                {/* FALTA ICONO */}
                    <Text style={styles.text}>Ico</Text>
                    <View style={styles.gapper8} />
                    <Text style={styles.text}>{item.info.height / 10} m</Text>
                </View>
                <Text style={[styles.text, styles.textDetails]}>Height</Text>
            </View>
            <View style={styles.divider24}/>
            <View style={styles.infoContainer}>
                 <View style={[styles.infoDetails, styles.infoAbilities]}>

                {renderAbilities()}
        
                </View>
                <Text style={[styles.text, styles.textDetails]}>Abilities</Text>
                {/* FALTA ICONO */}
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        color: 'tomato',
        fontFamily: 'Poppins_700Bold',
        fontSize: 16,
        fontStyle: 'normal'

    },
    text: {
        fontStyle: 'normal',
        fontSize: 12,
        color: '#212121',
        fontFamily: 'Poppins_400Regular'
    },
    textDetails: {
        fontSize: 10,
        color: '#666666'

    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 352,
        height: 412,
        backgroundColor: 'azure',
        borderWidth: 3,
        borderColor: 'cadetblue',
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
        textAlign: 'center',

        width: 'auto',
        height: 25,

        /* Type - Water */

        backgroundColor: '#6493EB',
        borderRadius: 10,
    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        height: 65,
        borderWidth: 1,
   },
    infoDetails: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 10,
        // borderWidth: 1,
        // borderColor: 'tomato',
    },
    infoAbilities: {
        flexDirection: 'column',
        paddingVertical: 0
    },
    gapper8: {
        marginHorizontal: 4,
    },
    divider24: {
        borderWidth: 0.5,
        borderColor: '#E0E0E0',
        height: 90
    },
    infoWrapper: {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: 250,
        // borderWidth: 1,
        // borderColor: 'green',
        borderRadius: 10,
        // backgroundColor: 'rgba(0, 6, 144, 0.55)',
        paddingHorizontal: 8,
        paddingVertical: 6
    }
});

export default PokeCard;

