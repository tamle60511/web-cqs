import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { Car, Bike, Leaf, Tractor, Scale, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

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
      description: 'High-quality aluminum components for automotive systems including brake components, suspension parts, and structural elements.',
      icon: Car,
      image: '/images/Advanced.jpg',
      url: '/industries/automotive'
    },
    {
      name: 'MOTORCYCLE',
      description: 'Precision die-cast components for motorcycle manufacturers, delivering lightweight and high-performance parts.',
      icon: Bike,
      image: '/images/Aluminum.jpg',
      url: '/industries/motorcycle'
    },
    {
      name: 'GREEN ENERGY',
      description: 'Sustainable aluminum products designed for green energy applications, reducing environmental impact while maintaining performance.',
      icon: Leaf,
      image: '/images/cnc.jpg',
      url: '/industries/green-energy'
    },
    {
      name: 'AGRICULTURAL',
      description: 'Durable aluminum components for agricultural equipment and machinery, designed to withstand demanding environments.',
      icon: Tractor,
      image: '/images/Material-1.jpg',
      url: '/industries/agricultural'
    },
    {
      name: 'LIGHTWEIGHT PRODUCTS',
      description: 'Innovative lightweight aluminum solutions that reduce weight, increase efficiency, and improve performance across multiple applications.',
      icon: Scale,
      image: '/images/Material-2.jpg',
      url: '/industries/lightweight-products'
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
            <span className="text-sm font-medium tracking-wider uppercase">Industry Applications</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight text-center">
            Comprehensive <span className="text-primary-600">Aluminum Solutions</span>
          </h2>

          <div className="w-20 h-0.5 bg-neutral-300 mb-8"></div>

          <p className="text-neutral-600 text-center max-w-2xl">
            CQS delivers high-quality aluminum die-cast components across multiple industries,
            with products distributed to Taiwan, the United States, Canada, Mexico, Japan, Italy,
            China, and Southeast Asia.
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
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3
                     bg-gradient-to-r from-primary-600 to-primary-700 text-white
                     font-medium tracking-wide rounded-sm border border-primary-700
                     hover:from-primary-700 hover:to-primary-800 transition-all
                     shadow-lg hover:shadow-primary-900/30 group mb-6 md:mb-0"
          >
            View Our Products
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
        CQS-{(index + 101).toString().padStart(3, '0')}
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
            VIEW PRODUCTS
            <ChevronRight size={14} className="ml-1" />
          </span>
        </div>
      </div>

      <Link href={url} className="absolute inset-0 z-30" aria-label={`Learn more about ${name}`}></Link>
    </div>
  );
}
