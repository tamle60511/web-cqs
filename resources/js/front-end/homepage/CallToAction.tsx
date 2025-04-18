import { Link } from '@inertiajs/react';
import React from 'react';
import { PhoneCall, FileText, ArrowRight } from 'lucide-react';

// Since this component doesn't accept any props, we can simply add the return type
export default function CallToAction(): React.ReactElement {
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Technical background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_9px,#333_10px),linear-gradient(to_bottom,transparent_9px,#333_10px)] [background-size:10px_10px] opacity-10"></div>

      {/* Diagonal accent elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-600/20 rotate-45 z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-steel-600/20 rotate-45 z-0"></div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 w-full h-4 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-primary-600/30 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-4 bg-primary-600/40"></div>
            )}
          </div>
        ))}
      </div>

      {/* Main content with industrial border */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto border border-neutral-700 bg-neutral-800/50 shadow-xl p-8 lg:p-12 relative">
          {/* Corner technical elements */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary-500 -mt-1 -ml-1"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary-500 -mb-1 -mr-1"></div>

          {/* Section identifier badge */}
          <div className="inline-block bg-primary-600/90 text-white text-xs tracking-wider uppercase py-1 px-3 absolute -top-3 left-8 border-l border-r border-b border-primary-700">ACTION REQ-01</div>

          <div className="text-center pt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Ready to Engineer <span className="text-primary-500">Superior Components?</span>
            </h2>

            <div className="w-20 h-0.5 bg-primary-600 mx-auto mb-8"></div>

            <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
              Partner with our precision engineering team to develop high-performance aluminum
              components that meet the exacting standards of the automotive and motorcycle industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5
                         bg-gradient-to-r from-primary-600 to-primary-700
                         text-white font-medium tracking-wide border border-primary-700
                         hover:from-primary-700 hover:to-primary-800
                         shadow-lg hover:shadow-primary-900/30 transition-all group"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Contact Engineering Team
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-3.5
                         bg-transparent text-white border border-neutral-500
                         font-medium tracking-wide hover:bg-neutral-800 hover:border-neutral-400
                         transition-colors"
              >
                <FileText className="mr-2 h-5 w-5" />
                Request Technical Quote
              </Link>
            </div>

            {/* Technical datapoints */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-12 pt-8 border-t border-neutral-700">
              <div className="text-center">
                <div className="text-2xl text-primary-500 font-bold">20+</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary-500 font-bold">±0.01mm</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Precision</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary-500 font-bold">ISO 9001</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical measurement bottom marks */}
        <div className="absolute bottom-0 left-0 w-full h-4 flex transform rotate-180">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-primary-600/30 relative">
              {i % 5 === 0 && (
                <div className="absolute top-0 right-0 w-0.5 h-4 bg-primary-600/40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
