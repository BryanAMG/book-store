import { Book, FavoriteBook } from '@/types/book'
import { create } from 'zustand'

type Store = {
    isOpenModal: boolean,
    openModal: () => void,
    closeModal: () => void,
    favoriteBooks: FavoriteBook[],
    setFavoriteBooks: (bookData: Book) => void
}

export const useReadListStore = create<Store>()((set, get) => ({
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
    }
}))
