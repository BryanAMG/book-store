'use client'
import { useSearchParams } from "next/navigation";
import { PaginationLink, PaginationNext, PaginationPrevious } from "./pagination-Link";

export function Pagination({ totalPages }: { totalPages: number }) {
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page') ?? 1)
    const createPageURL = (page: number) => {
        const params = new URLSearchParams(searchParams)
        if (page === 1) params.delete('page')
        else params.set('page', page.toString())
        return `/?${params.toString()}`
    }
    const allPages = Array(totalPages).fill(null).map((_, i) => i + 1)
    return <nav role="navigation"
        aria-label="pagination" className="flex  w-full justify-center items-center my-4">
        <ul className="flex  items-center gap-3">
            <PaginationPrevious className="px-1.5 py-1.5 pr-4 rounded-xl" href={createPageURL(currentPage - 1)} isDisabled={currentPage <= 1} />
            <ul className="flex items-center justify-center gap-2">
                {
                    allPages.map(page => <PaginationLink
                        key={page}
                        href={createPageURL(page)}
                        isActive={currentPage === page}
                        className="w-8 h-8 grid place-items-center rounded-md" >
                        {page}
                    </PaginationLink>)
                }

            </ul>

            <PaginationNext className="px-1.5 py-1.5 pl-4 rounded-md" href={createPageURL(currentPage + 1)} isDisabled={currentPage >= totalPages} />
        </ul>
    </nav>
}