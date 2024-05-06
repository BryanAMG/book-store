'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReadListCloseButton } from "./icons";

export function ButtonCloseModal() {
    const searchParams = useSearchParams()

    const createUrl = () => {
        const params = new URLSearchParams(searchParams)
        params.delete('isbn')
        return `/?${params.toString()}`
    }
    return <Link className="text-black w-4 h-4 hover:text-red-500" href={createUrl()}>
        <ReadListCloseButton />
    </Link>
}