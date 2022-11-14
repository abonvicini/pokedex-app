import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { usePokeSetUp } from '../hooks/usePokeSetUp';
import MiniCardFlatList from '../components/MiniCardFlatList';
import HeaderPokeList from '../components/HeaderPokeList';
import TextInput from '../components/TextInput';
import { useFocusEffect } from '@react-navigation/native';
import SearchBox from '../components/SearchBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';

const PokeHome = ({ navigation }) => {
    const { pokeData, statusSetUp } = usePokeSetUp();
    const [dataQuery, setDataQuery] = React.useState(null);

    if (statusSetUp === 'idle') {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        statusSetUp === 'success' && (
            <View style={styles.container}>
                <HeaderPokeList />
                <SearchBox setDataQuery={setDataQuery} data={pokeData} />
                <MiniCardFlatList
                    pokeData={dataQuery === null ? pokeData : dataQuery}
                    navigation={navigation}
                />
            </View>
        )
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 40,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default PokeHome;
