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
            {breed.image?.url && (
                <Image source={{ uri: breed.image.url }} style={styles.image} />
            )}
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: screenHeight * 0.4,
        resizeMode: 'cover',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    scrollContent: {
        flex: 1,
    },
});

export default BreedDetail;
