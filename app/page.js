'use client'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen">
        
        <section className="flex flex-col items-center justify-evenly h-full w-full gap-10">
          <h1 className="title-text borel-text px-[5vw] sm:px-[10vw] xl:py-[5vh] sm:py-[10vh] py-[5vh] gradient-text animate-gradient text-center leading-normal sm:leading-normal overflow-x-hidden">
            Welcome to Organizami
          </h1>
          <h2 className="text-pink text-[1.5rem] sm:text-xl p-3 text-center font-monserrat">
            Organize your life with ease
          </h2>
          
          <button className="text-white text-lg sm:text-xl font-bold bg-gradient-to-b from-pink to-orange p-3 rounded-lg hover:bg-gradient-to-b hover:from-orange hover:to-pink transition-all duration-900 shadow-xl my-[5vh]">
            Get Started
          </button>
        </section>

      </main>
    </div>
  );
}
