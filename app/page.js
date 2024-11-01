'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const buttonVariants = {
    initial: { scale: 1 },
    tap: { 
      scale: 0.95,
      boxShadow: "0 0 20px rgba(255, 182, 193, 0.7)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(255, 182, 193, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-16 px-4 sm:px-8 lg:px-16">
      <main className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        <section className="flex flex-col items-center justify-evenly h-full w-full gap-10">
          <h1 
            className="py-[10vh] title-text borel-text bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent"
          >
            Welcome to Organizami
          </h1>
          <h2 className="text-pink text-[1.5rem] sm:text-xl p-3 text-center font-monserrat">
            Organize your life with ease
          </h2>
          
          <Link href="/todo">
            <motion.button
              className="text-white text-lg sm:text-xl font-bold bg-gradient-to-b from-pink to-orange p-3 rounded-lg hover:bg-gradient-to-b hover:from-orange hover:to-pink transition-all duration-900 shadow-xl my-[5vh]"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Get Started
            </motion.button>
          </Link>
        </section>
      </main>
    </div>
  );
}
