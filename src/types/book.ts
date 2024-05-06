export interface Book {
    title: string;
    pages: string;
    genre: string;
    cover: string;
    synopsis: string;
    year: string;
    ISBN: string;
    author: string;
}


export interface Filters {
    genre?: string,
    search?: string,
    page?: number
}


