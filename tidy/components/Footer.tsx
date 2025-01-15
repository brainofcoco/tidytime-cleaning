import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">TidyTime</h3>
            <p className="text-sm">Professional cleaning services for all your needs.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#about" className="hover:underline">About Us</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Phone: +2349064484955</p>
            <p className="text-sm mb-2">Email: info@tidytime.com</p>
            <p className="text-sm">Address: 123 Cleaning Street, City, Country</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Tidy Time Cleaning Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

