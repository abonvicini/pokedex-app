import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { usePokeSetUp } from '../hooks/usePokeSetUp';
import MiniCardFlatList from '../components/MiniCardFlatList';
import HeaderPokeList from '../components/HeaderPokeList';
import TextInput from '../components/TextInput';
import { useFocusEffect } from '@react-navigation/native';

const PokeHome = ({ navigation }) => {
    const { pokeData, statusSetUp } = usePokeSetUp();
    const [dataQuery, setDataQuery] = React.useState([]);

    if (statusSetUp !== 'success' ) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>
        );
    }

    const handleQuery = (str) => {
        const query = pokeData.filter(
            (poke) =>
            poke.name.toLowerCase().includes(str.toLowerCase())
        );
        console.log(query)
        setDataQuery((prev) => (prev = query));
    };

    useFocusEffect(
        React.useCallback(() => {
            setDataQuery(pokeData);
            // alert('Screen was focused');
            return () => {
                // alert(randomPoke);
            };
        }, [statusSetUp]),
    );







    return statusSetUp !== 'idle' &&(
        <View style={styles.container}>
            {/* <Text>PokeHome</Text> */}
            {/* HeaderHome */}
            {/* <HeaderPokeList />
            <TextInput
                placeholder='Search...'
                placeholderTextColor={'darkslategray'}
                onChangeText={(e) => handleQuery(e)}
                name='search'
              
            /> */}
            {/* SearchBox */}
            {/* PokemonCardsList */}
            {/* <MiniCardFlatList pokeData={dataQuery} navigation={navigation} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default PokeHome;
