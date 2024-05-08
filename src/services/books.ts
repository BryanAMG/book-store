import booksData from '@/lib/books.json'
import type { Book, Filters } from '@/types/book'

const DELAY = 300
const BOOKS_PER_PAGE = 8
const { books } = booksData

export const getBooks = ({ genre = "todos", search = "", page = 1 }: Filters): Promise<Book[]> => {

    return new Promise(resolve => {
        setTimeout(() => {

            const startIndex = (page - 1) * BOOKS_PER_PAGE
            const endIndex = startIndex + BOOKS_PER_PAGE

            if (genre === 'todos' && !search) resolve(!page ? books : books.slice(startIndex, endIndex))

            const fitlerData = books.filter(book => {
                return (
                    (genre === 'todos' || book.genre.toLocaleLowerCase() === genre.toLocaleLowerCase()) &&
                    (!search || book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                )
            })
            resolve(!page ? fitlerData : fitlerData.slice(startIndex, endIndex))
        }, DELAY)
    })


}

export const getGenres = (): Promise<string[]> => {
    return new Promise(resolve => setTimeout(() => resolve(['todos'].concat(Array.from(new Set(books.map(book => book.genre))))), DELAY))
}

export const getBook = (ISBN: string): Promise<Book | undefined> => {
    return new Promise(resolve => setTimeout(() => resolve(books.find(book => book.ISBN === ISBN)), DELAY))
}

export const getGenresQuantity = ({ filterBooks }: { filterBooks: Book[] }) => {
    let genres: Record<string, number> = {}
    let todos = 0
    filterBooks.forEach(book => {
        genres[book.genre] ??= 0
        genres[book.genre] += 1
        todos += 1
    })

    return { todos, ...genres }
}

export const getTotalPages = async ({ genre = "todos", search = "" }: Filters) => {
    const filterBooks = await getBooks({ genre, search, page: 0 })

    const totalBooks = filterBooks.length
    return Math.ceil(totalBooks / BOOKS_PER_PAGE)
}