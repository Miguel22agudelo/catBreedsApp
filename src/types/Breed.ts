export interface Breed {
    id: string;
    name: string;
    description: string;
    origin: string;
    life_span: string;
    adaptability: number;
    intelligence: number;
    image?: {
        id: string;
        url: string;
        width: number;
        height: number;
    };
}
