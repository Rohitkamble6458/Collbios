import React from 'react'

export default function Testimonials() {
  return (
    <>
     <section id="testimonials" className="py-20 text-center bg-white">
        <h2 className="text-4xl font-bold text-purple-600">What Our Users Say</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"Collabios helped us find the perfect influencers for our campaign. The results exceeded our expectations!"</p>
            <p className="mt-4 text-purple-600 font-bold">- Brand Manager, XYZ Corp</p>
          </div>
          <div className="max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"I’ve grown my influencer career significantly with Collabios. The platform is user-friendly and effective."</p>
            <p className="mt-4 text-purple-600 font-bold">- Jane Doe, Influencer</p>
          </div>
        </div>
      </section>
    </>
  )
}
