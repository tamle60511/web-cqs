import { Link } from '@inertiajs/react';
import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

// Define TypeScript interfaces
interface Metal {
  name: string;
  description: string;
  image: string;
  alloyCode?: string;
  density?: string;
  meltPoint?: string;
  strength?: string;
}

interface MetalsSectionProps {
  metals?: Metal[];
}

interface MetalCardProps extends Metal {
  index: number;
}

export default function MetalsSection({ metals }: MetalsSectionProps) {
  // Default metals data if not provided via props with added technical specs
  const defaultMetals: Metal[] = [
    {
      name: 'ADC12',
      description: 'Standard Aluminum Die Casting Alloy for Automotive Components',
      image: '/images/Material-1.jpg',
      alloyCode: 'JIS ADC12/A383',
      density: '2.7 g/cm³',
      meltPoint: '575°C',
      strength: '330 MPa'
    },
    {
      name: 'A356',
      description: 'Premium Aluminum Alloy for Gravity Die Casting Applications',
      image: '/images/Material-2.jpg',
      alloyCode: 'AlSi7Mg0.3',
      density: '2.67 g/cm³',
      meltPoint: '615°C',
      strength: '290 MPa'
    },
    {
      name: 'A380',
      description: 'High Strength Aluminum for Complex Components',
      image: '/images/Material-3.jpg',
      alloyCode: 'AlSi8Cu3Fe',
      density: '2.74 g/cm³',
      meltPoint: '595°C',
      strength: '320 MPa'
    }
  ];

  // Use provided metals or default if not available
  const metalItems: Metal[] = metals || defaultMetals;

  return (
    <section className="py-20 bg-neutral-900 text-white relative">
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Industrial accent elements */}
      <div className="absolute top-0 right-0 w-[25%] h-1 bg-gradient-to-l from-primary-600 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-[25%] h-1 bg-gradient-to-r from-primary-600 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center bg-neutral-800/90 px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600">
              <span className="text-sm font-medium tracking-wider uppercase">Aluminum Expertise</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Premium <span className="text-primary-500">Aluminum</span> Alloys for Superior Parts
            </h2>

            <div className="h-0.5 w-16 bg-neutral-700 mb-6"></div>

            <p className="text-neutral-300 mb-8 leading-relaxed">
              CQS specializes in aluminum die-casting technologies with comprehensive capabilities in
              High Pressure Die Casting (HPDC) and Gravity Die Casting (GDC). We select optimal alloys
              for each application to deliver lightweight, durable components for automotive and
              motorcycle manufacturers.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 mr-2"></div>
                <span className="text-neutral-300">Lightweight Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 mr-2"></div>
                <span className="text-neutral-300">High Durability</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 mr-2"></div>
                <span className="text-neutral-300">Recyclable Materials</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 mr-2"></div>
                <span className="text-neutral-300">Precision Tolerances</span>
              </div>
            </div>

            <Link
              href="/technologies"
              className="inline-flex items-center justify-center px-6 py-3
                       bg-gradient-to-r from-primary-600 to-primary-700 text-white
                       font-medium tracking-wide rounded-sm border border-primary-700
                       hover:from-primary-700 hover:to-primary-800 transition-all
                       shadow-lg hover:shadow-primary-900/30 group"
            >
              Our Die Casting Technologies
              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column - Metal Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metalItems.map((metal, index) => (
                <MetalCard
                  key={index}
                  index={index}
                  name={metal.name}
                  description={metal.description}
                  image={metal.image}
                  alloyCode={metal.alloyCode}
                  density={metal.density}
                  meltPoint={metal.meltPoint}
                  strength={metal.strength}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual metal cards
function MetalCard({ name, description, image, alloyCode, density, meltPoint, strength, index }: MetalCardProps) {
  return (
    <div className="bg-neutral-800 overflow-hidden shadow-md border border-neutral-700 group transition-all hover:border-primary-600 hover:shadow-primary-600/10">
      <div className="relative">
        {/* Technical reference number */}
        <div className="absolute top-3 left-3 font-mono text-xs text-white/60 z-20">
          CQS-{(index + 1).toString().padStart(2, '0')}
        </div>

        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Technical overlay pattern */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-neutral-900/30"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px] opacity-10"></div>
        </div>

        {/* Metal name badge */}
        <div className="absolute bottom-0 left-0 w-full p-4 flex items-center">
          <div className="w-1 h-6 bg-primary-500 mr-3"></div>
          <h3 className="text-white text-lg font-bold tracking-wide">{name}</h3>
        </div>

        {/* Technical spec badge */}
        <div className="absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-sm text-xs px-2 py-1 border border-neutral-700 font-mono text-neutral-300">
          {alloyCode}
        </div>
      </div>

      <div className="p-5">
        <p className="text-neutral-300 text-sm mb-4">{description}</p>

        {/* Technical specifications */}
        <div className="mb-4 grid grid-cols-3 gap-2 border-t border-neutral-700 pt-4 mt-4 text-xs">
          <div>
            <div className="text-neutral-500 uppercase mb-1">Density</div>
            <div className="text-white font-medium">{density}</div>
          </div>
          <div>
            <div className="text-neutral-500 uppercase mb-1">Melting Pt</div>
            <div className="text-white font-medium">{meltPoint}</div>
          </div>
          <div>
            <div className="text-neutral-500 uppercase mb-1">Strength</div>
            <div className="text-white font-medium">{strength}</div>
          </div>
        </div>

        <Link
          href={`/alloys/${name.toLowerCase()}`}
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-400 text-sm tracking-wide"
        >
          View Applications
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
