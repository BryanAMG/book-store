import type { Filters, Book } from "@/types/book";
import { BookItem } from "./book-item";
import { getBooks } from "@/services/books";



export async function BookList({ search, genre, page }: Filters) {
    const books: Book[] = await getBooks({ genre, search, page })

    return <section className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8 w-full ">
        {
            books.map(book => <BookItem key={book.ISBN} {...book} />)
        }
    </section>
}