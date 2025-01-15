import Image from 'next/image';
import { Home, Building2, Sofa, Factory, Bug } from 'lucide-react';

const services = [
  {
    name: 'Residential Cleaning',
    icon: Home,
    image:
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300',
  },
  {
    name: 'Commercial Cleaning',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1421940943431-d392fcc1079f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300',
  },
  {
    name: 'Upholstery Cleaning',
    icon: Sofa,
    image:
      'https://images.unsplash.com/photo-1580893196685-f061a838ba99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300',
  },
  {
    name: 'Industrial Cleaning',
    icon: Factory,
    image:
      'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300',
  },
  {
    name: 'Fumigation & Pest Control',
    icon: Bug,
    image:
      'https://plus.unsplash.com/premium_photo-1682126104327-ef7d5f260cf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={service.image || '/placeholder.svg'}
                alt={service.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                </div>
                <p className="text-gray-600">
                  Professional {service.name.toLowerCase()} for a spotless
                  environment.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
