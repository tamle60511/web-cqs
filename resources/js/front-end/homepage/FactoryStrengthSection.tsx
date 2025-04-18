import React, { useState } from "react";
import { Play, Award, Wrench, ChevronRight, Phone, Cog, Users } from 'lucide-react';
import Banner from '../images/banner-esg.jpg'

const FactoryStrengthSection = () => {
      const [playPromoVideo, setPlayPromoVideo] = useState(false);
    return (
        <section id="about" className="py-20 bg-neutral-100 relative overflow-hidden">
            {/* Technical patterns */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

            {/* Angular accent elements */}
            <div className="absolute top-0 right-0 w-[200px] h-[300px] bg-primary-600/10 clip-diagonal-tr"></div>
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-steel-600/10 clip-diagonal-bl"></div>

            {/* Technical grid lines */}
            <div className="absolute right-0 top-0 bottom-0 w-20 flex flex-col opacity-20">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex-1 border-b border-r border-neutral-800"></div>
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Content section - spans 6 columns */}
                    <div className="lg:col-span-6">
                        {/* Industrial style badge */}
                        <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600">
                            <span className="text-sm font-medium tracking-wider uppercase">About Our Capabilities</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 leading-tight tracking-tight">
                            <span className="text-primary-600 relative inline-block">
                                Precision
                                <span className="absolute bottom-2 left-0 w-full h-1 bg-primary-600/30 -z-10"></span>
                            </span>
                            <span className="ml-2">Engineering Excellence</span>
                        </h2>

                        <p className="text-neutral-600 mb-8 leading-relaxed">
                            With 25 years of technical expertise, CQS specializes in high-precision mold and component manufacturing.
                            Our comprehensive production process ensures reliable performance in every product.
                            Since our founding, we've built a reputation for excellence, continuously refining our
                            craft to achieve superior quality that meets the exacting standards of the automotive
                            and motorcycle parts industry.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-neutral-200 hover:border-steel-300">
                                <div className="flex items-start mb-3">
                                    <div className="w-12 h-12 rounded-sm bg-steel-50 flex items-center justify-center mr-4 border border-steel-200">
                                        <Award className="text-primary-600" size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-neutral-900 uppercase tracking-wide">25+ Years Expertise</h3>
                                        <p className="text-neutral-600 text-sm mt-1">Industry experience and technical knowledge</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-neutral-200 hover:border-steel-300">
                                <div className="flex items-start mb-3">
                                    <div className="w-12 h-12 rounded-sm bg-steel-50 flex items-center justify-center mr-4 border border-steel-200">
                                        <Wrench className="text-primary-600" size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-neutral-900 uppercase tracking-wide">Precision Equipment</h3>
                                        <p className="text-neutral-600 text-sm mt-1">Advanced CNC machines and testing instruments</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-sm transition-all shadow-md hover:shadow-lg flex items-center border border-primary-800">
                                <span>Learn More</span>
                                <ChevronRight size={18} className="ml-2" />
                            </a>
                            <a href="#" className="px-6 py-3 border border-neutral-300 hover:border-primary-600 text-neutral-700 hover:text-primary-600 font-medium rounded-sm transition-all flex items-center bg-white">
                                <Phone size={18} className="mr-2" />
                                <span>Contact Us</span>
                            </a>
                        </div>
                    </div>

                    {/* Image/Video section - spans 6 columns */}
                    <div className="lg:col-span-6">
                        <div className="bg-white rounded-sm shadow-lg p-3 border border-neutral-200">
                            <div className="rounded-sm overflow-hidden relative group" onClick={() => setPlayPromoVideo(true)}>
                                <img src={Banner} alt="CNC machining" className="w-full h-auto object-cover" />

                                {/* Technical overlay with diagonal pattern */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-80"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:10px_10px] opacity-5"></div>

                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-16 h-16 bg-neutral-900/50 backdrop-blur-sm border border-neutral-500 rounded-sm flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-primary-600/80 group">
                                        <Play className="text-white ml-1" size={25}    />
                                    </button>
                                </div>

                                {/* Caption with tech-style border */}
                                <div className="absolute bottom-0 left-0 w-full p-6 border-t border-l border-white/20">
                                    <h3 className="text-white text-lg font-bold uppercase tracking-wide flex items-center">
                                        <span className="h-4 w-1 bg-primary-500 mr-2 inline-block"></span>
                                        Explore Our Manufacturing Process
                                    </h3>
                                    <p className="text-white/80 text-sm mt-2 ml-3">
                                        Watch how our engineering team transforms concepts into precision parts
                                    </p>
                                </div>
                            </div>

                            {/* Technical specifications */}
                            <div className="grid grid-cols-3 mt-3 border-t border-neutral-200 pt-3">
                                <div className="flex items-center p-2 border-r border-neutral-200">
                                    <div className="w-10 h-10 rounded-sm bg-steel-50 flex items-center justify-center mr-3 border border-steel-200">
                                        <Cog className="text-primary-600" size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-500 uppercase">Precision</div>
                                        <div className="font-semibold">±0.01mm</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-2 border-r border-neutral-200">
                                    <div className="w-10 h-10 rounded-sm bg-steel-50 flex items-center justify-center mr-3 border border-steel-200">
                                        <Users className="text-primary-600" size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-500 uppercase">Team</div>
                                        <div className="font-semibold">20+ Engineers</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-2">
                                    <div className="w-10 h-10 rounded-sm bg-steel-50 flex items-center justify-center mr-3 border border-steel-200">
                                        <Award className="text-primary-600" size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-500 uppercase">Certified</div>
                                        <div className="font-semibold">ISO 9001</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {playPromoVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setPlayPromoVideo(false)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setPlayPromoVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary-500 transition-colors"
            >
              Close Video
            </button>
            <div className="aspect-video w-full bg-black">
              <video
                autoPlay
                controls
                className="w-full h-full object-contain"
              >
                <source src="/path/to/company-intro.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      )}
        </section>
    );
};

export default FactoryStrengthSection;
