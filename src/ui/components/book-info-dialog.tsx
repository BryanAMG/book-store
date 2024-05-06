import type { Book } from "@/types/book"
import Image from "next/image"
import { ButtonCloseModal } from "./button-close-modal"
import { ButtonAddFavoriteBooks } from "./button-add-read-list"


export function BookInfo({ ISBN, author, cover, genre, synopsis, title, year }: Book) {
    return <div className="absolute inset-0 z-30 grid place-items-center bg-black/80" >
        <article className="flex items-start justify-center bg-yellow-100 gap-3 p-3 text-black max-w-[680px] flex-col rounded-sm relative transition-colors md:flex-row md:gap-8 md:p-8 ">
            <ButtonCloseModal />
            <picture className="h-80 w-auto shadow-lg">
                <Image
                    className=" w-full h-full object-cover "
                    src={cover}
                    alt={`image of ${title} book`}
                    width={310}
                    height={450} />
            </picture>
            <div className="flex-1 w-full h-full flex flex-col gap-2">
                <h3 className="text-lg">{title}</h3>
                <h4 className="text-sm"> <i>{author} - {year}</i>  </h4>
                <span className="py-1.5 px-5 w-fit rounded-full bg-gray-600 text-sm text-white">{genre}</span>
                <p>
                    <span className="text-2xl">{synopsis[0]}</span>
                    <span>{synopsis.substring(1)}</span>
                </p>
                <ButtonAddFavoriteBooks ISBN={ISBN} large key={ISBN} >
                    <span>Añadir a la lista de lectura</span>
                </ButtonAddFavoriteBooks>
            </div>
        </article>
    </div>
}