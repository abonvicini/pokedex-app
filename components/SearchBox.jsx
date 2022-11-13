import React from 'react';
import { StyleSheet } from 'react-native';
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
        <TextInput
            placeholder="Buscar..."
            placeholderTextColor={'darkslategray'}
            onChangeText={(e) => handleQuery(e)}
            name="search"
            isSearchBox={true}
            // style={styles.searchBar}
            {...props}
        />
    );
};

const styles = StyleSheet.create({});

export default SearchBox;
