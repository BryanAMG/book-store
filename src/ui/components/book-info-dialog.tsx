import type { Book } from "@/types/book"
import Image from "next/image"
import { ButtonCloseModal } from "./button-close-modal"
import { ButtonAddFavoriteBooks } from "./button-add-read-list"


export function BookInfo(book: Book) {
    const synopsisText = book.synopsis.length > 140 ? `${book.synopsis.split(" ", 40).join(" ")}...` : book.synopsis
    return <div className="absolute inset-0 z-30 grid place-items-center bg-black/80" >
        <article className="flex items-start justify-center bg-yellow-100 gap-3 p-3 text-black max-w-[680px] flex-col rounded-sm relative transition-colors md:flex-row md:gap-8 md:p-8 ">
            <ButtonCloseModal />
            <picture className="h-80 w-auto rounded-lg shadow-2xl mx-auto">
                <Image
                    className=" w-full h-full object-cover "
                    src={book.cover}
                    alt={`image of ${book.title} book`}
                    width={310}
                    height={450} />
            </picture>
            <div className="flex-1 w-full  h-80 flex flex-col gap-4 ">
                <header className="flex flex-col items-center justify-center gap-1 md:items-start">
                    <h3 className="text-lg">{book.title}</h3>
                    <h4 className="text-sm"> <i>{book.author} - {book.year}</i>  </h4>
                    <span className="py-1.5 px-5 w-fit rounded-full bg-gray-600 text-sm text-white">{book.genre}</span>
                </header>
                <p>
                    <span className="text-2xl">{book.synopsis[0]}</span>
                    <span className="text-pretty">{synopsisText}</span>
                </p>
                <footer className="flex-1 flex flex-col justify-end">
                    <ButtonAddFavoriteBooks book={book} large key={book.ISBN} >
                        <span>Añadir a la lista de lectura</span>
                    </ButtonAddFavoriteBooks>
                </footer>

            </div>
        </article>
    </div>
}