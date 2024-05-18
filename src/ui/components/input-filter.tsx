'use client'
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { Input } from "./input"
import { useDebouncedCallback } from 'use-debounce'

interface Props {
    placeholder: string
}
const WAIT_BETWEEN_CHANGE = 500

export function InputFilter({ placeholder }: Props) {
    const { replace } = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentSearch = searchParams.get('search') ?? ''

    const handleChange = useDebouncedCallback((search: string) => {
        const params = new URLSearchParams(searchParams)
        if (!search) {
            params.delete('search')
        } else {
            params.set('search', search)
        }
        params.delete('page')
        replace(`${pathname}/?${params.toString()}`)
    }, WAIT_BETWEEN_CHANGE)

    return <Input
        onChange={event => handleChange(event.target.value)}
        defaultValue={currentSearch}
        placeholder={placeholder}
        className="w-80 text-black" />
}