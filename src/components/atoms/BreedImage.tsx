import React from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Dimensions,
    View,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('window').height;

interface Props {
    uri?: string;
    name?: string;
}

export const BreedImage = ({ uri, name = 'Cat' }: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handlePress = () => {
        if (uri) navigation.navigate('ImageViewer', { uri, name });
    };

    return (
        <Pressable onPress={handlePress} style={styles.imageWrapper}>
            <Image
                source={uri ? { uri } : require('../../assets/images/no-breed-image.png')}
                style={styles.image}
            />
            {uri && (
                <View style={styles.overlayTop}>
                    <Ionicons name="expand-outline" size={24} color="#fff" />
                    <Text style={styles.overlayText}>Tap to enlarge</Text>
                </View>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    imageWrapper: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: screenHeight * 0.5,
        resizeMode: 'cover',
    },
    overlayTop: {
        position: 'absolute',
        top: 12,
        right: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    overlayText: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 4,
    },
});
