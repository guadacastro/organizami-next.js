'use client'
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="py-[10vh] title-text text-center borel-text bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
          About Us
        </h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-orange to-pink" />
          
          <div className="p-6 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-borel text-center mb-8 bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-12 font-poppins leading-relaxed text-center">
              Organizami is designed to help you streamline your daily tasks and boost your productivity. 
              We believe in making task management simple, intuitive, and even enjoyable.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-borel text-center mb-8 bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
                Key Features
              </h3>
              <ul className="space-y-4 text-gray-600 font-poppins">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Create multiple todo lists with custom titles
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Customize each list with different color themes
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Drag and drop tasks to reorder them
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Automatic saving of all your changes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;