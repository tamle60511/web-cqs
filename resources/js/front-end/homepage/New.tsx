import React from 'react';
import {
  Newspaper, ChevronRight, Rss, Grid, ExternalLink,
  Factory, Wrench, FileText, Calendar, Flag,
  Lock, Award
} from 'lucide-react';

interface NewsProps {
  className?: string;
}

const News: React.FC<NewsProps> = ({ className }) => {
  return (
    <section id="news-center" className="py-20 bg-neutral-100 relative overflow-hidden">
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#333_50px,#333_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#333_50px,#333_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.02]"></div>

      {/* Industrial corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-primary-600/30"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-primary-600/30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600">
              <span className="text-sm font-medium tracking-wider uppercase">Information Center</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-2 tracking-tight">
              Technical <span className="text-primary-600">Updates</span> & Industry News
            </h2>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-primary-600"></div>
              <div className="text-neutral-600 text-sm">
                Industry Analysis · Technical Articles · Manufacturing Insights
              </div>
            </div>
          </div>

          <div className="flex mt-6 md:mt-0">
            <a
              href="/news"
              className="px-5 py-2.5 bg-neutral-800 text-white border border-neutral-700
                      hover:bg-primary-600 hover:border-primary-700 font-medium transition-all
                      flex items-center mr-3"
            >
              <Grid size={16} className="mr-2" />
              <span>All Updates</span>
            </a>
            <a
              href="#"
              className="px-5 py-2.5 bg-transparent text-neutral-800 border border-neutral-300
                      hover:border-primary-600 hover:text-primary-600 font-medium transition-all
                      flex items-center"
            >
              <Rss size={16} className="mr-2" />
              <span>Subscribe</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          <div className="lg:col-span-1 row-span-2">
            <div className="bg-white overflow-hidden shadow-sm border border-neutral-200
                          hover:border-primary-600 hover:shadow-md transition-all duration-300 h-full">
              <div className="h-56 overflow-hidden relative">
                {/* Technical reference badge */}
                <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm text-xs font-mono
                              text-white px-2 py-1 z-10 border-l border-primary-600">
                  NEWS-052024-01
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 bg-primary-600/90 text-white text-xs
                              font-medium z-10 flex items-center">
                  <Flag size={12} className="mr-1" />
                  FEATURED
                </div>

                <img
                  src="/images/Material-3.jpg"
                  alt="CNC Machining Center"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Technical overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:6px_6px] opacity-5"></div>
              </div>

              <div className="p-6 border-t border-neutral-200">
                <div className="flex items-center mb-3">
                  <div className="flex items-center text-neutral-500 mr-3 text-xs">
                    <Calendar size={12} className="mr-1" />
                    <span>2024-05-12</span>
                  </div>
                  <div className="text-xs px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-800">
                    EQUIPMENT UPGRADE
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3 hover:text-primary-600 transition-colors">
                  <a href="#">5-Axis CNC Machining Center Installed at Zhongsen Factory</a>
                </h3>

                <div className="h-0.5 w-16 bg-neutral-200 mb-3"></div>

                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                  Our company has recently commissioned multiple high-precision 5-axis CNC machining centers,
                  enhancing mold processing accuracy to ±0.01mm while improving production efficiency by 35%,
                  significantly reducing lead times for automotive and motorcycle component manufacturing.
                </p>

                <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-500
                                   text-sm font-medium border-b border-transparent hover:border-primary-600
                                   pb-0.5 transition-all">
                  <span>Technical specifications</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* News item 1 */}
              <div className="bg-white shadow-sm border border-neutral-200 hover:border-primary-600
                            hover:shadow-md transition-all p-5 group">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 relative">
                    <img
                      src="/images/Advanced.jpg"
                      alt="New Technology Application"
                      className="w-24 h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar size={12} className="mr-1" />
                        <span>2024-04-25</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <a href="#">Advanced Surface Treatment Techniques for Aluminum Components</a>
                    </h3>

                    <p className="text-neutral-600 text-xs line-clamp-2">
                      New developments in anodizing and powder coating technologies have enabled enhanced
                      corrosion resistance and aesthetic finishes for precision aluminum components...
                    </p>
                  </div>
                </div>
              </div>

              {/* News item 2 */}
              <div className="bg-white shadow-sm border border-neutral-200 hover:border-primary-600
                            hover:shadow-md transition-all p-5 group">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 relative">
                    <img
                      src="/images/Aluminum.jpg"
                      alt="Corporate Qualification"
                      className="w-24 h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar size={12} className="mr-1" />
                        <span>2024-04-15</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <a href="#">Zhongsen Achieves ISO 9001:2015 & IATF 16949 Certification</a>
                    </h3>

                    <p className="text-neutral-600 text-xs line-clamp-2">
                      Our company has successfully passed both ISO 9001:2015 quality management and
                      IATF 16949 automotive industry certification, confirming our manufacturing processes...
                    </p>
                  </div>
                </div>
              </div>

              {/* News item 3 */}
              <div className="bg-white shadow-sm border border-neutral-200 hover:border-primary-600
                            hover:shadow-md transition-all p-5 group">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 relative">
                    <img
                      src="/images/cnc.jpg"
                      alt="Staff Training"
                      className="w-24 h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar size={12} className="mr-1" />
                        <span>2024-03-21</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <a href="#">Advanced CNC Programming Training for Technical Personnel</a>
                    </h3>

                    <p className="text-neutral-600 text-xs line-clamp-2">
                      To enhance precision machining capabilities, our technical team participated in
                      specialized CNC programming and CAM software training, focusing on complex geometries...
                    </p>
                  </div>
                </div>
              </div>

              {/* News item 4 */}
              <div className="bg-white shadow-sm border border-neutral-200 hover:border-primary-600
                            hover:shadow-md transition-all p-5 group">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 relative">
                    <img
                      src="/images/Material-2.jpg"
                      alt="Industry Exhibition"
                      className="w-24 h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar size={12} className="mr-1" />
                        <span>2024-03-10</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <a href="#">Zhongsen Showcases Aluminum Components at 2024 Shanghai Auto Parts Exhibition</a>
                    </h3>

                    <p className="text-neutral-600 text-xs line-clamp-2">
                      Our company exhibited our latest lightweight aluminum die-cast automotive and motorcycle
                      components at the 2024 Shanghai Auto Parts Exhibition, featuring innovative designs...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Company News */}
              <div className="bg-white border border-neutral-200 shadow-sm p-5">
                <h4 className="font-bold text-neutral-900 mb-3 flex items-center">
                  <Newspaper size={16} className="text-primary-600 mr-2" />
                  Company Updates
                </h4>

                <div className="h-0.5 w-full bg-neutral-100 mb-4"></div>

                <ul className="space-y-3">
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      New high-tolerance aluminum alloy components for EV battery systems
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">05-12</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      Zhongsen achieves IATF 16949 certification for automotive production
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">04-21</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      Technical staff complete advanced CAM programming certification
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">03-21</span>
                  </li>
                </ul>
              </div>

              {/* Industry News */}
              <div className="bg-white border border-neutral-200 shadow-sm p-5">
                <h4 className="font-bold text-neutral-900 mb-3 flex items-center">
                  <Factory size={16} className="text-primary-600 mr-2" />
                  Industry Insights
                </h4>

                <div className="h-0.5 w-full bg-neutral-100 mb-4"></div>

                <ul className="space-y-3">
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      2024 Aluminum Die Casting Market Analysis & Manufacturing Trends
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">05-10</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      New Regulatory Standards for Precision Manufacturing Components
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">04-15</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      Global Aluminum Supply Chain Developments for Auto Parts
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">04-02</span>
                  </li>
                </ul>
              </div>

              {/* Technical Articles */}
              <div className="bg-white border border-neutral-200 shadow-sm p-5">
                <h4 className="font-bold text-neutral-900 mb-3 flex items-center">
                  <Wrench size={16} className="text-primary-600 mr-2" />
                  Technical Resources
                </h4>

                <div className="h-0.5 w-full bg-neutral-100 mb-4"></div>

                <ul className="space-y-3">
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      High-Pressure Die Casting Process Parameters for Thin-Wall Components
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">05-17</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      Metallurgical Analysis of New Aluminum-Magnesium Alloys for Lightweight Parts
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">05-03</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      Surface Treatment Methods for Extending Die Casting Tool Life
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">04-25</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
