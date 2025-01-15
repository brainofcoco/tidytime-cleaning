import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tidy Time Cleaning Service
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Experience spotless perfection with our expert cleaning solutions
          </p>
          <Link
            href="tel:+2349064484955"
            className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 font-semibold py-3 px-6 rounded-full text-lg inline-flex items-center"
          >
            <PhoneCall className="mr-2" size={24} />
            Call +2349064484955
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://plus.unsplash.com/premium_photo-1663011214303-2e603ae271d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional cleaners at work"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
