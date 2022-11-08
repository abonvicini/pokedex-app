import React from 'react';
import { Button, Text, View } from 'react-native';

const PokeDetails = ({ navigation }) => {
    return (
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
                Pokemon Details
            </Text>
            <Button
                title="Return to Home"
                color="tomato"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default PokeDetails;
