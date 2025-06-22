import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BreedDetail from '../../components/organisms/BreedDetail';
import { RootStackParamList } from '../../navigation/RootNavigator';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen = () => {
    const { params } = useRoute<DetailScreenRouteProp>();
    const { breed } = params;
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: breed.name,
            headerTitleAlign: 'center',
        });
    }, [navigation, breed.name]);

    return (
        <View style={styles.container}>
            <BreedDetail breed={breed} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default DetailScreen;
