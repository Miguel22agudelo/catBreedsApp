import { catApiFetcher } from './catApiFetcher';

export const catApiAdapter = {
    searchBreeds: async (query: string) => {
        return await catApiFetcher.get(`/breeds/search?q=${query}`);
    },

    // Aquí podrías añadir más métodos como getBreedsPaginated, etc.
};
