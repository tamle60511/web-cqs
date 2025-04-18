import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { Car, Smartphone, Server, Wrench, Stethoscope, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

// Define TypeScript interfaces
interface Industry {
  name: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  image: string;
  url: string;
}

interface IndustriesSectionProps {
  industries?: Industry[];
}

interface IndustryCardProps {
  name: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  image: string;
  url: string;
  index: number;
  size?:number
}

export default function IndustriesSection({ industries }: IndustriesSectionProps) {
  // Default industries data if not provided via props
  const defaultIndustries: Industry[] = [
    {
      name: 'AUTOMOTIVE',
      description: 'Precision die-cast components for vehicles, from structural frame parts to high-performance engine components.',
      icon: Car,
      image: '/images/Advanced.jpg',
      url: '/industries/automotive'
    },
    {
      name: 'CONSUMER ELECTRONICS',
      description: 'Lightweight, heat-dissipating aluminum housings and components for modern electronic devices.',
      icon: Smartphone,
      image: '/images/Aluminum.jpg',
      url: '/industries/consumer-electronics'
    },
    {
      name: 'ENTERPRISE TECHNOLOGY',
      description: 'Critical heat sink components and chassis elements for servers and data infrastructure.',
      icon: Server,
      image: '/images/cnc.jpg',
      url: '/industries/enterprise-technology'
    },
    {
      name: 'INDUSTRIAL EQUIPMENT',
      description: 'Durable components for machinery, tools, and industrial applications requiring precision tolerances.',
      icon: Wrench,
      image: '/images/Material-1.jpg',
      url: '/industries/hardware'
    },
    {
      name: 'MEDICAL DEVICES',
      description: 'Lightweight, sterilizable aluminum components for medical devices and diagnostic equipment.',
      icon: Stethoscope,
      image: '/images/Material-2.jpg',
      url: '/industries/medical'
    }
  ];

  // Use provided industries or default if not available
  const industryItems: Industry[] = industries || defaultIndustries;

  // State for current page/slide
  const [activePage, setActivePage] = useState<number>(0);

  // Calculate total number of pages (for mobile/responsive view)
  const totalPages: number = Math.ceil(industryItems.length / 5);

  // Handle navigation
  const handlePrevious = (): void => {
    setActivePage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setActivePage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-neutral-100 relative overflow-hidden">
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical grid lines */}
      <div className="absolute -top-4 -left-4 w-24 h-24 border-b border-r border-primary-600/30"></div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 border-t border-l border-primary-600/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600">
            <span className="text-sm font-medium tracking-wider uppercase">Industry Solutions</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight text-center">
            Precision Engineering for <span className="text-primary-600">Multiple Sectors</span>
          </h2>

          <div className="w-20 h-0.5 bg-neutral-300 mb-8"></div>

          <p className="text-neutral-600 text-center max-w-2xl">
            Our aluminum die-casting and CNC machining capabilities deliver high-performance
            components across various industries, each with specific requirements and challenges.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {industryItems.map((industry, index) => (
              <IndustryCard
                key={index}
                name={industry.name}
                description={industry.description}
                icon={industry.icon}
                image={industry.image}
                url={industry.url}
                index={index}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-neutral-800 rounded-sm w-10 h-10
                     flex items-center justify-center shadow-lg hover:bg-primary-700 transition md:translate-x-0
                     focus:outline-none border border-neutral-700 text-white"
            aria-label="Previous industries"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-neutral-800 rounded-sm w-10 h-10
                     flex items-center justify-center shadow-lg hover:bg-primary-700 transition md:translate-x-0
                     focus:outline-none border border-neutral-700 text-white"
            aria-label="Next industries"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center justify-center px-6 py-3
                     bg-gradient-to-r from-primary-600 to-primary-700 text-white
                     font-medium tracking-wide rounded-sm border border-primary-700
                     hover:from-primary-700 hover:to-primary-800 transition-all
                     shadow-lg hover:shadow-primary-900/30 group mb-6 md:mb-0"
          >
            View All Industry Solutions
            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex space-x-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePage(i)}
                className={`w-8 h-1 transition-all ${
                  i === activePage
                    ? 'bg-primary-600'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to page ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual industry cards
function IndustryCard({ name, description, icon: Icon, image, url, index }: IndustryCardProps) {
  return (
    <div className="group relative h-96 overflow-hidden shadow-md border border-neutral-200 bg-neutral-900">
      {/* Corner technical elements */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 z-20"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 z-20"></div>

      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
      />

      {/* Technical overlay patterns */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-neutral-900/40 z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:6px_6px] opacity-5 z-10"></div>

      {/* Technical reference number */}
      <div className="absolute top-3 right-3 text-white/50 text-xs font-mono z-20">
        IND-{(index + 101).toString().padStart(3, '0')}
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <div className="mb-4 w-14 h-14 bg-neutral-800/70 rounded-sm backdrop-blur-sm flex items-center justify-center mx-auto border border-neutral-700">
          <Icon className="text-primary-400" size={24} />
        </div>

        <h3 className="text-lg font-bold text-white text-center mb-3 tracking-wide">{name}</h3>

        <div className="relative overflow-hidden transition-all duration-300 h-0 group-hover:h-20 opacity-0 group-hover:opacity-100">
          <p className="text-neutral-300 text-center text-sm">
            {description}
          </p>
        </div>

        <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          <span className="inline-flex items-center text-primary-400 text-sm border-b border-primary-700 pb-0.5 hover:text-primary-300 tracking-wider">
            EXPLORE SOLUTIONS
            <ChevronRight size={14} className="ml-1" />
          </span>
        </div>
      </div>

      <Link href={url} className="absolute inset-0 z-30" aria-label={`Learn more about ${name}`}></Link>
    </div>
  );
}
