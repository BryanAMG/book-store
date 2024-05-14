import { Book, FavoriteBook } from '@/types/book'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Store = {
    isOpenModal: boolean,
    openModal: () => void,
    closeModal: () => void,
    favoriteBooks: FavoriteBook[],
    setFavoriteBooks: (bookData: Book) => void,
    editStartRating: ({ ISBN, stars }: { ISBN: string, stars: number }) => void
    editReadingStatus: ({ ISBN, isReaded }: { ISBN: string, isReaded: boolean }) => void
}

export const useReadListStore = create<Store>()(persist((set, get) => ({
    isOpenModal: false,
    openModal: () => set({ isOpenModal: true }),
    closeModal: () => set({ isOpenModal: false }),
    favoriteBooks: [],
    setFavoriteBooks: (bookData: Book) => {
        const { favoriteBooks } = get()
        const bookIndex = favoriteBooks.findIndex((book) => book.ISBN === bookData.ISBN)
        let newFavoriteBooks: FavoriteBook[] = []
        if (bookIndex === -1) {
            const bookToAdd: FavoriteBook = {
                ...bookData,
                stars: 0,
                isReaded: false
            }
            newFavoriteBooks = favoriteBooks.concat(bookToAdd)
        } else {
            newFavoriteBooks = favoriteBooks.toSpliced(bookIndex, 1)
        }
        set({ favoriteBooks: newFavoriteBooks })
    },
    editStartRating: ({ ISBN, stars }) => {
        const { favoriteBooks } = get()
        const indexBook = favoriteBooks.findIndex((book) => book.ISBN === ISBN)
        if (indexBook === -1) return
        const book = favoriteBooks[indexBook]
        const newBokk = {
            ...book,
            stars
        }
        const newFavoriteBooks = favoriteBooks.with(indexBook, newBokk)
        set({ favoriteBooks: newFavoriteBooks })
    },
    editReadingStatus: ({ ISBN, isReaded }) => {
        const { favoriteBooks } = get()
        const indexBook = favoriteBooks.findIndex((book) => book.ISBN === ISBN)
        if (indexBook === -1) return
        const book = favoriteBooks[indexBook]
        const newBokk = {
            ...book,
            isReaded: !isReaded
        }
        const newFavoriteBooks = favoriteBooks.with(indexBook, newBokk)
        set({ favoriteBooks: newFavoriteBooks })
    },
}), {
    name: "read-list"
}))
