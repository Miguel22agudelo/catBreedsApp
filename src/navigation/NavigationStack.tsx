import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DetailScreen from '../screens/Detail/DetailScreen';
import LandingScreen from '../screens/Landing/LandingScreen';
import SplashScreen from '../screens/Splash/SplashScreen';

export type RootStackParamList = {
    Splash: undefined;
    Landing: undefined;
    Detail: { breed: any }; // ajustaremos tipo luego
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = () => (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Landing" component={LandingScreen} options={{ title: 'Catbreeds' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
);

export default NavigationStack;
