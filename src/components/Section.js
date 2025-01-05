import React from 'react'

export default function Section() {
  return (
    <>
    <section id="about" className="py-20 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-600">Who We Are</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
            At Collabios, we specialize in bridging the gap between forward-thinking brands and dynamic influencers. 
            Our platform ensures seamless collaboration, helping you amplify your reach and create meaningful connections.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <img src="https://via.placeholder.com/300x200" alt="Brands working together" className="rounded-lg shadow-md" />
          <img src="https://via.placeholder.com/300x200" alt="Influencer campaigns" className="rounded-lg shadow-md" />
          <img src="https://via.placeholder.com/300x200" alt="Partnership success" className="rounded-lg shadow-md" />
        </div>
      </section>

    </>
  )
}
