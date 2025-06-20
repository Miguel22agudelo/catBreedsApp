import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    breed: any;
    onPress: () => void;
}

const BreedCard = ({ breed, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.8}>
            {breed.image?.url && (
                <Image source={{ uri: breed.image.url }} style={styles.image} />
            )}
            <View style={styles.info}>
                <Text style={styles.name}>{breed.name}</Text>
                <Text style={styles.text}>🌍 Origen: {breed.origin}</Text>
                <Text style={styles.text}>🧠 Inteligencia: {breed.intelligence}</Text>
                <Text style={styles.more}>Ver más</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        marginBottom: 16,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        resizeMode: 'cover',
    },
    info: {
        padding: 12,
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        marginBottom: 2,
        color: '#555',
    },
    more: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#0077cc',
    },
});

export default React.memo(BreedCard);
