'use client'

import { ReactNode } from "react"
import cn from 'clsx'
import { useReadListStore } from "@/store/read-list"
import { Book } from "@/types/book"
import { BookToDeleted, BookToRead } from "./icons"

type Props = {
    book: Book,
    large?: boolean
} & React.ComponentProps<"button">

export function ButtonAddFavoriteBooks({ book, large, ...props }: Props) {
    const setFavoriteBooks = useReadListStore(state => state.setFavoriteBooks)
    const favoriteBooks = useReadListStore(state => state.favoriteBooks)
    const isInReadList = favoriteBooks.some(bookFav => bookFav.ISBN === book.ISBN)

    const classes = cn('cursor-pointer',
        !large && 'text-white w-8 h-8  hover:text-blue-700',
        large && 'text-white rounded-lg w-full text-center px-6 py-3 bg-gray-600 hover:bg-blue-700',
        isInReadList && !large && 'text-blue-700 w-8 h-8  hover:text-red-500',
        isInReadList && large && 'bg-blue-700 rounded-lg px-6 py-3  hover:bg-red-500',
    )
    const title = isInReadList ? 'Eliminar de mis favoritos' : "Agregar a mis favoritos"
    const handleClick = () => setFavoriteBooks(book)

    const children = large ?
        (
            <span>{isInReadList ? "Eliminar de la lista de lectura" : "Añadir a la lista de lectura"}</span>
        ) :
        (
            isInReadList ? (<BookToDeleted />) : (<BookToRead />)
        )
    return <button
        className={classes}
        title={title}
        onClick={handleClick}
        {...props} >
        {children}
    </button>

}