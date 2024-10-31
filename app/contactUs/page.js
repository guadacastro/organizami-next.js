'use client'
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="py-[10vh] title-text text-center borel-text bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
          Contact Us
        </h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-orange to-pink" />
          
          <div className="p-6 sm:p-12">
            <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12 font-poppins">
              Have any questions or suggestions? We'd love to hear from you!
            </p>

            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 font-poppins">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink focus:border-transparent outline-none transition duration-200 font-poppins"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink focus:border-transparent outline-none transition duration-200 font-poppins"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 font-poppins">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink focus:border-transparent outline-none transition duration-200 resize-none font-poppins"
                  placeholder="What would you like to tell us?"
                />
              </div>

              <div className="flex justify-center pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-white font-borel text-lg
                    bg-gradient-to-r from-orange to-pink hover:from-pink hover:to-violet
                    transform transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 sm:mt-16 text-center text-gray-600">
          <p className="font-poppins mb-2 sm:mb-4">
            Or reach us directly at:
          </p>
          <p className="font-borel text-lg sm:text-xl bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
            contact@organizami.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;