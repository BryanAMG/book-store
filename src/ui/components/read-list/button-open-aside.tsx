'use client'
import { useReadListStore } from "@/store/read-list";
import { ReadListOpenButton } from "../icons";

export function ButtonOpenAside() {
    const openModal = useReadListStore(state => state.openModal)
    const favoriteBooks = useReadListStore(state => state.favoriteBooks)
    const numberOfBooks = favoriteBooks.length

    return <button className="relative text-white bg-blue-700 rounded-lg p-2 hover:brightness-110  " aria-label="open-readlist" title="Abrir la lista de mis libros favoritos" onClick={openModal}>
        <ReadListOpenButton />
        {
            numberOfBooks > 0 && (<span className="absolute right-0 bottom-0 w-8 h-8 translate-x-1/2 translate-y-1/2 border-4 border-black  rounded-full bg-sky-300 text-base text-black  flex justify-center items-center">{numberOfBooks}</span>)
        }

    </button >
}