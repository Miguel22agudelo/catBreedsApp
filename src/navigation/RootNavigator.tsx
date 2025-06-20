import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/SplashScreen';
import LandingScreen from '../screens/Landing/LandingScreen';
import DetailScreen from '../screens/Detail/DetailScreen';

export type RootStackParamList = {
    Splash: undefined;
    Landing: undefined;
    Detail: { breed: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Landing" component={LandingScreen} options={{ title: 'Catbreeds' }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalle' }} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
