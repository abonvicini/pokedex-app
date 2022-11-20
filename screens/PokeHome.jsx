import React from 'react';
import { StyleSheet, View } from 'react-native';
import { usePokeSetUp } from '../hooks/usePokeSetUp';
import MiniCardFlatList from '../components/MiniCardFlatList';
import HeaderPokeList from '../components/HeaderPokeList';
import SearchBox from '../components/SearchBox';
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
