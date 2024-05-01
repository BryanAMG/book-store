import { ReadListOpenButton } from "./icons";

export function HeaderLayout() {
    return <header className="w-full flex justify-between items-center py-3">
        <h1 className="text-2xl italic">BOOK STORE</h1>
        <button className="relative text-white bg-blue-700 rounded-lg p-2 hover:brightness-110  " aria-label="open-readlist">
            <ReadListOpenButton />
            <span className="absolute right-0 bottom-0 w-8 h-8 translate-x-1/2 translate-y-1/2 border-4 border-black  rounded-full bg-sky-300 text-base text-black  flex justify-center items-center">5</span>
        </button>
    </header>
}
