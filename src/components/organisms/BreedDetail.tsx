import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import BreedDescriptionBlock from '../molecules/BreedDescriptionBlock';

const screenHeight = Dimensions.get('window').height;

interface Props {
    breed: any;
}

const BreedDetail = ({ breed }: Props) => {
    return (
        <View style={styles.container}>
            {breed.image?.url ? (
                <Image source={{ uri: breed.image.url }} style={styles.image} />
            ) : (
                <Image
                    source={require('../../assets/images/no-breed-image.png')}
                    style={styles.image}
                />
            )}
            <View style={styles.floatingContent}>
                <ScrollView style={styles.scrollContent}>
                    <BreedDescriptionBlock
                        description={breed.description}
                        origin={breed.origin}
                        intelligence={breed.intelligence}
                        adaptability={breed.adaptability}
                        lifeSpan={breed.life_span}
                    />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    floatingContent: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -30,
        paddingBottom: 32,
    },
    image: {
        width: '100%',
        height: screenHeight * 0.5,
        resizeMode: 'cover',
    },
    scrollContent: {
        flex: 1,
    },
});

export default BreedDetail;
