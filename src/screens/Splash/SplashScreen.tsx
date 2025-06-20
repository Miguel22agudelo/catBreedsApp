import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashHeader from '../../components/molecules/SplashHeader';
import { RootStackParamList } from '../../navigation/NavigationStack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    useEffect(() => {
        console.log('SplashScreen mounted');
        const timeout = setTimeout(() => {
            navigation.replace('Landing');
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.container}>
            <SplashHeader />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default SplashScreen;
