import React from 'react';
import { ChevronRight, Clock, Zap, CheckCircle2, Target, Recycle, Award, Globe } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  milestone?: string; // Optional milestone text
  icon?: React.ReactNode; // Optional custom icon
}

interface CompanyTimelineProps {
  className?: string;
  companyName?: string;
  title?: string;
  subtitle?: string;
  timelineItems?: TimelineItem[];
}

const Timeline: React.FC<CompanyTimelineProps> = ({
  className = '',
  companyName = 'CQS',
  title = 'Our <span class="text-primary-600">Journey</span> to Excellence',
  subtitle = 'Company History',
  timelineItems = [
    {
      year: '2002',
      title: 'Company Foundation',
      description: `${companyName} was established in Vietnam with a focus on aluminum die casting for the motorcycle
        industry. Starting with a 3,000 sq.m facility and 50 employees, the company
        began producing precision aluminum components using two 250-ton die casting machines.`,
      milestone: 'Vietnam Manufacturing Center Established',
      icon: <Target size={16} className="text-primary-600" />
    },
    {
      year: '2008',
      title: 'Expansion & Quality Certification',
      description: `Following steady growth, ${companyName} expanded operations to a 7,000 sq.m facility and obtained
        ISO 9001:2008 certification. This period marked our first exports to Taiwan and Japan,
        establishing our international market presence in the automotive components sector.`,
      milestone: 'ISO 9001:2008 Certification',
      icon: <Award size={16} className="text-primary-600" />
    },
    {
      year: '2013',
      title: 'Advanced Technology Implementation',
      description: `${companyName} made significant investments in advanced manufacturing technologies, including
        high-pressure die casting (HPDC) and gravity die casting (GDC) processes. We added six
        state-of-the-art CNC machining centers to enhance our precision capabilities to ±0.01mm tolerances.`,
      milestone: 'HPDC & GDC Technology Integration',
      icon: <Zap size={16} className="text-primary-600" />
    },
    {
      year: '2017',
      title: 'Automotive Quality Excellence',
      description: `${companyName} achieved IATF 16949 certification, the international standard for automotive quality
        management systems. Our 15,000 sq.m state-of-the-art facility integrated die-casting,
        CNC machining, surface treatment, and assembly processes to provide a "one-stop" manufacturing solution.`,
      milestone: 'IATF 16949 Certification',
      icon: <CheckCircle2 size={16} className="text-primary-600" />
    },
    {
      year: '2021',
      title: 'Sustainability & Global Expansion',
      description: `${companyName} implemented an advanced aluminum recycling system, achieving a 93% recycling rate.
        We expanded our global distribution network to eight countries including the United States, Canada,
        Mexico, Japan, Italy, Taiwan, China, and Southeast Asia with a focus on lightweight automotive components.`,
      milestone: '93% Aluminum Recycling Achievement',
      icon: <Recycle size={16} className="text-primary-600" />
    },
    {
      year: 'Today',
      title: 'Industry Leadership',
      description: `Today, ${companyName} stands as a leading die casting specialist with over 1,000 employees
        and production capacity exceeding 3 million components annually. Our die casting machines range from
        250 to 1,650 tons, enabling us to produce complex automotive components that meet the highest international standards.`,
      milestone: 'Operating in 8+ Global Markets',
      icon: <Globe size={16} className="text-primary-600" />
    }
  ]
}) => {
  // Grid pattern CSS
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";

  // Get current year for reference calculations
  const currentYear = new Date().getFullYear();

  return (
    <section className={`py-16 md:py-24 bg-neutral-50 relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-5 pointer-events-none ${gridPatternClass}`}></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#333_50px,#333_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#333_50px,#333_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.01]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-12 right-12 w-32 h-32 border-t border-r border-neutral-300 hidden lg:block"></div>
      <div className="absolute bottom-12 left-12 w-32 h-32 border-b border-l border-neutral-300 hidden lg:block"></div>

      {/* Vertical timeline measurement line on right side */}
      <div className="absolute top-24 bottom-24 right-8 w-px bg-neutral-200 hidden xl:block">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="absolute left-0 w-2 h-px bg-neutral-400" style={{ top: `${i * 25}%` }}>
            <div className="absolute -right-6 -top-1.5 text-[10px] font-mono text-neutral-400">
              {Math.round(2002 + (i * (currentYear - 2002) / 4))}
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            {/* Technical section label */}
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <Clock className="mr-2" size={14} />
              <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
            </div>

            <h2
              className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center relative"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {/* Technical decoration */}
            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>

            {/* Technical timeline legend */}
            <div className="flex items-center text-xs text-neutral-500 font-mono">
              <span className="mr-2">TIMELINE</span>
              <div className="w-12 h-px bg-neutral-300 mr-2"></div>
              <span className="mr-1">REF:</span>
              <span className="text-primary-500">{companyName}-HIST-{currentYear}</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-neutral-300 ml-4 pl-10 space-y-14">
            {/* Technical element for timeline start - enhanced */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-primary-600 -ml-1.5 rounded-full flex items-center justify-center">
              <div className="absolute w-5 h-5 border border-primary-400 rounded-full animate-pulse"></div>
            </div>

            {/* Vertical timeline year labels */}
            <div className="absolute top-0 left-0 bottom-0 -ml-32 w-24 hidden md:block">
              <div className="h-full flex flex-col justify-between">
                {timelineItems.map((item, index) => (
                  <div key={`year-${index}`} className="flex items-center">
                    <div className="w-12 h-px bg-neutral-200"></div>
                    <div className="text-xs font-mono text-neutral-500 ml-2">{item.year}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline items - enhanced with technical elements */}
            {timelineItems.map((item, index) => (
              <div
                className="relative pl-5 group"
                key={`timeline-${index}`}
                style={{
                  // Add a small technical offset to the items for visual interest
                  transform: index % 2 === 0 ? 'translateX(0)' : 'translateX(8px)'
                }}
              >
                {/* Year label badge with technical styling */}
                <div className="absolute -left-16 top-0 font-medium hidden md:flex items-center">
                  <div className="w-3 h-3 border-2 border-primary-500 rounded-full mr-2"></div>
                  <div className="bg-white text-neutral-800 text-sm font-mono shadow-sm border border-neutral-200 px-2 py-1 flex items-center">
                    <span className="text-primary-600 mr-1 text-xs">Y:</span>
                    {item.year}
                  </div>
                </div>

                {/* Mobile year badge */}
                <div className="absolute -left-12 border border-neutral-300 bg-white font-medium px-2 py-1 text-xs md:hidden">
                  {item.year}
                </div>

                {/* Timeline node point */}
                <div className="absolute -left-13 w-4 h-4 bg-white border-2 border-primary-600 rounded-full top-6 -ml-2 z-10 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Timeline node connector */}
                <div className="absolute top-6 -left-10 w-6 h-0.5 bg-primary-200 -ml-1 group-hover:bg-primary-400 transition-colors"></div>

                {/* Timeline item content with technical border */}
                <div className="pl-6 relative">
                  {/* Technical reference code */}
                  <div className="absolute top-0 right-0 text-xs font-mono text-neutral-400">
                    REF:{index + 1}.{item.year}
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-3 flex items-center">
                    {item.title}
                    <span className="ml-2 text-xs bg-neutral-100 text-primary-600 px-2 py-0.5 rounded-sm font-mono">
                      {item.year === 'Today' ? currentYear : item.year}
                    </span>
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {item.description.replace(/{companyName}/g, companyName)}
                  </p>

                  {/* Milestone badge with technical styling */}
                  {item.milestone && (
                    <div className="bg-neutral-50 border border-neutral-200 p-3 flex items-start">
                      <div className="w-6 h-6 bg-primary-100 border border-primary-200 rounded-sm flex items-center justify-center mr-3 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 uppercase tracking-wide mb-0.5">Key Milestone</div>
                        <div className="font-medium text-neutral-800">{item.milestone}</div>
                      </div>

                      {/* Technical corner accent */}
                      <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-neutral-300"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Technical element for timeline end - enhanced */}
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-primary-600 -ml-2 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Timeline footer with technical info */}
            <div className="border-t border-dashed border-neutral-300 pt-4 mt-8 text-xs text-neutral-500 font-mono flex items-center">
              <Clock size={12} className="mr-1" />
              <span>TIMELINE SPAN: {timelineItems[0].year} - {currentYear}</span>
              <span className="ml-2 text-neutral-400">|</span>
              <span className="ml-2">{currentYear - parseInt(timelineItems[0].year)} YEARS OF OPERATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
