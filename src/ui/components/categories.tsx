import Link from "next/link";

export function Categories() {
    return <ul className="flex gap-3 space-y-4">
        <li className=" gap-3 bg-white text-black inline-flex items-center justify-center whitespace-nowrap rounded-md  font-semibold ring-offset-background transition-colors hover:bg-white/90">
            <Link href={"#"} className="px-4 py-2">
                <span> Todos</span>
                <span> (8) </span>
            </Link>
        </li>
    </ul>
}