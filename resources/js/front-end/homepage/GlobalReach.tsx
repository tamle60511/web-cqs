import React from "react";
import company from "../images/banner-esg.jpg";
import { MapPin, Clock, ExternalLink, Users, Award, Factory } from "lucide-react";

interface GlobalReachProps {
  className?: string;
}

const GlobalReach: React.FC<GlobalReachProps> = ({ className }) => {
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
            className="col-span-12 lg:col-span-5"
            data-aos="fade-right"
          >
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600">
              <span className="text-sm font-medium tracking-wider uppercase">Company Profile</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6 tracking-tight">
              CQS <span className="text-primary-600">PRECISION DIE CASTING INC</span>
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-8"></div>

            {/* Key company stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-200 border border-neutral-300 flex items-center justify-center mr-3">
                  <Factory size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Founded</div>
                  <div className="font-medium">2005</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-200 border border-neutral-300 flex items-center justify-center mr-3">
                  <MapPin size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Location</div>
                  <div className="font-medium">Western Vietnamese</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-200 border border-neutral-300 flex items-center justify-center mr-3">
                  <Users size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Employees</div>
                  <div className="font-medium">1000+</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-200 border border-neutral-300 flex items-center justify-center mr-3">
                  <Award size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Certification</div>
                  <div className="font-medium">ISO 9001:2015</div>
                </div>
              </div>
            </div>

            <p className="text-neutral-700 mb-4 leading-relaxed text-sm border-l-2 border-neutral-300 pl-4">
            CQS provides customers with a “one-stop” service, besides offering the die-casting production line, the CNC precision
                            processing production line, the stamping (metalworking),the paint line, the assembly line and the packaging line, it also
                            offers the test of quality control at each station to with assure products meet customers’ requirements. So far, the
                            products have been sold to Taiwan, the United States, Canada, Mexico, Japan, Italy, China, and Southeast Asia.
            </p>

            <p className="text-neutral-700 mb-6 leading-relaxed text-sm">
              With strong technical expertise, advanced equipment, and experienced engineering personnel,
              the company undertakes the processing and manufacturing of various precision molds and components,
              widely applied in <strong>automotive</strong>, <strong>home appliances</strong>, <strong>medical</strong>,
              <strong>communications</strong>, and other fields.
            </p>

            <div className="flex space-x-4 mb-8">
              <div className="h-1 w-12 bg-primary-600"></div>
              <div className="h-1 w-6 bg-neutral-300"></div>
              <div className="h-1 w-3 bg-neutral-300"></div>
            </div>

            <a
              href="/about"
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700
                       text-white font-medium border border-primary-700
                       hover:from-primary-700 hover:to-primary-800 transition-all
                       shadow-lg hover:shadow-primary-900/30 inline-flex items-center group"
            >
              <span>Company History & Capabilities</span>
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
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
                FACILITY-SH-001
              </div>

              <img
                src={company}
                alt="Zhongsen Precision Mold Manufacturing Facility"
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
                    <div className="text-white font-medium">CQS Manufacturing Facility</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-neutral-300">
                      <MapPin size={14} className="mr-1" />
                      <span>Western VietNamese Industrial Zone</span>
                    </div>
                    <div className="flex items-center text-neutral-300">
                      <Clock size={14} className="mr-1" />
                      <span>Established 2005</span>
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
