import React from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { usePokeList } from '../hooks/usePokeList';
import { useRefreshOnFocus } from '../hooks/useRefreshOnFocus';

const HomeScreen = ({ navigation }) => {
    const { isFetching, error, isError, data, status, refetch, pokeNames } =
        usePokeList();

    // useRefreshOnFocus(refetch);

    status === 'success' && console.log('pokeNames: ', pokeNames);
    // status === 'success' && console.log('refresh: ', refresh);

    if (isFetching) return <Text>Loading</Text>;

    const renderPokeNames = () => {
        return pokeNames.map((name) => {
            return (
                <TouchableHighlight
                    key={name}
                    onPress={() =>
                        navigation.navigate('PokeDetails', { pokeName: name })
                    }
                >
                    <View style={styles.button}>
                        <Text>{name}</Text>
                    </View>
                </TouchableHighlight>
            );
        });
    };

    const onPress = () => {
        console.log('hola');
    };

    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                >
                    Home Screen
                </Text>
                {/* <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('PokeDetails')}
                /> */}
            </View>
            <View style={styles.buttonsWrapper}>{renderPokeNames()}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20,
        // margin: 10,

        // width: '100%',

        // marginVertical: 5,
    },
    buttonsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        // borderWidth: 1,
        // borderColor: 'black',
    },
});

export default HomeScreen;
