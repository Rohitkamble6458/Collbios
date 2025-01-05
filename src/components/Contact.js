import React from 'react'

export default function Contact() {
  return (
    <>
    <section id="contact" className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-600">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">Have questions? Reach out to us and we’ll get back to you promptly!</p>
        <form className="mt-8 max-w-xl mx-auto">
          <input type="text" placeholder="Your Name" required className="w-full p-4 rounded-md mb-4 border border-gray-300" />
          <input type="email" placeholder="Your Email" required className="w-full p-4 rounded-md mb-4 border border-gray-300" />
          <textarea placeholder="Your Message" rows="5" required className="w-full p-4 rounded-md mb-4 border border-gray-300"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold shadow-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>
    </>
  )
}
