import React, { useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useCatBreedsPaginated } from '../../hooks/useCatBreedsPaginated';
import BreedCard from '../molecules/BreedCard';
import SearchInput from '../molecules/SearchInput';

const BreedList = ({ onPress }: { onPress: (breed: any) => void }) => {
    const { breeds, loading, loadMoreBreeds } = useCatBreedsPaginated();
    const [search, setSearch] = useState('');

    const filteredBreeds = useMemo(() => {
        return breeds.filter((b) =>
            b.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, breeds]);

    return (
        <View style={{ flex: 1 }}>
            <SearchInput value={search} onChangeText={setSearch} />
            <FlatList
                data={filteredBreeds}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <BreedCard breed={item} onPress={() => onPress(item)} />
                )}
                onEndReached={() => {
                    if (!search) {
                        loadMoreBreeds();
                    }
                }}
                onEndReachedThreshold={0.3}
                ListFooterComponent={loading ? <ActivityIndicator /> : null}
                contentContainerStyle={styles.list}
                initialNumToRender={10}
                maxToRenderPerBatch={5}
                windowSize={10}
            />
            {!loading && filteredBreeds.length === 0 && (
                <Text style={styles.noResults}>No results found</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        paddingBottom: 20,
    },
    noResults: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#666',
    },
});

export default BreedList;
