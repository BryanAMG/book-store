import Image from "next/image";
import books from '@/lib/books.json'

export default function Home() {
  const [example] = books.books
  const {
    cover,
    title
  } = example
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3 ">
      <article className="group w-40 flex flex-col items-center ">
        <picture className="relative overflow-hidden ">
          <Image className=" w-full h-auto object-cover group-hover:brightness-50 transition duration-300" src={cover} alt={`image of ${title} book`} width={310} height={450} />
          <div className="absolute inset-0 grid place-items-center ">
            <div className="flex py-2 px-4 bg-black gap-6 cursor-pointer rounded-full translate-y-[350%] group-hover:translate-y-0  transition-transform">
              <span className="w-8 h-8 flex justify-center items-center hover:text-blue-700">ver </span>
              <span className="w-8 h-8 flex justify-center items-center hover:text-blue-700">add </span>
            </div>
          </div>
        </picture>
        <h3 className="mt-2 font-semibold text-center truncate">{title}</h3>
      </article>

    </section>
  );
}
