import React from 'react'

export default function Header() {
  return (
    <>
    {/* Header Section */}
    <header id='header' className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('https://via.placeholder.com/1920x800')` }}></div>
        <h1 className="text-5xl md:text-6xl font-extrabold relative z-10">Welcome to Collabios</h1>
        <p className="mt-6 text-lg md:text-xl relative z-10 max-w-3xl mx-auto">
          Transforming Influencer Marketing by Connecting Brands with the Perfect Creators for Authentic Partnerships.
        </p>
        <div className="mt-8 flex justify-center gap-6 relative z-10">
          <a href="#join" className="bg-white text-purple-600 py-3 px-8 rounded-full font-bold shadow-lg hover:bg-gray-100 transition">Join as a Brand</a>
          <a href="#join" className="bg-white text-purple-600 py-3 px-8 rounded-full font-bold shadow-lg hover:bg-gray-100 transition">Join as an Influencer</a>
        </div>
      </header>
    </>
  )
}
