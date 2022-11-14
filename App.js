// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PokeDetails from './screens/PokeDetails';
import PokeHome from './screens/PokeHome';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import UserCtx from './contexts/userCtx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getRandomArbitrary } from './utils/functions';
import DistributiveScreen from './screens/DistributiveScreen';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

function App() {
    // Se apagan warns por comodidad en desarrollo

    LogBox.ignoreLogs([
        'AsyncStorage has been extracted from react-native core',
    ]);
    LogBox.ignoreLogs([
        'ProgressBarAndroid has been extracted from react-native core',
    ]);

    const [user, setUser] = React.useState(null);
    const [fallback, setFallback] = React.useState({});
    let [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const getUserFromAsyncStorage = async () => {
        try {
            const userEmail = await AsyncStorage.getItem('email');
            return userEmail !== null ? setUser({ email: userEmail }) : null;
        } catch (err) {
            console.log(err);
        }
    };

    React.useEffect(() => {
        const savedUser = getUserFromAsyncStorage();
        // console.log('savedUser: ', savedUser.then());
    }, []);

    React.useEffect(() => {
        const random = getRandomArbitrary(1, 950);
        setFallback({ pokeName: random });
        console.log('pokeName', random);
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <UserCtx.Provider value={{ user, setUser }}>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    {/* <Stack.Navigator initialRouteName="Login">
                        <Stack.Screen
                            name="CreateAccount"
                            component={CreateAccount}
                        />
                    </Stack.Navigator> */}
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'PokeHome') {
                                    iconName = focused
                                        ? 'md-home'
                                        : 'md-home-outline';
                                } else if (route.name === 'PokeDetails') {
                                    iconName = focused
                                        ? 'md-information-circle'
                                        : 'md-information-circle-outline';
                                } else if (route.name === 'Profile') {
                                    iconName = focused
                                        ? 'person-circle'
                                        : 'person-circle-outline';
                                }

                                // You can return any component that you like here!
                                return (
                                    <Ionicons
                                        name={iconName}
                                        size={size}
                                        color={color}
                                    />
                                );
                            },
                            tabBarActiveTintColor: 'tomato',
                            tabBarInactiveTintColor: 'gray',
                            headerShown: false,
                        })}
                    >
                        <Tab.Screen name="PokeHome" component={PokeHome} />
                        {user && (
                            <Tab.Screen
                                name="PokeDetails"
                                component={PokeDetails}
                                initialParams={fallback}
                            />
                        )}
                        <Tab.Screen
                            name={'Profile'}
                            component={DistributiveScreen}
                            options={
                                {
                                    // headerStyle: { display: 'no' },
                                    // tabBarIconStyle: { display: 'none' },
                                }
                            }
                        />
                        {/* <Tab.Screen
                            name={'CreateAccount'}
                            component={CreateAccount}
                            options={{
                                // tabBarIconStyle: { display: 'none' },
                                tabBarItemStyle: { display: 'none' },
                                // headerShown: true,
                            }}
                        /> */}
                    </Tab.Navigator>
                </NavigationContainer>
            </QueryClientProvider>
        </UserCtx.Provider>
    );
}

export default App;
