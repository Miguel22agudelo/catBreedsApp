import React, { useLayoutEffect } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
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
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                maximumZoomScale={3}
                minimumZoomScale={1}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                bouncesZoom={true}
                centerContent={true}
            >
                <Image
                    source={{ uri }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width,
        height: height,
    },
});

export default ImageViewerScreen;
