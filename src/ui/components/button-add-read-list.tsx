'use client'

import { ReactNode } from "react"
import cn from 'clsx'

interface Props {
    children: ReactNode,
    ISBN: string,
    large: boolean
}

export function ButtonAddFavoriteBooks({ children, ISBN, large }: Props) {
    const isInReadList = false
    const classes = cn('cursor-pointer text-white',
        !large, 'hover:text-blue-700',
        large && 'w-full text-center px-6 py-3 bg-gray-600 hover:bg-blue-700',
        isInReadList && !large && 'text-blue-700 hover:text-red-500',
        isInReadList && large && 'bg-blue-700 hover:bg-red-500',
    )

    return <button className={classes}>
        {children}
    </button>
}