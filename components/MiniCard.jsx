import React from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ToastAndroid,
    Platform,
} from 'react-native';
import UserCtx from '../contexts/userCtx';
import { typesColors } from './PokeCard';

const MiniCard = ({ item, navigation }) => {
    const { user } = React.useContext(UserCtx);
    const handleNavigate = () => {
        navigation.navigate('PokeDetails', { pokeName: item.id });
    };

    const handleNotLogged = () => {
        Platform.OS === 'android'
            ? ToastAndroid.show(
                  'Necesitas estar logeado para ver los detalles de un Pokémon',
                  ToastAndroid.SHORT,
              )
            : Alert.alert(
                  'No permitido',
                  'Para poder ver los stats de un Pokémon, primero debes logearte',
              );
    };

    return (
        <TouchableHighlight
            activeOpacity={0.5}
            underlayColor={'#EEEEEE'}
            onPress={user ? handleNavigate : handleNotLogged}
            style={styles.miniCardContainer(typesColors[item.types[0]])}
        >
            <View>
                <View style={styles.headerMiniCard}>
                    <Text
                        style={styles.textHeaderMiniCard(
                            typesColors[item.types[0]],
                        )}
                    >
                        {item.id}
                    </Text>
                </View>
                <View style={styles.contentMiniCard}>
                    <Image
                        style={styles.pokeImageMiniCard}
                        source={{ uri: `${item.img}` }}
                    />
                </View>
                <View style={styles.footerMiniCard(typesColors[item.types[0]])}>
                    <Text style={styles.textFooterMiniCard}>{item.name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    miniCardContainer: (color) => ({
        //Display
        // display: 'flex',
        // marginHorizontal: 5,
        // flex: 1,

        flexDirection: 'column',
        alignItems: 'flex-start',
        minWidth: 80,
        //Colors
        backgroundColor: '#FFFFFF',
        //Decos
        borderColor: color,
        borderWidth: 1,
        borderRadius: 8,
        width: '32%',
        // aspectRatio: 3 / 1,
    }),
    headerMiniCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

        paddingTop: 8,
        paddingHorizontal: 8,

        // height: 16,
    },
    textHeaderMiniCard: (color) => ({
        // width: ,

        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 16,

        display: 'flex',
        alignItems: 'center',
        textAlign: 'right',
        width: '100%',
        color: color,
    }),
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
    footerMiniCard: (color) => ({
        // display: 'flex',
        // height: 'auto',
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent: 'stretch',

        paddingVertical: 4,
        paddingHorizontal: 2,

        backgroundColor: color,

        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    }),
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

export default MiniCard;
