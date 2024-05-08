
import cn from 'clsx'
import Link from "next/link";
interface Props {
    name: string,
    quantity: number,
    href: string,
    isActive: boolean
}


export function GenreLink({ name, quantity, href, isActive }: Props) {
    const classname = cn('gap-3  inline-flex items-center justify-center whitespace-nowrap rounded-md  font-semibold ring-offset-background transition-colors',
        isActive && 'bg-blue-700 text-white  ',
        !isActive && 'bg-white text-black hover:bg-white/90'
    )
    return <li key={name} className={classname}>
        {
            isActive ? (
                <div className="px-4 py-2 " >
                    <span className="capitalize "> {name}</span>
                    <span className='w-4'>
                        <span>(</span>
                        <span className='w-2'>{quantity}</span>
                        <span>)</span>
                    </span>
                </div>
            ) : (<Link href={href} className="px-4 py-2 " >
                <span className="capitalize "> {name}</span>
                <span className='w-4'>
                    <span>(</span>
                    <span className='w-2'>{quantity}</span>
                    <span>)</span>
                </span>
            </Link>)
        }

    </li >
}