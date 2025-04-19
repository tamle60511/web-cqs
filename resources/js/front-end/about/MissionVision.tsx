
import React, { ReactElement } from 'react';
import { Activity, Radio, Target, BarChart2, ChevronRight, Zap, Search, Shield, Recycle, Globe } from 'lucide-react';

interface MissionVisionProps {
  className?: string;
  sectionTitle?: string;
  heading?: string;
  highlightedText?: string;
  missionTitle?: string;
  missionDescription?: string;
  missionPoints?: string[];
  visionTitle?: string;
  visionDescription?: string;
  visionPoints?: string[];
  companyName?: string;
}

const MissionVision: React.FC<MissionVisionProps> = ({
  className = '',
  sectionTitle = 'Corporate Philosophy',
  heading = 'Creativity, Quality & ',
  highlightedText = 'Sustainability',
  missionTitle = 'Our Mission',
  missionDescription = 'To deliver exceptional die-cast aluminum components through creative engineering solutions, uncompromising quality standards, and environmentally responsible manufacturing processes that exceed our customers expectations and drive innovation in the automotive industry.',
  missionPoints = [
    'Engineer innovative lightweight solutions that enhance vehicle performance and efficiency',
    'Maintain industry-leading quality standards with precision tolerances of ±0.01mm',
    'Implement sustainable manufacturing practices that minimize environmental impact'
  ],
  visionTitle = 'Our Vision',
  visionDescription = 'To be recognized globally as the industry leader in high-precision die casting technology, setting new standards for aluminum component manufacturing through our commitment to creativity, quality, and sustainability.',
  visionPoints = [
    'Pioneer advanced lightweight solutions for the next generation of vehicles',
    'Achieve a 100% aluminum recycling rate and carbon-neutral manufacturing',
    'Expand our global presence while maintaining exceptional quality and customer service'
  ],
  companyName = 'CQS'
}) => {
  // Technical patterns
  const diagonalPatternClass = "bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px]";
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";

  // Current year for reference codes
  const currentYear = new Date().getFullYear();

  // Icons for mission points - Fixed with proper TypeScript typing
  const missionIcons: ReactElement[] = [
    <Zap key="mission-icon-1" size={14} className="text-primary-400" />,
    <Shield key="mission-icon-2" size={14} className="text-primary-400" />,
    <Recycle key="mission-icon-3" size={14} className="text-primary-400" />
  ];

  // Icons for vision points - Fixed with proper TypeScript typing
  const visionIcons: ReactElement[] = [
    <Target key="vision-icon-1" size={14} className="text-primary-400" />,
    <Recycle key="vision-icon-2" size={14} className="text-primary-400" />,
    <Globe key="vision-icon-3" size={14} className="text-primary-400" />
  ];

  return (
    <section className={`py-16 md:py-24 bg-neutral-900 text-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${gridPatternClass}`}></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#222_50px,#222_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#222_50px,#222_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-primary-600/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-600/50"></div>
            )}
          </div>
        ))}
      </div>

      {/* Technical corner accents - enhanced */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30">
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary-600/40"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary-600/40"></div>
      </div>

      {/* Vertical technical measurement line */}
      <div className="absolute top-24 bottom-24 right-8 hidden xl:block">
        <div className="h-full w-px bg-primary-600/20 relative">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="absolute left-0 w-2 h-px bg-primary-600/40" style={{ top: `${i * 25}%` }}>
              <div className="absolute -right-8 -top-1.5 text-xs font-mono text-primary-600/40">
                {`M-${i+1}`}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            {/* Technical label with enhanced styling */}
            <div className="inline-flex items-center bg-primary-800/40 px-4 py-2 mb-6 border-l-2 border-primary-600 relative group">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
            </div>

            <h2 className="text-3xl font-bold mb-4 tracking-tight text-center relative">
              {heading}<span className="text-primary-500 relative">
                {highlightedText}
                <div className="absolute -top-1 -right-3 text-xs text-primary-400 font-mono">[v.1]</div>
              </span>
            </h2>

            <div className="w-20 h-0.5 bg-neutral-700 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
            </div>

            {/* Technical reference number */}
            <div className="text-xs text-neutral-500 font-mono flex items-center">
              <span className="mr-2">DOC</span>
              <span className="text-primary-500 mr-2">{companyName}-PHI-{currentYear}</span>
              <div className="w-6 h-px bg-neutral-700"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Mission - Enhanced with technical elements */}
            <div className="relative group">
              {/* Blueprint-style corner markers */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary-600">
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary-500"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary-600">
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary-500"></div>
              </div>

              {/* Technical code label */}
              <div className="absolute -top-3 right-8 bg-neutral-800 text-xs font-mono text-primary-400 px-2 py-0.5 border-t border-b border-primary-700/50 z-10">
                MS-{currentYear.toString().substring(2)}
              </div>

              <div className="p-8 border border-neutral-700 bg-neutral-800/50 relative backdrop-blur-sm transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
                {/* Subtle background pattern */}
                <div className={`absolute inset-0 ${diagonalPatternClass} opacity-[0.03]`}></div>

                {/* Technical measurement marks */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-700/20 hidden md:block">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="absolute left-0 h-px w-1 bg-primary-700/30" style={{ top: `${(i+1) * 20}%` }}></div>
                  ))}
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600/20 border border-primary-700 flex items-center justify-center mr-4 relative">
                    <Activity size={24} className="text-primary-400" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary-500"></div>
                  </div>
                  <h3 className="text-2xl font-bold">{missionTitle}</h3>
                </div>

                {/* Mission border with technical styling */}
                <div className="pl-4 border-l border-primary-700 mb-6">
                  <p className="text-neutral-300 leading-relaxed">
                    {missionDescription}
                  </p>
                </div>

                <ul className="space-y-4 text-neutral-300">
                  {missionPoints.map((point, index) => (
                    <li key={`mission-point-${index}`} className="flex items-start group/item relative overflow-hidden">
                      <div className="w-6 h-6 rounded-sm bg-primary-900/80 border border-primary-700 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-primary-800">
                        {missionIcons[index % missionIcons.length]}
                      </div>
                      <div className="flex-1">
                        <div className="absolute left-0 -bottom-px w-0 h-px bg-primary-500 group-hover/item:w-full transition-all duration-500"></div>
                        {point}
                      </div>
                      <div className="absolute right-0 top-0 text-[10px] font-mono text-neutral-500 opacity-0 group-hover/item:opacity-100 transition-opacity">[M{index+1}]</div>
                    </li>
                  ))}
                </ul>

                {/* Technical documentation label */}
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-neutral-500">
                  {companyName}-MS-{currentYear}
                </div>
              </div>
            </div>

            {/* Vision - Enhanced with technical elements */}
            <div className="relative group">
              {/* Blueprint-style corner markers */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary-600">
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary-500"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary-600">
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary-500"></div>
              </div>

              {/* Technical code label */}
              <div className="absolute -top-3 right-8 bg-neutral-800 text-xs font-mono text-primary-400 px-2 py-0.5 border-t border-b border-primary-700/50 z-10">
                VS-{currentYear.toString().substring(2)}
              </div>

              <div className="p-8 border border-neutral-700 bg-neutral-800/50 relative backdrop-blur-sm transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
                {/* Subtle background pattern */}
                <div className={`absolute inset-0 ${diagonalPatternClass} opacity-[0.03]`}></div>

                {/* Technical measurement marks */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-700/20 hidden md:block">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="absolute left-0 h-px w-1 bg-primary-700/30" style={{ top: `${(i+1) * 20}%` }}></div>
                  ))}
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600/20 border border-primary-700 flex items-center justify-center mr-4 relative">
                    <Radio size={24} className="text-primary-400" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary-500"></div>
                  </div>
                  <h3 className="text-2xl font-bold">{visionTitle}</h3>
                </div>

                {/* Vision border with technical styling */}
                <div className="pl-4 border-l border-primary-700 mb-6">
                  <p className="text-neutral-300 leading-relaxed">
                    {visionDescription}
                  </p>
                </div>

                <ul className="space-y-4 text-neutral-300">
                  {visionPoints.map((point, index) => (
                    <li key={`vision-point-${index}`} className="flex items-start group/item relative overflow-hidden">
                      <div className="w-6 h-6 rounded-sm bg-primary-900/80 border border-primary-700 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-primary-800">
                        {visionIcons[index % visionIcons.length]}
                      </div>
                      <div className="flex-1">
                        <div className="absolute left-0 -bottom-px w-0 h-px bg-primary-500 group-hover/item:w-full transition-all duration-500"></div>
                        {point}
                      </div>
                      <div className="absolute right-0 top-0 text-[10px] font-mono text-neutral-500 opacity-0 group-hover/item:opacity-100 transition-opacity">[V{index+1}]</div>
                    </li>
                  ))}
                </ul>

                {/* Technical documentation label */}
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-neutral-500">
                  {companyName}-VS-{currentYear}
                </div>
              </div>
            </div>
          </div>

          {/* Technical footer */}
          <div className="mt-16 border-t border-neutral-800 pt-4 text-xs text-neutral-600 font-mono flex items-center justify-between">
            <div>REV: 1.{currentYear.toString().substring(2)}</div>
            <div className="flex items-center">
              <span className="mr-2">CORPORATE DOCUMENT</span>
              <span className="text-primary-600">{companyName}/PHI/{currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
