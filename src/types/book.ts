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

export interface FavoriteBook {
    book: Book,
    calification: number,
    isReaded: boolean,
}


