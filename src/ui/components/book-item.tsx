import type { Book } from "@/types/book";
import Image from "next/image";
import { ButtonOpenModal } from "./button-open-modal";

export function BookItem({ title, cover, ISBN }: Book) {

    return <article className="group mx-auto w-40 flex flex-col items-center overflow-hidden ">
        <picture className="relative overflow-hidden rounded-md shadow-lg ">
            <Image className=" w-full h-[250px] object-cover group-hover:brightness-50 transition duration-500" src={cover} alt={`image of ${title} book`} width={310} height={450} />
            <div className="absolute inset-0 grid place-items-center ">
                <div className="flex py-2 px-4 bg-black gap-6 cursor-pointer rounded-full translate-y-[350%] group-hover:translate-y-0  transition-transform">
                    <ButtonOpenModal ISBN={ISBN} />
                    <span className="w-8 h-8 flex justify-center items-center hover:text-blue-700">ver </span>
                    <span className="w-8 h-8 flex justify-center items-center hover:text-blue-700">add </span>
                </div>
            </div>
        </picture>
        <h3 className="w-full mt-2 font-semibold text-center truncate">{title}</h3>
    </article>
}