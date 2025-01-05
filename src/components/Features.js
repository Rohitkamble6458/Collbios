import React from 'react'

export default function Features() {
  return (
    <>
      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600">Why Choose Collabios?</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
            Our platform offers tailored solutions, advanced analytics, and AI-powered matchmaking to ensure your campaigns are impactful and efficient.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-500">Smart Matchmaking</h3>
              <p className="mt-4 text-gray-600">Leverage AI-driven tools to connect with the perfect influencers for your brand.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-500">Detailed Analytics</h3>
              <p className="mt-4 text-gray-600">Track campaign performance with comprehensive metrics and insights.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-500">Seamless Collaboration</h3>
              <p className="mt-4 text-gray-600">Effortlessly manage campaigns with easy-to-use tools and features.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
