import { FiltersBooks } from "./filters";
import { Header } from "./header";

export function HeaderLayout() {
    return <div className="z-10 sticky top-0 w-full flex flex-col items-center bg-black">
        <Header />
        <FiltersBooks />
    </div>
}
