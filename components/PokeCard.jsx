import React from 'react';
import {
    Image,
    ProgressBarAndroid,
    StyleSheet,
    Text,
    View,
} from 'react-native';
// import { ProgressBarAndroid } from 'react-native-community/progress-bar-android';
import { FontAwesome5 } from '@expo/vector-icons';

export const typesColors = {
    Rock: '#B69E31',
    Ghost: '#70559B',
    Steel: '#B7B9D0',
    Water: '#6493EB',
    Grass: '#74CB48',
    Psychic: '#FB5584',
    Ice: '#9AD6DF',
    Dark: '#75574C',
    Fairy: '#E69EAC',
    Normal: '#AAA67F',
    Fighting: '#C12239',
    Flying: '#A891EC',
    Poison: '#A43E9E',
    Ground: '#DEC16B',
    Bug: '#A7B723',
    Fire: '#F57D31',
    Electric: '#F9CF30',
    Dragon: '#7037FF',
};

const PokeCard = ({ item }) => {
    const renderTypes = () => {
        return item.types.map((type, index) => {
            return (
                <Text
                    style={styles.typeBox(typesColors[item.types[index]])}
                    key={type}
                >
                    {type}
                </Text>
            );
        });
    };

    const renderAbilities = () => {
        return item.info.abilities.map((abilitie) => {
            return (
                <Text key={abilitie} style={styles.text}>
                    {abilitie}
                </Text>
            );
        });
    };

    const renderStats = () => {
        return (
            <View style={styles.verticalContainer}>
                <Text style={styles.text}>{item.stats.attack}</Text>
                <Text style={styles.text}>{item.stats.defense}</Text>
                <Text style={styles.text}>{item.stats.hp}</Text>
                <Text style={styles.text}>{item.stats['special-attack']}</Text>
                <Text style={styles.text}>{item.stats['special-defense']}</Text>
                <Text style={styles.text}>{item.stats.speed}</Text>
            </View>
        );
    };

    return (
        <View style={styles.cardContainer}>
            {/* <Text>PokeCard</Text> */}
            <Image
                style={styles.pokeImage}
                source={{ uri: `${item.imageArtWork}` }}
            />
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText(typesColors[item.types[0]])}>
                    {item.title}
                </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.typesContainer}>{renderTypes()}</View>

            <View style={styles.divider} />

            <View style={styles.infoWrapper}>
                <View style={styles.infoContainer}>
                    <View style={styles.infoDetails}>
                        <FontAwesome5 name="weight" size={14} color="black" />

                        <View style={styles.gapper8} />
                        <Text style={styles.text}>
                            {item.info.weight / 10} kg
                        </Text>
                    </View>
                    <Text style={[styles.text, styles.textDetails]}>
                        Weight
                    </Text>
                </View>
                <View style={styles.slimGrayVertical} />
                <View style={styles.infoContainer}>
                    <View style={styles.infoDetails}>
                        <FontAwesome5
                            name="ruler-combined"
                            size={14}
                            color="black"
                        />
                        <View style={styles.gapper8} />
                        <Text style={styles.text}>
                            {item.info.height / 10} m
                        </Text>
                    </View>
                    <Text style={[styles.text, styles.textDetails]}>
                        Height
                    </Text>
                </View>
                <View style={styles.slimGrayVertical} />
                <View style={styles.infoContainer}>
                    <View style={[styles.infoDetails, styles.infoAbilities]}>
                        {renderAbilities()}
                    </View>
                    <Text style={[styles.text, styles.textDetails]}>
                        Abilities
                    </Text>
                    {/* FALTA ICONO */}
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.titleWrapper}>
                <Text style={styles.titleText(typesColors[item.types[0]])}>
                    Base Stats
                </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.baseStatsWrapper}>
                <View style={styles.verticalContainer}>
                    <Text
                        style={styles.baseStatsText(typesColors[item.types[0]])}
                    >
                        ATK
                    </Text>
                    <Text
                        style={styles.baseStatsText(typesColors[item.types[0]])}
                    >
                        DEF
                    </Text>
                    <Text
                        style={styles.baseStatsText(typesColors[item.types[0]])}
                    >
                        HP
                    </Text>
                    <Text
                        style={styles.baseStatsText(typesColors[item.types[0]])}
                    >
                        SATK
                    </Text>
                    <Text
                        style={styles.baseStatsText(typesColors[item.types[0]])}
                    >
                        SDEF
                    </Text>
                    <Text
                        style={styles.baseStatsText(typesColors[item.types[0]])}
                    >
                        SPD
                    </Text>
                </View>
                <View style={styles.gapper8} />
                <View style={styles.slimGrayVertical} />
                <View style={styles.gapper8} />

                {renderStats()}
                <View style={styles.gapper8} />

                <View style={[styles.verticalContainer, styles.progressBar]}>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={item.stats.attack / 100}
                        color={typesColors[item.types[0]]}
                    />
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={item.stats.defense / 100}
                        color={typesColors[item.types[0]]}
                    />
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={item.stats.hp / 100}
                        color={typesColors[item.types[0]]}
                    />
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={item.stats['special-attack'] / 100}
                        color={typesColors[item.types[0]]}
                    />
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={item.stats['special-defense'] / 100}
                        color={typesColors[item.types[0]]}
                    />
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={item.stats.speed / 100}
                        color={typesColors[item.types[0]]}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pokeImage: {
        width: 200,
        height: 200,
        position: 'absolute',
        // left: '25%',
        // marginLeft: ,
        top: -150,
    },
    progressBar: {
        // width: 'auto',
        alignItems: 'stretch',
        display: 'flex',
        flexGrow: 1,
        borderRadius: 1,
        // height: 45,
    },

    titleWrapper: {
        // borderWidth: 1,
        // borderColor: 'yellow',

        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 25,
        justifyContent: 'center',
    },
    titleText: (color) => ({
        color: color,
        fontFamily: 'Poppins_700Bold',
        lineHeight: 20,
        fontSize: 16,
        fontStyle: 'normal',
        // borderWidth: 1,
        // borderColor: 'green',
        textAlign: 'center',
        textAlignVertical: 'center',
    }),
    baseStatsText: (color) => ({
        alignSelf: 'flex-end',
        color: color,
        fontFamily: 'Poppins_700Bold',
        lineHeight: 18,
        fontSize: 12,
        fontStyle: 'normal',

        // textAlign: 'right',
        textAlignVertical: 'center',
    }),
    text: {
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 18,
        color: '#212121',
        fontFamily: 'Poppins_400Regular',
    },
    textDetails: {
        fontSize: 10,
        color: '#666666',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '96%',
        // height: 412,
        backgroundColor: 'azure',
        // borderWidth: 2,
        // borderColor: 'cadetblue',
        borderRadius: 8,
        paddingTop: 50,
        paddingBottom: 30,
        // marginBottom: 25,
    },
    typesContainer: {
        // borderWidth: 1,
        // borderColor: '#74CB48',
        // backgroundColor: '#74CB48',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        padding: 0,
        width: 200,
        height: 'auto',
    },
    typeBox: (color) => ({
        fontFamily: 'Poppins_700Bold',
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        // fontWeight: 'bold',
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

        backgroundColor: color,
        borderRadius: 10,
    }),

    infoWrapper: {
        // borderWidth: 1,
        // borderColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: 250,
        // borderWidth: 1,
        // borderColor: 'green',
        borderRadius: 10,
        // backgroundColor: 'rgba(0, 6, 144, 0.55)',
        paddingHorizontal: 8,
        paddingVertical: 6,
    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        height: 60,
        // borderWidth: 1,
    },
    infoDetails: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 10,
        // borderWidth: 1,
        // borderColor: '#74CB48',
    },
    infoAbilities: {
        flexDirection: 'column',
        paddingVertical: 0,
    },

    gapper8: {
        marginHorizontal: 4,
    },
    slimGrayVertical: {
        borderWidth: 0.5,
        borderColor: '#E0E0E0',
        height: '100%',
    },
    divider: {
        height: 16,
        width: '100%',
        // borderWidth: 0.5,
        // borderColor: 'purple',
    },

    baseStatsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 320,
        // borderWidth: 0.5,
        // borderColor: '#74CB48',
        // height: 100,
    },
    verticalContainer: {
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
});

export default PokeCard;
