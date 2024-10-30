'use client'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen">
        
        <section className="flex flex-col items-center justify-evenly h-full w-full gap-10">
          <h1 className=" sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold borel-text px-[5vw] sm:px-[10vw] py-[5vh] sm:py-[10vh] gradient-text animate-gradient text-center leading-normal sm:leading-normal overflow-x-hidden break-words">
            Welcome to Organizami
          </h1>
          <h2 className="text-black text-lg sm:text-xl p-3 text-center">
            Organize your life with ease
          </h2>
          
          <button className="text-white text-lg sm:text-xl font-bold bg-gradient-to-b from-pink to-orange p-3 rounded-lg">
            Get Started
          </button>
        </section>

      </main>
    </div>
  );
}
