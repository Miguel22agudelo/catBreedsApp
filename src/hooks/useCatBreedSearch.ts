import { useState, useCallback } from 'react';
import { searchCatBreeds } from '../services/catService';

export const useCatBreedSearch = () => {
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const search = useCallback(async (query: string) => {
        if (query.trim().length < 2) {
            setSearchResults([]);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const data = await searchCatBreeds(query);
            setSearchResults(data);
        } catch (err) {
            console.error(err);
            setError('Error searching breeds');
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        searchResults,
        loading,
        error,
        search,
    };
};
