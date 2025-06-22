import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogoImage from '../atoms/LogoImage';
import TitleText from '../atoms/TitleText';

const SplashHeader = () => (
    <View style={styles.container}>
        <TitleText />
        <LogoImage />
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SplashHeader;
