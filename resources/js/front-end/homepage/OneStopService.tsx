import React from 'react';
import { Link } from '@inertiajs/react';
import company from '../images/banner.jpg';
import { Factory, Settings, Hammer, Paintbrush, Wrench, Package, ChevronRight, ExternalLink } from 'lucide-react';

// Define TypeScript interfaces
interface Service {
  title: string;
  description: string;
  icon: React.FC<{ className?: string; size?: number }>;
  code?: string;
}

interface OneStopServiceProps {
  services?: Service[];
}

interface ServiceCardProps extends Service {
  index: number;
}

export default function OneStopService({ services }: OneStopServiceProps) {
  // Default services data if not provided via props
  const defaultServices: Service[] = [
    {
      title: 'High Pressure Die Casting',
      description: 'Advanced aluminum die casting with machines ranging from 250 to 1,650 tons',
      icon: Factory,
      code: 'HPDC'
    },
    {
      title: 'CNC Precision Processing',
      description: 'High-precision CNC machining for complex component manufacturing',
      icon: Settings,
      code: 'CNC'
    },
    {
      title: 'Gravity Die Casting',
      description: 'Specialized gravity casting for premium aluminum components',
      icon: Hammer,
      code: 'GDC'
    },
    {
      title: 'Surface Treatment',
      description: 'Professional painting and surface finishing for enhanced aesthetics and protection',
      icon: Paintbrush,
      code: 'PNT'
    },
    {
      title: 'Assembly Services',
      description: 'Comprehensive assembly solutions with rigorous quality control',
      icon: Wrench,
      code: 'ASM'
    },
    {
      title: 'Packaging & Logistics',
      description: 'Global distribution to Taiwan, the US, Canada, Mexico, Japan, Italy, China, and Southeast Asia',
      icon: Package,
      code: 'PKG'
    }
  ];

  // Use provided services or default if not available
  const serviceItems: Service[] = services || defaultServices;

  return (
    <section className="py-20 bg-neutral-100 relative overflow-hidden">
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical grid lines */}
      <div className="absolute top-0 right-0 bottom-0 w-20 flex flex-col opacity-20">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex-1 border-b border-r border-neutral-800"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text and Services (7 columns) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600">
              <span className="text-sm font-medium tracking-wider uppercase">Comprehensive Services</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
              Complete <span className="text-primary-600">One-Stop</span> Manufacturing Solutions
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-8"></div>

            <p className="text-neutral-600 mb-8 leading-relaxed">
              CQS provides customers with comprehensive "one-stop" services, from die-casting production
              to CNC precision processing, stamping, painting, assembly, and packaging. Our integrated
              approach ensures consistent quality and streamlined production for automotive and motorcycle
              components with global distribution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {serviceItems.map((service, index) => (
                <ServiceCard
                  key={index}
                  index={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  code={service.code}
                />
              ))}
            </div>

            <Link
              href="/technologies"
              className="inline-flex items-center justify-center px-6 py-3
                       bg-gradient-to-r from-primary-600 to-primary-700 text-white
                       font-medium tracking-wide rounded-sm border border-primary-700
                       hover:from-primary-700 hover:to-primary-800 transition-all
                       shadow-lg hover:shadow-primary-900/30 group"
            >
              Discover Our Technologies
              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column - Image (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden shadow-lg border border-neutral-300">
              {/* Technical corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary-600 z-10"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary-600 z-10"></div>

              {/* Technical reference badge */}
              <div className="absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-sm text-xs font-mono text-white px-2 py-1 z-10 border-r border-primary-600">
                CQS-FACILITY
              </div>

              <img
                src={company}
                alt="CQS Manufacturing Facility"
                className="w-full h-full object-cover"
              />

              {/* Technical overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-neutral-900/30 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px] opacity-5"></div>

              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-sm py-3 px-4 border-t border-neutral-700">
                <div className="flex items-center">
                  <div className="w-2 h-6 bg-primary-600 mr-3"></div>
                  <div>
                    <div className="text-white font-medium">Advanced Die Casting Facility</div>
                    <div className="text-neutral-400 text-sm">IATF16949 & ISO9001 Certified | Global Distribution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual service cards
function ServiceCard({ title, description, icon: Icon, code, index }: ServiceCardProps) {
  return (
    <div className="flex items-start p-4 bg-white shadow-sm border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all group">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 bg-neutral-100 border border-neutral-300 flex items-center justify-center group-hover:bg-primary-50 group-hover:border-primary-200 transition-colors">
          <Icon className="text-primary-600" size={22} />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-neutral-900">{title}</h3>
          <span className="text-xs text-neutral-500 font-mono">{code} </span>
        </div>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
}
