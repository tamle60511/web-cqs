import React from 'react';
import {
  Newspaper, ChevronRight, Rss, Grid, ExternalLink,
  Factory, Wrench, FileText, Calendar, Flag,
  Lock, Award, Recycle
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
              <span className="text-sm font-medium tracking-wider uppercase">CQS News Center</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-2 tracking-tight">
              Die Casting <span className="text-primary-600">Innovation</span> & Industry Updates
            </h2>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-primary-600"></div>
              <div className="text-neutral-600 text-sm">
                Aluminum Technology · Sustainability Initiatives · Global Partnerships
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
                  CQS-NEWS-2024-05
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 bg-primary-600/90 text-white text-xs
                              font-medium z-10 flex items-center">
                  <Flag size={12} className="mr-1" />
                  FEATURED
                </div>

                <img
                  src="/images/Material-3.jpg"
                  alt="CQS Die Casting Facility"
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
                    <span>2024-05-15</span>
                  </div>
                  <div className="text-xs px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-800">
                    FACILITY EXPANSION
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3 hover:text-primary-600 transition-colors">
                  <a href="#">CQS Expands High Pressure Die Casting Capacity with New 1,650 Ton Machine</a>
                </h3>

                <div className="h-0.5 w-16 bg-neutral-200 mb-3"></div>

                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                  CQS has expanded its manufacturing capabilities with the installation of a new 1,650 ton high-pressure
                  die casting machine, increasing production capacity by 30% for large automotive structural components.
                  This investment strengthens our position as a leading supplier to global automotive markets.
                </p>

                <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-500
                                   text-sm font-medium border-b border-transparent hover:border-primary-600
                                   pb-0.5 transition-all">
                  <span>Read full announcement</span>
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
                      alt="Recycling Initiative"
                      className="w-24 h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar size={12} className="mr-1" />
                        <span>2024-05-02</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <a href="#">CQS Achieves 93% Aluminum Recycling Rate, Leading Sustainability Efforts</a>
                    </h3>

                    <p className="text-neutral-600 text-xs line-clamp-2">
                      Our sustainability initiatives have resulted in a record 93% aluminum recycling rate,
                      significantly reducing our carbon footprint while maintaining high-quality standards...
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
                      alt="IATF Certification"
                      className="w-24 h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar size={12} className="mr-1" />
                        <span>2024-04-18</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <a href="#">CQS Renews IATF 16949 Certification for Automotive Quality Excellence</a>
                    </h3>

                    <p className="text-neutral-600 text-xs line-clamp-2">
                      Our Vietnam manufacturing facility has successfully renewed its IATF 16949 certification,
                      confirming our commitment to the highest quality standards in automotive component production...
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
                      alt="Global Distribution"
                      className="w-24 h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar size={12} className="mr-1" />
                        <span>2024-03-25</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <a href="#">CQS Expands Distribution Network to Mexico and Southeast Asia</a>
                    </h3>

                    <p className="text-neutral-600 text-xs line-clamp-2">
                      In response to growing demand, CQS has strengthened its global distribution capabilities,
                      opening new logistics channels in Mexico and expanding our presence in Southeast Asia...
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
                      alt="Auto Parts Exhibition"
                      className="w-24 h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-neutral-500 text-xs">
                        <Calendar size={12} className="mr-1" />
                        <span>2024-03-12</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <a href="#">CQS Showcases New Lightweight Components at Vietnam AutoExpo 2024</a>
                    </h3>

                    <p className="text-neutral-600 text-xs line-clamp-2">
                      CQS exhibited our latest aluminum die-cast automotive and motorcycle components at
                      Vietnam AutoExpo 2024, featuring our innovative gravity die casting technology and lightweight designs...
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
                      CQS expands CNC capacity with 5 new high-precision machines
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">05-20</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      New aluminum EV battery housing components enter production
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">04-28</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      CQS reaches 5 million parts milestone for key automotive client
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">04-15</span>
                  </li>
                </ul>
              </div>

              {/* Industry News */}
              <div className="bg-white border border-neutral-200 shadow-sm p-5">
                <h4 className="font-bold text-neutral-900 mb-3 flex items-center">
                  <Recycle size={16} className="text-primary-600 mr-2" />
                  Sustainability News
                </h4>

                <div className="h-0.5 w-full bg-neutral-100 mb-4"></div>

                <ul className="space-y-3">
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      CQS implements advanced aluminum recycling system at Vietnam facility
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">05-10</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      Energy-efficient die casting processes reduce carbon footprint by 18%
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">04-20</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      Solar panel installation completed at CQS headquarters
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">03-28</span>
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
                      Comparing HPDC vs. GDC technologies for automotive applications
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">05-17</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      Optimal process parameters for ADC12 aluminum alloy die casting
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">05-03</span>
                  </li>
                  <li className="flex items-center group">
                    <ChevronRight size={12} className="text-primary-600 mr-2 flex-shrink-0" />
                    <a href="#" className="text-neutral-700 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      Advanced surface treatments for aluminum motorcycle components
                    </a>
                    <span className="text-xs text-neutral-500 ml-auto flex-shrink-0">04-22</span>
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
