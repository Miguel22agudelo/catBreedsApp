import React, { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImageViewer from 'react-native-image-zoom-viewer';

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

    const images = [{ url: uri }];

    return (
        <View style={styles.container}>
            <ImageViewer
                imageUrls={images}
                enableSwipeDown
                onSwipeDown={() => navigation.goBack()}
                backgroundColor="#000"
                saveToLocalByLongPress={false}
                renderIndicator={() => <></>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});

export default ImageViewerScreen;
