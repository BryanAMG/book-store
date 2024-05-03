import { HeaderLayout } from "@/ui/components/header-layout";
import type { Metadata } from "next"
import "./globals.css"
import { montserrat } from "@/ui/fonts";


export const metadata: Metadata = {
  title: "Book Store",
  description: "Listado de los libros más populares en las ultimas decadas, escoge tu favorito",
  icons: {
    icon: "/book-store.svg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased min-h-screen`}>
        <div className="h-full w-full max-w-4xl px-4 mx-auto flex flex-col items-center">
          <HeaderLayout />
          <main className="flex mt-4 w-full h-full flex-col items-center justify-between">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
