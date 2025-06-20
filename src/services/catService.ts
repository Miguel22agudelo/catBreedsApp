import { catApiFetcher } from '../config/adapters/catApiAdapter';

export const getCatBreeds = async (page: number, limit = 10) => {
    return await catApiFetcher.get<any[]>('/breeds', {
        params: { page, limit },
    });
};
