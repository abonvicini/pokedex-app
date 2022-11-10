import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { usePokeSetUp } from '../hooks/usePokeSetUp';
import MiniCardFlatList from '../components/MiniCardFlatList';

const PokeHome = ({ navigation }) => {
    const { pokeData, statusSetUp } = usePokeSetUp();

    if (statusSetUp !== 'success') {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* <Text>PokeHome</Text> */}
            {/* HeaderHome */}
            <View style={styles.headerPokedex}>
                <Image style={styles.imageHeader} source={require('../img/pokeball-header.png')} />
                <Text>poke header</Text>
            </View>
            {/* SearchBox */}
            {/* PokemonCardsList */}
            <MiniCardFlatList pokeData={pokeData} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageHeader: {

        height: 24,
        width: 24,
        
    },
    headerPokedex: {
        flex: 1,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default PokeHome;
