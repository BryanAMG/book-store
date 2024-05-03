import { Input } from "./Input";
import { Categories } from "./categories";

export function FiltersBooks() {
    return <section className=" w-full flex flex-col items-center gap-2">
        <Categories />
        <Input placeholder="Busca por titulo " className="w-80 text-black" />
    </section>
}