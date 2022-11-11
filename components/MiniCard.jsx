import React from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import UserCtx from '../contexts/userCtx';
import { typesColors } from './PokeCard';

const MiniCard = ({ item, navigation }) => {
    const { user } = React.useContext(UserCtx);
    const handleNavigate = () => {
        navigation.navigate('PokeDetails', { pokeName: item.name });
    };

    const handleNotLogged = () => {
        Alert.alert('Para ver detalles de un Pokémon, primero debes logearte.');
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
                        {item.order}
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        //Tamaño
        width: 104,
        // height: 112,
        //Colors
        backgroundColor: '#FFFFFF',
        //Decos
        borderColor: color,
        borderWidth: 1,
        borderRadius: 8,
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

        paddingVertical: 4,
        paddingHorizontal: 8,

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
