'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { BookInfo } from "./icons"

export function ButtonOpenModal({ ISBN }: { ISBN: string }) {
    const searchParams = useSearchParams()
    const createUrl = () => {
        const params = new URLSearchParams(searchParams)
        params.set('isbn', ISBN)
        return `/?${params.toString()}`
    }
    return <Link href={createUrl()} className="flex justify-center items-center w-8 h-8 text-white hover:text-blue-700">
        <BookInfo />
    </Link>
}