import React, { useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../utils/theme';

const TextInput = ({
    isSearchBox,
    isEmail,
    isPassword,
    touched,
    errorText,
    description,
    ...props
}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [onFocus, setOnFocus] = React.useState(false);

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 25,
            duration: 100,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleOnFocus = () => {
        fadeIn();
        setOnFocus(true);
        console.log(fadeAnim);
    };

    const handleOnBlur = () => {
        fadeOut();
        setOnFocus(false);
        console.log(fadeAnim);
    };

    if (isSearchBox) {
        return (
            <Animated.View style={{ marginVertical: fadeAnim, flex: 1 }}>
                <View style={styles.container}>
                    <Input
                        onBlur={handleOnBlur}
                        onFocus={handleOnFocus}
                        style={styles.inputSearch(fadeAnim)}
                        selectionColor={theme.colors.primary}
                        underlineColor="transparent"
                        activeUnderlineColor={
                            !errorText || !touched
                                ? 'transparent'
                                : theme.colors.error
                        }
                        // mode="outlined"
                        {...props}
                    />
                </View>
            </Animated.View>
        );
    }

    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                selectionColor={theme.colors.primary}
                underlineColor="transparent"
                activeUnderlineColor={
                    !errorText || !touched
                        ? theme.colors.primary
                        : theme.colors.error
                }
                // mode="outlined"
                {...props}
            />
            {description && !errorText ? (
                <Text style={styles.description}>{description}</Text>
            ) : null}
            {/* {errorText ? <Text style={styles.error}>{errorText}</Text> : null} */}

            {isEmail && errorText && touched && (
                <Text style={styles.error}>{errorText}</Text>
            )}
            {isPassword && errorText && touched && (
                <Text style={styles.error}>{errorText}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 6,
    },
    input: {
        backgroundColor: theme.colors.surface,
        fontSize: 14,
        height: 50,
    },
    inputSearch: (fadeAnim) => ({
        backgroundColor: theme.colors.surface,
        fontSize: 14,
        height: 34,
        // marginBottom: 4,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }),
    // inputSearchActive: {
    //     marginTop: 40,
    //     marginBottom: 40,

    // },
    description: {
        fontSize: 13,
        color: theme.colors.secondary,
        paddingTop: 8,
    },
    error: {
        fontSize: 13,
        color: theme.colors.error,
        paddingTop: 8,
    },
});

export default TextInput;
