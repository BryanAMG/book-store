'use client'

import { ReactNode } from "react"
import cn from 'clsx'

type Props = {
    children: ReactNode,
    ISBN: string,
    large?: boolean
} & React.ComponentProps<"button">

export function ButtonAddFavoriteBooks({ ISBN, large, ...props }: Props) {
    const isInReadList = false
    const classes = cn('cursor-pointer text-white',
        !large && 'w-8 h-8 hover:text-blue-700',
        large && 'rounded-lg w-full text-center px-6 py-3 bg-gray-600 hover:bg-blue-700',
        isInReadList && !large && 'text-blue-700 hover:text-red-500',
        isInReadList && large && 'bg-blue-700 hover:bg-red-500',
    )

    return <button
        className={classes}
        title="Agregar a mis favoritos"
        {...props} />

}