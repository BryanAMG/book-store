import { Book, FavoriteBook } from '@/types/book'
import { create } from 'zustand'

type Store = {
    isOpenModal: boolean,
    setIsOpenModal: () => void,
    favoriteBooks: FavoriteBook[],
    setFavoriteBooks: (bookData: Book) => void
}

export const useReadListStore = create<Store>()((set, get) => ({
    isOpenModal: false,
    setIsOpenModal: () => set((state) => ({ isOpenModal: !state })),
    favoriteBooks: [],
    setFavoriteBooks: (bookData: Book) => {
        const { favoriteBooks } = get()
        const bookIndex = favoriteBooks.findIndex(({ book }) => book.ISBN === bookData.ISBN)
        let newFavoriteBooks: FavoriteBook[] = []
        if (bookIndex === -1) {
            const bookToAdd: FavoriteBook = {
                book: bookData,
                calification: 0,
                isReaded: false
            }
            newFavoriteBooks = favoriteBooks.concat(bookToAdd)
        } else {
            newFavoriteBooks = favoriteBooks.toSpliced(bookIndex, 1)
        }
        set({ favoriteBooks: newFavoriteBooks })
    }
}))
