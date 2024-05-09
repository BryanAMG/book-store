'use client'
import { useReadListStore } from '@/store/read-list'
import cn from 'clsx'
import { ReadListCloseButton } from '../icons'

export function ReadListAside() {
    const isOpenModal = useReadListStore(state => state.isOpenModal)
    const setIsOpenModal = useReadListStore(state => state.setIsOpenModal)
    const favoriteBooks = useReadListStore(state => state.favoriteBooks)

    return <aside className={cn('fixed z-20 w-full max-w-[452px] flex flex-col h-screen shadow-card bg-white text-black p-3 top-0 right-0 origin-right duration-200 ease-out transition-transform', isOpenModal && 'scale-x-100', !isOpenModal && 'scale-x-0')}>
        <header>
            <h2 className='text-xl font-semibold '>Lista de lectura</h2>
            <button className='w-4 h-4 grid place-items-center hover:text-red-500' onClick={setIsOpenModal}>
                <ReadListCloseButton />
            </button>
            {/* posible orden y filtro :v */}
        </header>
        <section className='flex flex-col'>
            <article className='flex gap-5 my-2 p-2 transform-color duration-300 hover:bg-blue-300  xl:h-64 xl:w-full animate-fade-in'>
                <picture className='relative h-full w-[150px] xl:w-[150px] shadow-[-4.0px_5.0px_8.0px_rgba(0,0,0,0.38)]'>
                    <img className='w-full h-full object-cover' src="" alt="image of title book" />
                </picture>
                <div className='flex flex-col gap-4 w-4/6 xl:max-w-[200px]'>
                    <h3 className="text-lg truncate max-w-[120px] xl:max-w-none">titulo</h3>
                    <h4 className="text-sm mt-[-10px]"><i>J.K. Rowling</i></h4>
                    <span className="py-1.5 px-4 text-sm w-fit rounded-full bg-gray-600 text-light">Fantasía</span>
                    {/* stars */}
                    {/* state_reading */}
                </div>
            </article>
        </section>
    </aside>
}
