import React from 'react';
import { Image, StyleSheet } from 'react-native';

const LogoImage = () => (
    <Image
        source={require('../../assets/images/splash-icon.png')}
        style={styles.logo}
        resizeMode="contain"
    />
);

const styles = StyleSheet.create({
    logo: {
        width: 180,
        height: 180,
    },
});

export default LogoImage;
