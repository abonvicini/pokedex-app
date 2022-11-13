import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Formik } from 'formik';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import UserCtx from '../contexts/userCtx';

const auth = getAuth();

const Separator = () => <View style={styles.separator} />;

const CreateAccount = ({ navigation }) => {
    const { user, setUser } = React.useContext(UserCtx);
    const [errorAuth, setErrorAuth] = React.useState(false);

    const storeUser = async (user) => {
        try {
            const userEmail = JSON.stringify(user);
            AsyncStorage.setItem('email', userEmail);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCreateAccount = (values, setSubmitting) => {
        console.log('handleLogin', values.email);
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredentials) => {
                console.log(userCredentials);
                setUser((prev) => ({ ...prev, email: values.email }));
                storeUser(values.email);
                setErrorAuth(false);
                Alert.alert('Success', 'La cuenta fue creada con exito.');
                navigation.goBack();
            })
            .catch((err) => {
                setErrorAuth(true);
                console.log('error:', err.code);
                if (err.code === 'auth/email-already-in-use') {
                    Alert.alert(
                        'Error',
                        'El email seleccinado ya esta registrado en nuestra base de datos.',
                    );
                }
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            // validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
                handleCreateAccount(values, setSubmitting);
            }}
        >
            {({
                handleSubmit,
                handleBlur,
                handleChange,
                values,
                errors,
                touched,
                isSubmitting,
            }) => (
                <View style={styles.container}>
                    {isSubmitting ? (
                        <ActivityIndicator />
                    ) : (
                        <>
                            <TextInput
                                placeholder="Name"
                                placeholderTextColor={'darkslategray'}
                                onChangeText={handleChange('name')}
                                name="name"
                                value={values.name}
                                onBlur={handleBlur('name')}
                                errorText={errors.name}
                                touched={touched.name}
                                isName={true}
                            />
                            <Separator />
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={'darkslategray'}
                                onChangeText={handleChange('email')}
                                name="email"
                                value={values.email}
                                onBlur={handleBlur('email')}
                                errorText={errors.email}
                                touched={touched.email}
                                isEmail={true}
                            />
                            <Separator />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor={'darkslategray'}
                                onChangeText={handleChange('password')}
                                name="password"
                                value={values.password}
                                onBlur={handleBlur('password')}
                                errorText={errors.password}
                                touched={touched.password}
                                isNewPassword={true}
                            />
                            <Separator />
                            <TextInput
                                placeholder="Repeat password"
                                placeholderTextColor={'darkslategray'}
                                onChangeText={handleChange('passwordRepeat')}
                                name="passwordRepeat"
                                value={values.passwordRepeat}
                                onBlur={handleBlur('passwordRepeat')}
                                errorText={errors.passwordRepeat}
                                touched={touched.passwordRepeat}
                                isNewPassWordRepeat={true}
                            />
                            <Separator />
                            <Button
                                onPress={() => {
                                    console.log('createAccount');
                                    handleSubmit();
                                }}
                                mode="contained"
                            >
                                Create
                            </Button>
                            {errorAuth && (
                                <Text>Error en la autenticacion</Text>
                            )}
                        </>
                    )}
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    separator: {
        marginVertical: 4,
        borderBottomColor: '#737373',
    },
});

export default CreateAccount;
