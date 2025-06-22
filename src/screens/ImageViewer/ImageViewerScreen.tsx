import React, { useLayoutEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ImageViewerScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<any>();
    const { uri, name } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: name || 'Image',
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitleStyle: {
                color: '#fff',
            },
        });
    }, [navigation, name]);

    return (
        <View style={styles.container}>
            <Image
                source={{ uri }}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width,
        height: height,
    },
});

export default ImageViewerScreen;
