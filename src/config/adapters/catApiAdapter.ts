import { AxiosAdapter } from './http.adapter';
import { CAT_API_KEY, CAT_API_URL } from '../../constants';

export const catApiFetcher = new AxiosAdapter({
    baseURL: CAT_API_URL,
    headers: {
        'x-api-key': CAT_API_KEY,
    },
});
