import React from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar,
    View,
} from 'react-native';
import { usePokeFetch } from '../hooks/usePokeFetch';
import { usePokeSetUp } from '../hooks/usePokeSetUp';
import { typesColors } from '../components/PokeCard';
import MiniCard from '../components/MiniCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const PokeHome = ({ navigation }) => {
    const { pokeData, statusSetUp } = usePokeSetUp();

    function miniCard({ img, name, order, type }) {}

    const renderListMiniCard = () => {
        // console.log(pokeData[0].types[0]);
        return pokeData.map((poke) => {
            return (
                <MiniCard
                    img={poke.img}
                    name={poke.name}
                    order={poke.order}
                    type={poke.types[0]}
                    navigation={navigation}
                />
            );
        });
    };

    if (statusSetUp !== 'success') {
        return <ActivityIndicator size="small" color="#0000ff" />;
    }

    const onPressHandle = () => {
        console.log(pokeData.length);
    };

    const renderItem = ({ item }) => {
        return (
            <MiniCard
                item={item}
                nav={navigation}
                // onPress={() => setSelectedId(item.id)}
                // backgroundColor={{ backgroundColor }}
                // textColor={{ color }}
            />
        );
    };

    const ItemSeparatorView = () => {
        return (
            //Item Separator
            <View
                style={{
                    height: 15,
                    // width: '100%',
                    // backgroundColor: '#',
                }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>PokeHome</Text> */}
            {/* HeaderHome */}
            {/* SearchBox */}
            {/* PokemonCardsList */}

            {/* MiniPokeCard */}

            {/* {renderListMiniCard()} */}
            {/* <View style={styles.container}> */}
            <FlatList
                data={pokeData}
                renderItem={renderItem}
                keyExtractor={(item) => item.order}
                ItemSeparatorComponent={ItemSeparatorView}
                columnWrapperStyle={styles.separator}
                horizontal={false}
                numColumns={3}
            />
            {/* </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        marginTop: 0,
        // flexDirection: 'row',
        // borderWidth: 2,
        // borderColor: 'blue',
    },
    separator: {
        flex: 1,
        justifyContent: 'space-evenly',
        // paddingTop: 20,
        // marginTop: 10,
    },
});

export default PokeHome;
