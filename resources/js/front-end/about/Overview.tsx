import React from 'react';
import { Globe, Wrench, Building, Users, MapPin, Award, HelpCircle, Zap, Clock, Ruler, ChevronRight } from 'lucide-react';

interface CompanyOverviewProps {
  className?: string;
  companyName?: string;
  establishedYear?: number;
  employeeCount?: string;
  facilitySize?: string;
  certifications?: string;
  coreProducts?: string;
  productionCapacity?: string;
  location?: string;
}

const Overview: React.FC<CompanyOverviewProps> = ({
  className = '',
  companyName = 'CQS',
  establishedYear = 2005,
  employeeCount = '250+ skilled professionals',
  facilitySize = '15,000 sq.m integrated factory',
  certifications = 'ISO 9001:2015, IATF 16949',
  coreProducts = 'Automotive & motorcycle components',
  productionCapacity = '1.5M+ components annually',
  location = 'Vietnam',
}) => {
  // Grid pattern CSS
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";

  // Years of operation calculation
  const yearsOfOperation = new Date().getFullYear() - establishedYear;

  return (
    <section className={`py-16 md:py-24 relative ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-5 pointer-events-none ${gridPatternClass}`}></div>

      {/* Technical corner accents */}
      <div className="absolute top-12 right-8 w-24 h-24 border-t border-r border-neutral-300 hidden lg:block"></div>
      <div className="absolute bottom-12 left-8 w-24 h-24 border-b border-l border-neutral-300 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          {/* Technical measurement lines on the left */}
          <div className="absolute left-0 top-24 bottom-0 w-0 border-l border-dashed border-neutral-300 ml-[-40px] hidden lg:block">
            <div className="absolute top-0 left-0 w-2 h-px bg-neutral-400 ml-[-1px]"></div>
            <div className="absolute top-1/4 left-0 w-2 h-px bg-neutral-400 ml-[-1px]"></div>
            <div className="absolute top-2/4 left-0 w-2 h-px bg-neutral-400 ml-[-1px]"></div>
            <div className="absolute top-3/4 left-0 w-2 h-px bg-neutral-400 ml-[-1px]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-px bg-neutral-400 ml-[-1px]"></div>
          </div>

          <div className="flex flex-col items-center mb-16">
            {/* Section label with technical styling */}
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <span className="text-sm font-medium tracking-wider uppercase">Company Overview</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              <span className="relative inline-block">
                Leading <span className="text-primary-600">Precision Manufacturing</span>
                <div className="absolute -bottom-2 left-0 right-0 h-px bg-primary-100"></div>
              </span>
              <span className="relative ml-2">
                Since {establishedYear}
                <div className="absolute top-0 -right-4 text-xs text-neutral-500 font-mono">({yearsOfOperation} YRS)</div>
              </span>
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-2 left-1/2 w-4 h-4 border border-neutral-300 bg-white transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Technical specification header */}
            <div className="text-neutral-500 text-xs font-mono flex items-center mb-2">
              <div className="w-3 h-3 border border-neutral-300 mr-2"></div>
              <span>COMPANY SPECIFICATIONS</span>
              <div className="ml-2 flex-grow border-t border-dashed border-neutral-300"></div>
            </div>

            <p className="text-neutral-600 leading-relaxed px-4 py-5 border-l-2 border-neutral-200 bg-neutral-50">
              {companyName} is a leading manufacturer of precision aluminum components for the automotive and motorcycle industries in {location}.
              With a state-of-the-art {facilitySize} and over {employeeCount.split(' ')[0]} skilled employees, we combine advanced die-casting
              technology with precision CNC machining to deliver high-quality components that meet the most demanding specifications.
            </p>

            {/* Feature boxes with enhanced technical styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-neutral-200 p-6 bg-white shadow-sm relative group hover:border-primary-400 transition-colors duration-300">
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-primary-100 border border-primary-200 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <Globe className="text-primary-600" size={18} />
                  </div>
                  Global Reach
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our components are trusted by major automotive and motorcycle manufacturers across Asia, Europe, and North America.
                  We supply precision parts to over 30 global brands, with exports to 15+ countries from our {location} manufacturing base.
                </p>

                {/* Technical tag */}
                <div className="absolute top-2 right-2 text-xs font-mono text-neutral-400 px-1 py-0.5 border border-neutral-200">
                  REF.01
                </div>
              </div>

              <div className="border border-neutral-200 p-6 bg-white shadow-sm relative group hover:border-primary-400 transition-colors duration-300">
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-primary-100 border border-primary-200 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <Wrench className="text-primary-600" size={18} />
                  </div>
                  Technical Expertise
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our engineering team brings decades of experience in aluminum die-casting and precision machining. We specialize in
                  complex geometries, thin-wall components, and tight tolerance parts with precision down to ±0.01mm.
                </p>

                {/* Technical tag */}
                <div className="absolute top-2 right-2 text-xs font-mono text-neutral-400 px-1 py-0.5 border border-neutral-200">
                  REF.02
                </div>
              </div>
            </div>

            {/* Process diagram with technical styling */}
            <div className="py-8 px-5 border border-neutral-200 bg-neutral-50 relative">
              <div className="absolute top-3 right-3 bg-white px-2 py-1 border border-neutral-200 text-xs font-mono text-neutral-500">
                <Clock className="inline-block mr-1" size={12} /> EST.{establishedYear}
              </div>

              <h4 className="text-lg font-bold text-neutral-900 mb-4 flex items-center">
                <Ruler className="text-primary-600 mr-2" size={18} />
                Integrated Manufacturing Process
              </h4>

              <div className="relative flex flex-wrap md:flex-nowrap items-center justify-between">
                {/* Process flow arrow for desktop */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-100 hidden md:block"></div>

                {/* Process steps */}
                {['Design', 'Tooling', 'Die-Casting', 'Machining', 'Surface Treatment', 'Assembly'].map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative mb-6 md:mb-0 w-1/2 md:w-auto">
                    <div className="w-10 h-10 rounded-full bg-white z-10 border-2 border-primary-200 flex items-center justify-center text-primary-600 mb-2">
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium text-neutral-800">{step}</div>

                    {/* Arrow between steps for mobile */}
                    {index < 5 && (
                      <div className="absolute -right-4 top-5 transform rotate-90 md:hidden">
                        <ChevronRight size={16} className="text-primary-300" />
                      </div>
                    )}

                    {/* Arrow between steps for desktop */}
                    {index < 5 && (
                      <div className="absolute -right-4 top-5 hidden md:block">
                        <ChevronRight size={16} className="text-primary-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Technical note */}
              <div className="mt-6 text-xs text-neutral-500 border-t border-dashed border-neutral-300 pt-3">
                This integrated approach ensures consistent quality, reduces lead times, and optimizes production costs.
              </div>
            </div>

            {/* Company information grid with technical styling */}
            <div className="p-6 bg-white border border-neutral-200 shadow-sm relative">
              {/* Technical corner elements */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neutral-200"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neutral-200"></div>

              <h3 className="text-xl font-bold text-neutral-900 mb-6 pb-2 border-b border-neutral-200 flex items-center">
                <span className="text-primary-600 text-sm font-mono mr-2">[SPEC]</span>
                Key Company Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-primary-50 border border-primary-100 flex items-center justify-center mr-3 flex-shrink-0 transition-colors group-hover:bg-primary-100">
                    <Building className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 flex items-center">
                      Established
                      <div className="ml-2 text-xs text-primary-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">#01</div>
                    </div>
                    <div className="text-sm text-neutral-600">{establishedYear}, {location}</div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-primary-50 border border-primary-100 flex items-center justify-center mr-3 flex-shrink-0 transition-colors group-hover:bg-primary-100">
                    <Users className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 flex items-center">
                      Employees
                      <div className="ml-2 text-xs text-primary-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">#02</div>
                    </div>
                    <div className="text-sm text-neutral-600">{employeeCount}</div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-primary-50 border border-primary-100 flex items-center justify-center mr-3 flex-shrink-0 transition-colors group-hover:bg-primary-100">
                    <MapPin className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 flex items-center">
                      Main Facility
                      <div className="ml-2 text-xs text-primary-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">#03</div>
                    </div>
                    <div className="text-sm text-neutral-600">{facilitySize}</div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-primary-50 border border-primary-100 flex items-center justify-center mr-3 flex-shrink-0 transition-colors group-hover:bg-primary-100">
                    <Award className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 flex items-center">
                      Certifications
                      <div className="ml-2 text-xs text-primary-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">#04</div>
                    </div>
                    <div className="text-sm text-neutral-600">{certifications}</div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-primary-50 border border-primary-100 flex items-center justify-center mr-3 flex-shrink-0 transition-colors group-hover:bg-primary-100">
                    <HelpCircle className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 flex items-center">
                      Core Products
                      <div className="ml-2 text-xs text-primary-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">#05</div>
                    </div>
                    <div className="text-sm text-neutral-600">{coreProducts}</div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-primary-50 border border-primary-100 flex items-center justify-center mr-3 flex-shrink-0 transition-colors group-hover:bg-primary-100">
                    <Zap className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 flex items-center">
                      Production Capacity
                      <div className="ml-2 text-xs text-primary-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">#06</div>
                    </div>
                    <div className="text-sm text-neutral-600">{productionCapacity}</div>
                  </div>
                </div>
              </div>

              {/* Technical document reference */}
              <div className="absolute bottom-2 right-2 text-xs font-mono text-neutral-400">
                DOC.OVERVIEW.{new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
