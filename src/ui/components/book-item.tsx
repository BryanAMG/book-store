import type { Book } from "@/types/book";
import Image from "next/image";
import { ButtonOpenModal } from "./button-open-modal";
import { ButtonAddFavoriteBooks } from "./button-add-read-list";
import { BookInfo, BookToRead } from "./icons";

export function BookItem(book: Book) {

    return <article className="group mx-auto w-40 flex flex-col items-center overflow-hidden ">
        <picture className="relative overflow-hidden rounded-md shadow-lg ">
            <Image className=" w-full h-[250px] object-cover group-hover:brightness-50 transition duration-500" src={book.cover} alt={`image of ${book.title} book`} width={310} height={450} />
            <div className="absolute inset-0 grid place-items-center ">
                <div className="flex py-1 px-3 bg-black gap-6 cursor-pointer rounded-full translate-y-[400%] duration-500 group-hover:translate-y-0  transition-transform">
                    <ButtonOpenModal ISBN={book.ISBN} />
                    <ButtonAddFavoriteBooks book={book}>
                        <BookToRead />
                    </ButtonAddFavoriteBooks>

                </div>
            </div>
        </picture>
        <h3 className="w-full mt-2 font-semibold text-center truncate">{book.title}</h3>
    </article>
}