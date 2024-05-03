import { books } from '@/lib/books.json'
import type { book } from '@/types/book'
export const getBooks = ({ genre = null, search = null }: { genre: string | null, search: string | null }) => {
    if (!genre && !search) return books
    return books.filter(book => {
        return (
            (genre === 'todos' || book.genre.toLocaleLowerCase() === genre?.toLocaleLowerCase()) &&
            (search === null || book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        )
    })
}

export const getGenres = ({ filterBooks }: { filterBooks: book[] }) => {
    let genres: Record<string, number> = {}
    let todos = 0
    filterBooks.forEach(book => {
        genres[book.title] ??= 0
        genres[book.title] += 1
        todos += 1
    })

    return Object.entries({ todos, ...genres })
        .map(([genre, quantity]) => ({ genre, quantity }))
}