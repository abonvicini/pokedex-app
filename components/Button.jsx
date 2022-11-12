import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../utils/theme';

const Button = ({ disabled, mode, style, ...props }) => {
    return (
        <PaperButton
            style={[
                styles.button,
                mode === 'outlined' && {
                    backgroundColor: theme.colors.surface,
                },
                style,
            ]}
            labelStyle={styles.text}
            mode={mode}
            color={theme.colors.primary}
            disabled={disabled}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 10,
        paddingVertical: 2,
        // backgroundColor: theme.colors.primary,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    },
});

export default Button;
