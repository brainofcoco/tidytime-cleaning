import Link from 'next/link'
import { PhoneCall } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">TidyTime</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Services</Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</Link>
        </nav>
        <Link
          href="tel:+2349064484955"
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 font-semibold py-2 px-4 rounded-full text-sm flex items-center"
        >
          <PhoneCall className="mr-2" size={16} />
          Call Now
        </Link>
      </div>
    </header>
  )
}

