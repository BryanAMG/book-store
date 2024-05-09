
import { ReadListAside } from "./read-list";
import { ButtonOpenAside } from "./read-list/button-open-aside";

export function Header() {
    return <header className="relative w-full flex justify-between items-center py-3">
        <h1 className="text-2xl italic">BOOK STORE</h1>
        <ButtonOpenAside />
        <ReadListAside />
    </header>
}
