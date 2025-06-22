import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    breed: any;
    onPress: () => void;
}

const BreedCard = ({ breed, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.8}>
            {/* Tittle */}
            <View style={styles.headerRow}>
                <Text style={styles.name}>{breed.name}</Text>
                <Text style={styles.more}>More...</Text>
            </View>

            {/* Image */}
            {breed.image?.url ? (
                <Image source={{ uri: breed.image.url }} style={styles.image} />
            ) : (
                <View style={styles.placeholder}>
                    <Image
                        source={require('../../assets/images/placeholder.png')}
                        style={styles.placeholderImage}
                    />
                </View>
            )}

            {/* Info */}
            <View style={styles.footerRow}>
                <Text style={styles.text}>🌍 {breed.origin}</Text>
                <Text style={styles.text}>🧠 {breed.intelligence}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '95%',
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
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 12,
        marginTop: 8,
    },
    image: {
        width: '94%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 16,
        alignSelf: 'center',
    },
    placeholder: {
        width: '100%',
        aspectRatio: 3 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: 'hidden',
    },
    placeholderImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    info: {
        padding: 12,
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    text: {
        fontSize: 14,
        marginBottom: 2,
        color: '#555',
    },
    more: {
        fontWeight: 'bold',
        color: '#0077cc',
    },
});

export default React.memo(BreedCard);
