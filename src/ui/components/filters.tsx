
import { GenreFilter } from "./genres";
import { getGenres } from "@/services/books";
import { InputFilter } from "./input-filter";

export async function FiltersBooks() {

    const allGenres: string[] = await getGenres()
    return <section className=" w-full flex flex-col items-center gap-4">
        <GenreFilter allGenres={allGenres} />
        <InputFilter placeholder="Buscar por titulo " />

    </section>
}