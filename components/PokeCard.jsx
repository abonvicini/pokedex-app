import React from 'react';
import {
    Image,
    ProgressBarAndroid,
    StyleSheet,
    Text,
    View,
} from 'react-native';
// import { ProgressBarAndroid } from 'react-native-community/progress-bar-android';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

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
            {/* <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: `${item.imageArtWork}` }}
            /> */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>{item.title}</Text>
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
                <Text style={styles.titleText}>Base Stats</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.baseStatsWrapper}>
                <View style={styles.verticalContainer}>
                    <Text style={styles.baseStatsText}>ATK</Text>
                    <Text style={styles.baseStatsText}>DEF</Text>
                    <Text style={styles.baseStatsText}>HP</Text>
                    <Text style={styles.baseStatsText}>SATK</Text>
                    <Text style={styles.baseStatsText}>SDEF</Text>
                    <Text style={styles.baseStatsText}>SPD</Text>
                </View>
                <View style={styles.gapper8} />
                <View style={styles.slimGrayVertical} />
                <View style={styles.gapper8} />

                {renderStats()}
                <View style={styles.gapper8} />

                <View style={styles.verticalContainer}>
                    <View style={styles.example}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={item.stats.attack / 100}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    example: {
        marginVertical: 24,
    },
    titleWrapper: {
        borderWidth: 1,
        borderColor: 'yellow',

        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 25,
        justifyContent: 'center',
    },
    titleText: {
        color: 'tomato',
        fontFamily: 'Poppins_700Bold',
        lineHeight: 20,
        fontSize: 16,
        fontStyle: 'normal',
        borderWidth: 1,
        borderColor: 'green',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    baseStatsText: {
        alignSelf: 'flex-end',
        color: 'tomato',
        fontFamily: 'Poppins_700Bold',
        lineHeight: 18,
        fontSize: 12,
        fontStyle: 'normal',

        // textAlign: 'right',
        textAlignVertical: 'center',
    },
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
        width: '100%',
        height: 412,
        backgroundColor: 'azure',
        borderWidth: 2,
        borderColor: 'cadetblue',
        borderRadius: 8,
        paddingTop: 50,
    },
    typesContainer: {
        borderWidth: 1,
        borderColor: 'tomato',
        // backgroundColor: 'tomato',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        padding: 0,
        width: 200,
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

    infoWrapper: {
        borderWidth: 1,
        borderColor: 'blue',
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
        // borderColor: 'tomato',
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
        borderWidth: 0.5,
        borderColor: 'purple',
    },

    baseStatsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 320,
        borderWidth: 0.5,
        borderColor: 'tomato',
        // height: 100,
    },
    verticalContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderWidth: 0.5,
        borderColor: 'blue',
    },
});

export default PokeCard;
