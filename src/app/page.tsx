import { Suspense } from "react";
import { BookList } from "@/ui/components/book-list";
import { BookInfo } from "@/ui/components/book-info-dialog";
import { getBook, getTotalPages } from "@/services/books";
import { Pagination } from "@/ui/components/pagination";
import Skeleton from "@/ui/components/skeleton";

export default async function Home({
  searchParams
}: {
  searchParams?: {
    search?: string,
    genre?: string,
    isbn?: string,
    page?: string
  }
}) {
  const search = searchParams?.search ?? ''
  const genre = searchParams?.genre ?? 'todos'
  const page = Number(searchParams?.page ?? 1)

  const isbn = searchParams?.isbn ?? ''
  const book = await getBook(isbn)

  const totalPages = await getTotalPages({ search, genre })

  return (
    <section className="flex w-full flex-col gap-4 items-center justify-center">
      <Suspense key={search + genre + page} fallback={<Skeleton />}>
        <BookList search={search} genre={genre} page={page} />
      </Suspense>
      <Pagination totalPages={totalPages} />
      {
        book && <Suspense fallback={null}><BookInfo {...book} /></Suspense>
      }
    </section>

  );
}
