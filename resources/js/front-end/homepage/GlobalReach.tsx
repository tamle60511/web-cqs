import React, { useState, useEffect } from "react";
import company from "../images/banner-esg.jpg";
import { MapPin, Clock, Users, Award, Factory, } from "lucide-react";

interface GlobalReachProps {
  className?: string;
}

const GlobalReach: React.FC<GlobalReachProps> = ({ className }) => {
  // Slide content
  const slides = [
    {
      subtitle: "About CQS",
      title: <>
        <span className="text-primary-600">Creativity</span>, Quality & <span className="text-primary-600">Sustainability</span>
      </>,
      content: <>
        <p className="text-neutral-700 mb-4 leading-relaxed text-sm border-l-2 border-neutral-300 pl-4">
          CQS provides customers with a "one-stop" service, integrating die-casting production, CNC precision
          processing, stamping, painting, assembly, and packaging. We implement rigorous quality control at
          each station to ensure products meet and exceed customer requirements.
        </p>
        <p className="text-neutral-700 mb-6 leading-relaxed text-sm">
          As an aluminum die-casting specialist, CQS combines high-pressure die casting (HPDC) and gravity die
          casting (GDC) technologies to deliver premium components globally.
        </p>
      </>,
      cta: {
        text: "Learn About Our Technology",
        url: "/about"
      }
    },
    {
      subtitle: "Global Markets",
      title: <>
        International <span className="text-primary-600">Distribution</span> Network
      </>,
      content: <>
        <p className="text-neutral-700 mb-4 leading-relaxed text-sm border-l-2 border-neutral-300 pl-4">
          CQS has established a strong global presence with distribution channels spanning across Asia, North America, and Europe, meeting the needs of automotive and motorcycle manufacturers worldwide.
        </p>
        <p className="text-neutral-700 mb-6 leading-relaxed text-sm">
          Our products are distributed to <strong>Taiwan</strong>, <strong>the United States</strong>, <strong>Canada</strong>, <strong>Mexico</strong>, <strong>Japan</strong>, <strong>Italy</strong>, <strong>China</strong>, and <strong>Southeast Asia</strong>.
        </p>
      </>,
      cta: {
        text: "View Our Global Network",
        url: "/global"
      }
    },
    {
      subtitle: "Our Technology",
      title: <>
        Advanced <span className="text-primary-600">Die Casting</span> Solutions
      </>,
      content: <>
        <p className="text-neutral-700 mb-4 leading-relaxed text-sm border-l-2 border-neutral-300 pl-4">
          CQS specializes in both High Pressure Die Casting (HPDC) and Gravity Die Casting (GDC) technologies, allowing us to offer versatile manufacturing solutions for complex automotive components.
        </p>
        <p className="text-neutral-700 mb-6 leading-relaxed text-sm">
          Our state-of-the-art equipment includes die casting machines ranging from 250 to 1,650 tons, capable of producing lightweight, high-strength aluminum components with exceptional precision.
        </p>
      </>,
      cta: {
        text: "Explore Our Capabilities",
        url: "/technologies"
      }
    }
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);


  return (
    <section
      id="about-company"
      className="py-20 bg-neutral-100 relative overflow-hidden"
    >
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#333_50px,#333_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#333_50px,#333_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.02]"></div>

      {/* Industrial corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-primary-600/30"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-primary-600/30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-12 items-center py-12">
          <div
            className="col-span-12 lg:col-span-5 relative"
            data-aos="fade-right"
          >
            {/* Slider content */}
            <div className="relative overflow-hidden min-h-[480px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600">
                    <span className="text-sm font-medium tracking-wider uppercase">{slide.subtitle}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-neutral-900 mb-6 tracking-tight">
                    {slide.title}
                  </h2>

                  <div className="w-20 h-0.5 bg-neutral-300 mb-8"></div>

                  {/* Key company stats - Only shown on first slide */}
                  {index === 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-neutral-200 border border-neutral-300 flex items-center justify-center mr-3">
                          <Factory size={20} className="text-primary-600" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500">Established</div>
                          <div className="font-medium">2002</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-neutral-200 border border-neutral-300 flex items-center justify-center mr-3">
                          <MapPin size={20} className="text-primary-600" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500">Headquarters</div>
                          <div className="font-medium">Vietnam</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-neutral-200 border border-neutral-300 flex items-center justify-center mr-3">
                          <Users size={20} className="text-primary-600" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500">Global Markets</div>
                          <div className="font-medium">8+ Countries</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-neutral-200 border border-neutral-300 flex items-center justify-center mr-3">
                          <Award size={20} className="text-primary-600" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500">Certification</div>
                          <div className="font-medium">IATF 16949</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {slide.content}

                  <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 transition-all ${
                      index === currentSlide ? 'w-10 bg-primary-600' : 'w-4 bg-neutral-300 hover:bg-primary-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>


                </div>
              ))}
            </div>

          </div>

          <div
            className="col-span-12 lg:col-span-7 overflow-hidden shadow-md border border-neutral-200"
            data-aos="fade-left"
          >
            <div className="relative">
              {/* Technical corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/70 z-10"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/70 z-10"></div>

              {/* Technical reference badge */}
              <div className="absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-sm text-xs font-mono text-white px-2 py-1 z-10 border-r border-primary-600">
                CQS-FACILITY
              </div>

              <img
                src={company}
                alt="CQS Manufacturing Facility"
                className="w-full h-auto"
              />

              {/* Technical overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 to-neutral-900/30 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px] opacity-5"></div>

              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-sm py-3 px-4 border-t border-neutral-700">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-6 bg-primary-600 mr-3"></div>
                    <div className="text-white font-medium">Advanced Die Casting Facility</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-neutral-300">
                      <MapPin size={14} className="mr-1" />
                      <span>Vietnam Manufacturing Center</span>
                    </div>
                    <div className="flex items-center text-neutral-300">
                      <Clock size={14} className="mr-1" />
                      <span>93% Aluminum Recycling Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
