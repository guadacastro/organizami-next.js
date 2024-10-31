'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16 px-4 sm:px-8 lg:px-16">
      <main className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        <section className="flex flex-col items-center justify-evenly h-full w-full gap-10">
          <h1 className="py-[10vh] title-text borel-text bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
            Welcome to Organizami
          </h1>
          <h2 className="text-pink text-[1.5rem] sm:text-xl p-3 text-center font-monserrat">
            Organize your life with ease
          </h2>
          
          <Link href="/todo">
            <button className="text-white text-lg sm:text-xl font-bold bg-gradient-to-b from-pink to-orange p-3 rounded-lg hover:bg-gradient-to-b hover:from-orange hover:to-pink transition-all duration-900 shadow-xl my-[5vh]">
              Get Started
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
