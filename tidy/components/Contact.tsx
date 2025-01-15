import Link from 'next/link'
import { PhoneCall, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">Contact Us</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <PhoneCall className="w-6 h-6 text-blue-600 mr-4" />
              <Link href="tel:+2349064484955" className="text-lg hover:text-blue-600 transition-colors duration-300">
                +2349064484955
              </Link>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <Link href="mailto:info@cleaningservice.com" className="text-lg hover:text-blue-600 transition-colors duration-300">
                info@cleaningservice.com
              </Link>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-4" />
              <p className="text-lg">123 Cleaning Street, City, Country</p>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md" />
            <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-gray-300 rounded-md"></textarea>
            <button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 font-semibold py-3 px-6 rounded-md text-lg w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

