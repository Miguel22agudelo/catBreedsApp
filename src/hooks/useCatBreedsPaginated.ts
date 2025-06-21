import { useCallback, useEffect, useState } from 'react';
import { getCatBreeds } from '../services/catService';

export const useCatBreedsPaginated = () => {
    const [breeds, setBreeds] = useState<any[]>([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadMoreBreeds = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const data = await getCatBreeds(page);
            const ids = new Set(breeds.map((b) => b.id));
            const unique = data.filter((b) => !ids.has(b.id));
            setBreeds((prev) => [...prev, ...unique]);
            setHasMore(data.length > 0);
            setPage((prev) => prev + 1);
            setError(null);
        } catch (err) {
            setError('Failed to load cat breeds');
        } finally {
            setLoading(false);
        }
    }, [page, loading, hasMore, breeds]);

    useEffect(() => {
        loadMoreBreeds();
    }, []);

    return { breeds, loading, error, loadMoreBreeds };
};
