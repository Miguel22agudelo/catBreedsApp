import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/SplashScreen';
import LandingScreen from '../screens/Landing/LandingScreen';
import DetailScreen from '../screens/Detail/DetailScreen';
import { Breed } from '../types/Breed';
import ImageViewerScreen from '../screens/ImageViewer/ImageViewerScreen';

export type RootStackParamList = {
    Splash: undefined;
    Landing: undefined;
    Detail: { breed: Breed };
    ImageViewer: { uri: string; name?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Landing" component={LandingScreen} options={{ title: 'Catbreeds' }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalle' }} />
            <Stack.Screen name="ImageViewer" component={ImageViewerScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
