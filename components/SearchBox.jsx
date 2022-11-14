import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TextInput from './TextInput';

const SearchBox = ({ setDataQuery, data, ...props }) => {
    const handleQuery = (str) => {
        const query = data.filter((poke) =>
            poke.name.toLowerCase().includes(str.toLowerCase()),
        );
        console.log(query);
        setDataQuery((prev) => (prev = query));
    };

    return (
        <View style={styles.searchBox}>
            <TextInput
                placeholder="Buscar..."
                onChangeText={(e) => handleQuery(e)}
                name="search"
                isSearchBox={true}
                // style={styles.searchBar}
                {...props}
            />
            <Image
                style={styles.searchImg}
                source={require('../img/searchX4.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchImg: {
        resizeMode: 'center',
        alignSelf: 'center',
    },
    searchBox: {
        // flex: 1,
        // borderWidth: 1,
        marginBottom: 8,
        flexDirection: 'row',
    },
});

export default SearchBox;
