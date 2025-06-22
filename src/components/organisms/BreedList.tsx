import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useCatBreedsPaginated } from '../../hooks/useCatBreedsPaginated';
import { useCatBreedSearch } from '../../hooks/useCatBreedSearch';
import BreedCard from '../molecules/BreedCard';
import SearchInput from '../molecules/SearchInput';

const BreedList = ({ onPress }: { onPress: (breed: any) => void }) => {
    const { breeds, loading, loadMoreBreeds } = useCatBreedsPaginated();
    const [search, setSearch] = useState('');

    const {
        searchResults,
        loading: searchLoading,
        search: triggerSearch,
    } = useCatBreedSearch();

    const isSearching = search.length > 0;
    const dataToRender = isSearching ? searchResults : breeds;

    const handleSearch = (text: string) => {
        setSearch(text);
        triggerSearch(text);
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchInput value={search} onChangeText={handleSearch} />
            <FlatList
                data={dataToRender}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <BreedCard breed={item} onPress={() => onPress(item)} />
                )}
                onEndReached={() => {
                    if (!isSearching) {
                        loadMoreBreeds();
                    }
                }}
                onEndReachedThreshold={0.3}
                ListFooterComponent={
                    (isSearching && searchLoading) || (!isSearching && loading)
                        ? <ActivityIndicator />
                        : null
                }
                contentContainerStyle={styles.list}
                initialNumToRender={10}
                maxToRenderPerBatch={5}
                windowSize={10}
            />
            {!loading && dataToRender.length === 0 && (
                <View style={styles.noResultsContainer}>
                    <Text style={styles.noResults}>No results found</Text>
                </View>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        paddingBottom: 20,
        paddingTop: 10,
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    noResults: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
    },
});

export default BreedList;
