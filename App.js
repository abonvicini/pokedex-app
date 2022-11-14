import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokeDetails from './screens/PokeDetails';
import PokeHome from './screens/PokeHome';
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
import { getRandomArbitrary } from './utils/functions';
import DistributiveScreen from './screens/DistributiveScreen';
import { LogBox } from 'react-native';

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
    }, []);

    React.useEffect(() => {
        const random = getRandomArbitrary(1, 906);
        setFallback({ pokeName: random });
    }, [user]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <UserCtx.Provider value={{ user, setUser }}>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
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
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </QueryClientProvider>
        </UserCtx.Provider>
    );
}

export default App;
