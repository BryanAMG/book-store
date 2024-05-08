
import cn from "clsx"
import Link from "next/link"
import { NextPage, PreviusPage } from "./icons"


type PaginationLinkProps = {
    isActive?: boolean,
    href: string,
    isDisabled?: boolean
} &
    React.ComponentProps<"a">

const PaginationLink = ({
    className,
    isActive,
    isDisabled,
    href,
    ...props
}: PaginationLinkProps) => (
    <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={cn(
            "cursor pointer text-white hover:bg-blue-700",
            className,
            isDisabled && "pointer-events-none brightness-50",
            isActive && "outline outline-2 outline-blue-700",
        )}
        {...props}
    />
)

const PaginationPrevious = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Ir a la pagina anterior"
        className={cn("flex gap-1 ", className)}
        {...props}
    >
        <PreviusPage />
        <span>Anterior </span>
    </PaginationLink>
)

const PaginationNext = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Ir a la pagina siguiente"
        className={cn("flex gap-1 ", className)}
        {...props}
    >
        <span>Siguente</span>
        <NextPage />
    </PaginationLink>
)

export {
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
}
