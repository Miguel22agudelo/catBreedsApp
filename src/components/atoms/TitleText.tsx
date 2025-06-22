import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TitleText = () => <Text style={styles.title}>Catbreeds</Text>;

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        fontFamily: 'System',
        color: '#333',
    },
});

export default TitleText;
