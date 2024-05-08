'use client'

import { useSearchParams } from "next/navigation";
import { GenreLink } from "./genre-item";
import { useEffect, useState } from "react";
import { getBooks, getGenresQuantity } from "@/services/books";


export function GenreFilter({ allGenres }: { allGenres: string[] }) {
    const searchParams = useSearchParams()
    const currentGenre = searchParams.get('genre') ?? 'todos'
    const currentSearch = searchParams.get('search') ?? ''

    const [genreQuantity, setGenreQuantity] = useState<Record<string, number>>({})

    useEffect(() => {
        getBooks({ search: currentSearch, page: 0 })
            .then(filterBooks => {
                const data = getGenresQuantity({ filterBooks })
                setGenreQuantity(data)
            })
    }, [currentSearch])


    const createUrlGenre = (genre: string) => {
        const params = new URLSearchParams(searchParams)
        if (genre === 'todos') {
            params.delete('genre')
        } else {
            params.set('genre', genre)
        }
        params.delete('page')

        return `/?${params.toString()}`
    }
    return <ul className="genres flex gap-3 items-center justify-start overflow-auto w-full">
        {
            allGenres.map(genre => <GenreLink
                key={genre}
                name={genre}
                quantity={genreQuantity[genre] ?? 0}
                isActive={currentGenre === genre}
                href={createUrlGenre(genre)} />)
        }

    </ul>
}