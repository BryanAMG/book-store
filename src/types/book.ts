export interface Book {
    ISBN: string;
    title: string;
    pages: string;
    genre: string;
    cover: string;
    synopsis: string;
    year: string;
    author: string;
}


export interface Filters {
    genre?: string,
    search?: string,
    page?: number
}

export type FavoriteBook = Book & {
    stars: number,
    isReaded: boolean,
}


