import { Book, FavoriteBook } from "@/types/book";
import Image from "next/image";
import { BookToDeleted } from "../icons";
import { StarsRating } from "./stars";
import { ReadingStatus } from "./reading-status";
type Props = FavoriteBook & {
    handleClick: () => void
}
export function BookFavoriteItem({ ISBN, author, isReaded, genre, title, cover, stars, handleClick }: Props) {

    return <article className='flex gap-5 my-2 p-2 transform-color duration-300 hover:bg-blue-100  xl:h-64 xl:w-full animate-fade-in'>
        <picture className='relative group  transition-transform duration-500 h-full w-[150px] xl:w-[150px] shadow-[-4.0px_5.0px_8.0px_rgba(0,0,0,0.38)]'>
            <Image className='w-full h-full object-cover group-hover:brightness-50' src={cover} alt={`portada del libro ${title}`} width={310} height={450} />
            <button className="absolute inset-0 z-10 hidden place-items-center group-hover:grid hover:text-red-500" onClick={handleClick}>
                <BookToDeleted />
            </button>
        </picture>
        <div className='flex flex-col gap-4 w-4/6 xl:max-w-[200px]'>
            <h3 className="text-lg truncate max-w-[120px] xl:max-w-none">{title}</h3>
            <h4 className="text-sm mt-[-10px]"><i>{author}</i></h4>
            <span className="py-1.5 text-white px-4 text-sm w-fit rounded-full bg-gray-600 text-light">{genre}</span>
            <StarsRating ISBN={ISBN} currentRating={stars} />
            <ReadingStatus ISBN={ISBN} isReaded={isReaded} />
        </div>
    </article>
}