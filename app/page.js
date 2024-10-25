'use client'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen">
        
        <section className="flex flex-col items-center justify-evenly h-full w-full gap-10">
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-b from-violet to-pink via-orange bg-clip-text text-transparent borel-text pt-[10vh]">
            Welcome to Organizami
          </h1>
          <h2 className="text-black text-xl p-3">Organize your life with ease</h2>
          
          <button className="text-white text-xl font-bold bg-gradient-to-b from-pink to-orange p-3 rounded-lg">
            Get Started
          </button>
        </section>

      </main>
    </div>
  );
}
