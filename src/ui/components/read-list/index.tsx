'use client'
import { useReadListStore } from '@/store/read-list'
import cn from 'clsx'
import { ReadListCloseButton } from '../icons'
import { BookFavoriteItem } from './book-favorite-item'

export function ReadListAside() {
    const isOpenModal = useReadListStore(state => state.isOpenModal)
    const closeModal = useReadListStore(state => state.closeModal)
    const setFavoriteBooks = useReadListStore(state => state.setFavoriteBooks)
    const favoriteBooks = useReadListStore(state => state.favoriteBooks)

    return <aside className={cn('fixed z-20 w-full max-w-[452px] flex flex-col h-screen shadow-xl bg-white text-black p-3 top-0 right-0 origin-right duration-200 ease-out transition-transform', isOpenModal && 'scale-x-100', !isOpenModal && 'scale-x-0')}>
        <header className='flex justify-between items-center'>
            <h2 className='text-xl font-semibold '>Lista de lectura</h2>
            <button className=' grid place-items-center hover:text-red-500' onClick={closeModal}>
                <ReadListCloseButton />
            </button>
            {/* posible orden y filtro :v */}
        </header>
        <section className='flex flex-col'>
            {
                favoriteBooks.length === 0 && <h2>No hay resultados</h2>
            }
            {
                favoriteBooks.map(book => <BookFavoriteItem key={book.ISBN} {...book} handleClick={() => setFavoriteBooks(book)} />)
            }
        </section>
    </aside>
}
