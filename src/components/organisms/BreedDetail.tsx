import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Breed } from '../../types/Breed';
import BreedDescriptionBlock from '../molecules/BreedDescriptionBlock';
import { BreedImage } from '../atoms/BreedImage';

interface Props {
    breed: Breed;
}

const BreedDetail = ({ breed }: Props) => {
    return (
        <View style={styles.container}>
            <BreedImage uri={breed.image?.url} name={breed.name} />

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
    scrollContent: {
        flex: 1,
    },
});

export default BreedDetail;
