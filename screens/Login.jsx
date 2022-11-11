//Firebase imports
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
const app = initializeApp(firebaseConfig);
const auth = getAuth();

import UserCtx from '../contexts/userCtx';
import { Formik } from 'formik';

import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    ActivityIndicator,
    TextInput,
} from 'react-native';
import { loginSchema } from '../schemas/validationSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { isLoading } from 'expo-font';

const Separator = () => <View style={styles.separator} />;

const Login = ({ navigation }) => {
    const { user, setUser } = React.useContext(UserCtx);
    const [loading, setLoading] = React.useState(true);
    const [errorAuth, setErrorAuth] = React.useState(false);

    const stateChange = (user) => {
        setUser((prev) => (prev = user));
        if (loading) setLoading(false);
    };

    React.useEffect(() => {
        console.log('loading: ', loading);
        console.log('Usuario persistido: ', user);
        const subscriber = auth.onAuthStateChanged(stateChange);
        return subscriber;
    }, [loading]);

    if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

    const handleLogin = (values, setSubmitting) => {
        // console.log('handleLogin', values.email);
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredentials) => {
                console.log(userCredentials);
                setUser((prev) => ({ ...prev, email: values.email }));
                storeUser(values.email);
                setErrorAuth(false);
            })
            .catch((err) => {
                setErrorAuth(true);
                console.log(err);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    const storeUser = async (user) => {
        try {
            const userEmail = JSON.stringify(user);
            AsyncStorage.setItem('email', userEmail);
        } catch (err) {
            console.log(err);
        }
    };

    const logout = () => {
        auth.signOut()
            .then(() => {
                setUser(null);
                deleteUserFromAsyncStorage('email');
            })
            .catch((err) => console.log(err));
    };

    const deleteUserFromAsyncStorage = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
                handleLogin(values, setSubmitting);
            }}
        >
            {({
                handleSubmit,
                handleBlur,
                handleChange,
                setSubmitting,
                values,
                errors,
                touched,
                isSubmitting,
                isValidating,
            }) => (
                <View style={styles.container}>
                    {!user ? (
                        <View>
                            {isSubmitting ? (
                                <ActivityIndicator />
                            ) : (
                                <>
                                    <TextInput
                                        // style={styles.input}
                                        placeholder="Ingrese email..."
                                        placeholderTextColor={'darkslategray'}
                                        onChangeText={handleChange('email')}
                                        name="email"
                                        value={values.email}
                                        onBlur={handleBlur('email')}
                                        // textAlignVertical="bottom"
                                    />

                                    {errors.email && touched.email && (
                                        <Text>{errors.email}</Text>
                                    )}
                                    <Separator />
                                    <TextInput
                                        // style={styles.input}
                                        placeholder="Ingrese pass..."
                                        placeholderTextColor={'darkslategray'}
                                        onChangeText={handleChange('password')}
                                        name="password"
                                        value={values.password}
                                        onBlur={handleBlur('password')}
                                        // textAlignVertical="bottom"
                                    />
                                    {errors.password && touched.password && (
                                        <Text>{errors.password}</Text>
                                    )}
                                    <Separator />
                                    <Button
                                        title="Login"
                                        onPress={() => {
                                            handleSubmit();
                                        }}
                                    />

                                    {errorAuth && (
                                        <Text>Error en la autenticacion</Text>
                                    )}
                                </>
                            )}
                        </View>
                    ) : (
                        <View>
                            <Text>Registrado con el email: {user.email}</Text>
                            <Separator />
                            <Button title="Log out" onPress={logout} />
                        </View>
                    )}
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        // borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Login;
