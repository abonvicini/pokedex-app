import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { usePokeSetUp } from '../hooks/usePokeSetUp';
import MiniCardFlatList from '../components/MiniCardFlatList';
import HeaderPokeList from '../components/HeaderPokeList';

const PokeHome = ({ navigation }) => {
    const { pokeData, statusSetUp } = usePokeSetUp();

    if (statusSetUp !== 'success') {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* <Text>PokeHome</Text> */}
            {/* HeaderHome */}
            <HeaderPokeList />

            {/* SearchBox */}
            {/* PokemonCardsList */}
            <MiniCardFlatList pokeData={pokeData} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default PokeHome;
