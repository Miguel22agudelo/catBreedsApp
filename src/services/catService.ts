import { catApiFetcher } from '../config/adapters/catApiFetcher';
import { Breed } from '../types/Breed';

export const getCatBreeds = async (page: number, limit = 10): Promise<Breed[]> => {
    return await catApiFetcher.get<Breed[]>('/breeds', {
        params: { page, limit },
    });
};

export const searchCatBreeds = async (query: string): Promise<Breed[]> => {
    return await catApiFetcher.get<Breed[]>(`/breeds/search?q=${query}`);
};
