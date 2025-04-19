import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';

// Define certification interface
interface Certification {
  name: string;
  image: string;
  url: string;
  code: string;
  issuer?: string;
  validUntil?: string;
}

const Certifications: React.FC = () => {
  // Enhanced certifications data with technical specifications
  const certifications: Certification[] = [
    {
      name: 'IATF 16949:2016',
      image: '/images/Advanced.jpg',
      url: '#',
      code: 'IATF-16949',
      issuer: 'TÜV Rheinland',
      validUntil: '2026-05'
    },
    {
      name: 'ISO 9001:2015',
      image: '/images/Aluminum.jpg',
      url: '#',
      code: 'ISO-9001',
      issuer: 'TÜV Rheinland',
      validUntil: '2025-10'
    },
    {
      name: 'ISO 14001:2015',
      image: '/images/cnc.jpg',
      url: '#',
      code: 'ISO-14001',
      issuer: 'TÜV Rheinland',
      validUntil: '2025-10'
    },
    {
      name: 'PPAP Level 3 Approval',
      image: '/images/Material-3.jpg',
      url: '#',
      code: 'PPAP-L3',
      issuer: 'Global OEM',
      validUntil: 'Continuous'
    },
    {
      name: 'Eco-friendly Manufacturing',
      image: '/images/Material-2.jpg',
      url: '#',
      code: 'GREEN-MFG',
      issuer: 'Industry Alliance',
      validUntil: '2024-12'
    }
  ];

  // State for tracking active page
  const [activePage, setActivePage] = useState<number>(0);

  // Handlers for carousel navigation
  const handlePrevious = (): void => {
    setActivePage(prev => (prev === 0 ? Math.ceil(certifications.length / 4) - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setActivePage(prev => (prev === Math.ceil(certifications.length / 4) - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certifications" className="py-20 bg-neutral-100 relative overflow-hidden">
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#333_50px,#333_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#333_50px,#333_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.02]"></div>

      {/* Measurement marks */}
      <div className="absolute top-0 left-0 w-full h-2 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-primary-600/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-600/30"></div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600">
            <span className="text-sm font-medium tracking-wider uppercase">Quality Assurance</span>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
            Certifications & <span className="text-primary-600">Achievements</span>
          </h2>

          <div className="w-20 h-0.5 bg-neutral-300 mb-6"></div>

          <p className="text-neutral-600 max-w-2xl mx-auto text-center">
            CQS adheres to international standards for quality management, environmental responsibility,
            and automotive industry requirements to deliver consistent, high-quality aluminum components.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl" data-aos="fade-up">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-3 z-20">
            <button
              onClick={handlePrevious}
              id="prev-certifications"
              className="w-10 h-10 bg-neutral-800 flex items-center justify-center text-white
                     hover:bg-primary-600 transition-colors border border-neutral-700
                     focus:outline-none"
              aria-label="Previous certifications"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-3 z-20">
            <button
              onClick={handleNext}
              id="next-certifications"
              className="w-10 h-10 bg-neutral-800 flex items-center justify-center text-white
                     hover:bg-primary-600 transition-colors border border-neutral-700
                     focus:outline-none"
              aria-label="Next certifications"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="relative overflow-hidden" id="certifications-carousel">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              id="certification-items"
              style={{ transform: `translateX(-${activePage * 100}%)` }}
            >
              {certifications.map((cert, index) => (
                <div key={index} className="min-w-[25%] px-3">
                  <div className="bg-white overflow-hidden shadow-sm border border-neutral-200
                                group hover:border-primary-600 hover:shadow-md transition-all duration-300">
                    <div className="h-60 overflow-hidden relative">
                      {/* Technical reference number */}
                      <div className="absolute top-3 left-3 font-mono text-xs text-white bg-neutral-900/80
                                    px-2 py-1 z-10 border-l border-primary-600">
                        {cert.code}
                      </div>

                      {/* Issuer info */}
                      <div className="absolute top-3 right-3 font-mono text-xs text-white bg-neutral-900/80
                                    px-2 py-1 z-10">
                        {cert.issuer}
                      </div>

                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover transition-transform duration-700
                                 group-hover:scale-105"
                      />

                      {/* Technical overlay patterns */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:6px_6px] opacity-5"></div>

                      {/* Technical corner elements */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20"></div>

                      <div className="absolute inset-x-0 bottom-0 p-3 flex justify-between items-center">
                        <span className="text-white text-xs flex items-center">
                          <Award size={12} className="mr-1" />
                          Valid: {cert.validUntil}
                        </span>

                        <a
                          href={cert.url}
                          className="bg-neutral-900/80 hover:bg-primary-600 text-white text-xs py-1.5 px-3
                                   inline-flex items-center border border-neutral-700 hover:border-primary-700
                                   transition-colors"
                        >
                          View Certificate
                          <ExternalLink size={12} className="ml-1" />
                        </a>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-neutral-900">{cert.name}</h3>
                        <div className="w-2 h-2 bg-primary-600"></div>
                      </div>
                      <div className="h-0.5 w-1/3 bg-neutral-200 mt-2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: Math.ceil(certifications.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePage(index)}
              className={`h-1 transition-all ${
                index === activePage
                  ? 'w-10 bg-primary-600'
                  : 'w-5 bg-neutral-300 hover:bg-primary-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
