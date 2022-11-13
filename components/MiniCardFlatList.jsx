import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MiniCard from './MiniCard';

const MiniCardFlatList = ({ pokeData, navigation }) => {
    // console.log(pokeData)
    const renderItem = ({ item }) => {
        return <MiniCard item={item} navigation={navigation} />;
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 15,
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={pokeData}
                renderItem={renderItem}
                keyExtractor={(item) => item.order}
                ItemSeparatorComponent={ItemSeparatorView}
                columnWrapperStyle={styles.separator}
                horizontal={false}
                numColumns={3}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    separator: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default MiniCardFlatList;
