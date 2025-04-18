import React from 'react';

interface CompanyHeroProps {
  className?: string;
  companyName?: string;
  yearsInBusiness?: number;
  employeeCount?: number;
  clientCount?: number;
  facilityImageUrl?: string;
  cncImageUrl?: string;
  industry?: string;
  location?: string;
  facilitySize?: string;
}

const CompanyHero: React.FC<CompanyHeroProps> = ({
  className = '',
  companyName = 'CQS',
  yearsInBusiness = 25,
  employeeCount = 1000,
  clientCount = 50,
  facilityImageUrl = '/images/aboutcnc.jpg',
  cncImageUrl = '/images/cnc.jpg',
  industry = 'Automotive & Motorcycle Components',
  location = 'Vietnam',
  facilitySize = '15,000 sq.m'
}) => {
  // Technical diagonal pattern CSS class
  const diagonalPatternClass = "bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px]";

  // Grid pattern CSS class
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";

  return (
    <section className={`relative py-16 md:py-24 bg-neutral-900 text-white overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-5 pointer-events-none ${gridPatternClass}`}></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#333_50px,#333_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#333_50px,#333_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.02]"></div>

      {/* Measurement marks */}
      <div className="absolute top-0 left-0 w-full h-2 flex">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className="flex-1 border-r border-primary-600/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-600/30"></div>
            )}
          </div>
        ))}
      </div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Side: Company Info - 4 cols on desktop */}
          <div className="md:col-span-4">
            <div className="inline-flex items-center bg-primary-600/20 px-4 py-2 border-l-2 border-primary-600 mb-6">
              <span className="text-sm font-medium tracking-wider uppercase">About {companyName}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Precision <span className="text-primary-500">Aluminum</span><br/>
              Manufacturing
            </h1>

            <div className="w-20 h-0.5 bg-primary-600 mb-8"></div>

            <p className="text-neutral-300 text-base mb-8 leading-relaxed">
              Since 2005, {companyName} has been a leading manufacturer of high-precision aluminum components for the
              automotive and motorcycle industries, delivering exceptional quality with advanced die-casting and
              CNC machining technologies.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="border border-neutral-700 p-3 bg-neutral-800/50 group hover:bg-neutral-800 transition-colors duration-300">
                <div className="text-2xl font-bold text-primary-500 mb-1 group-hover:text-primary-400 transition-colors">{yearsInBusiness}+</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Years</div>
              </div>
              <div className="border border-neutral-700 p-3 bg-neutral-800/50 group hover:bg-neutral-800 transition-colors duration-300">
                <div className="text-2xl font-bold text-primary-500 mb-1 group-hover:text-primary-400 transition-colors">{employeeCount}+</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Employees</div>
              </div>
              <div className="border border-neutral-700 p-3 bg-neutral-800/50 group hover:bg-neutral-800 transition-colors duration-300">
                <div className="text-2xl font-bold text-primary-500 mb-1 group-hover:text-primary-400 transition-colors">{clientCount}+</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Clients</div>
              </div>
            </div>

            {/* Technical specification badge */}
            <div className="hidden md:flex items-center bg-neutral-800/70 border border-neutral-700 p-3 text-sm">
              <div className="text-primary-500 text-xs font-mono mr-2">REF:</div>
              <div className="text-neutral-300">{industry} Manufacturer</div>
            </div>
          </div>

          {/* Right Side: Large Company Facility Image - 8 cols on desktop */}
          <div className="md:col-span-8 relative">
            <div className="relative overflow-hidden border border-neutral-700 shadow-2xl group">
              {/* Technical corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30 z-10"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30 z-10"></div>

              {/* Technical measurement lines */}
              <div className="absolute left-0 top-0 h-full w-1 flex flex-col opacity-30">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex-1 border-b border-white/30 relative">
                    {i % 2 === 0 && (
                      <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-white/50"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Technical reference badge */}
              <div className="absolute top-4 right-4 bg-neutral-900/80 backdrop-blur-sm text-xs font-mono text-white px-2 py-1 z-10 border-r border-primary-600 flex items-center">
                <span className="text-primary-500 mr-1">ID:</span>
                <span>HQ-FACILITY-01</span>
              </div>

              {/* Main Facility Image */}
              <img
                src={facilityImageUrl || "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80"}
                alt={`${companyName} Manufacturing Facility`}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Technical overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-neutral-900/60 mix-blend-multiply"></div>
              <div className={`absolute inset-0 ${diagonalPatternClass} opacity-5`}></div>

              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-sm py-3 px-4 border-t border-neutral-700">
                <div className="flex items-center">
                  <div className="w-1 h-6 bg-primary-600 mr-3"></div>
                  <div>
                    <div className="text-white font-medium">{companyName} Headquarters & Manufacturing Center</div>
                    <div className="text-neutral-400 text-sm">{location} | {facilitySize} Integrated Production Facility</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary images with absolute positioning */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-neutral-700 shadow-lg hidden md:block group overflow-hidden">
              <div className={`absolute inset-0 ${diagonalPatternClass} opacity-5 mix-blend-overlay`}></div>
              <img
                src={cncImageUrl || "https://images.unsplash.com/photo-1622743077511-33cf525eb154?auto=format&fit=crop&w=200&q=80"}
                alt="CNC Machine"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 py-1 px-2 text-xs text-white border-t border-neutral-700/50">
                <div className="flex items-center">
                  <div className="w-0.5 h-3 bg-primary-600 mr-1.5"></div>
                  <span>CNC Center</span>
                </div>
              </div>
            </div>

            {/* Technical decorative element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-primary-600/30 z-0 hidden md:block"></div>

            {/* Technical measurement numbers */}
            <div className="absolute -bottom-4 right-8 text-xs font-mono text-neutral-500 hidden md:block">
              <div className="flex items-center">
                <div className="w-3 h-0.5 bg-neutral-500 mr-1"></div>
                <span>500px</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
