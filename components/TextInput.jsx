import React, { useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../utils/theme';

const TextInput = ({
    isName,
    isNewPassword,
    isConfirmPassword,
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
        Animated.timing(fadeAnim, {
            toValue: 25,
            duration: 100,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleOnFocus = () => {
        fadeIn();
        setOnFocus(true);
    };

    const handleOnBlur = () => {
        fadeOut();
        setOnFocus(false);
    };

    if (isSearchBox) {
        return (
            <Animated.View style={{ marginVertical: fadeAnim, flex: 1 }}>
                <View style={styles.container}>
                    <Input
                        onBlur={handleOnBlur}
                        onFocus={handleOnFocus}
                        style={styles.inputSearch}
                        selectionColor={theme.colors.primary}
                        underlineColor="transparent"
                        activeUnderlineColor={
                            !errorText || !touched
                                ? 'transparent'
                                : theme.colors.error
                        }
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
            {isEmail && errorText && touched && (
                <Text style={styles.error}>{errorText}</Text>
            )}
            {isPassword && errorText && touched && (
                <Text style={styles.error}>{errorText}</Text>
            )}
            {isName && errorText && touched && (
                <Text style={styles.error}>{errorText}</Text>
            )}
            {isNewPassword && errorText && touched && (
                <Text style={styles.error}>{errorText}</Text>
            )}
            {isConfirmPassword && errorText && touched && (
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
    inputSearch: {
        backgroundColor: theme.colors.surface,
        fontSize: 14,
        height: 34,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
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
