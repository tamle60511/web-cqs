import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight, File, Video, FileText, ExternalLink, LucideIcon } from 'lucide-react';



// Define interfaces for type safety
interface NewsItem {
  type: string;
  title: string;
  image: string;
  url: string;
  icon: LucideIcon;
}

interface NewsResourcesProps {
  news?: NewsItem[];
}

interface ResourceCardProps extends NewsItem {
  index: number;
}

export default function NewsResources({ news }: NewsResourcesProps) {
  // Default news data if not provided via props
  const defaultNews: NewsItem[] = [
    {
      type: 'TECHNICAL GUIDE',
      title: 'Aluminum Die Casting Process Optimization',
      image: '/images/Aluminum.jpg',
      url: '/resources/technical-guide/process-optimization',
      icon: FileText
    },
    {
      type: 'WHITEPAPER',
      title: 'Advanced Alloy Selection for Automotive Parts',
      image: '/images/Advanced.jpg',
      url: '/resources/whitepaper/alloy-selection',
      icon: File
    },
    {
      type: 'VIDEO',
      title: 'CNC Machining: Precision Engineering in Action',
      image: '/images/cnc.jpg',
      url: '/resources/video/cnc-machining',
      icon: Video
    }
  ];

  // Use provided news or default if not available
  const newsItems: NewsItem[] = news || defaultNews;

  return (
    <section className="py-20 bg-neutral-100 relative overflow-hidden">
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Industrial accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-primary-600 via-primary-500 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 rounded-sm mb-6 border-l-2 border-primary-600">
            <span className="text-sm font-medium tracking-wider uppercase">Technical Resources</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight text-center">
            Die Casting <span className="text-primary-600">Knowledge Center</span>
          </h2>

          <div className="w-20 h-1 bg-neutral-300 mb-8"></div>

          <p className="text-neutral-600 text-center max-w-2xl">
            Access our collection of technical documents, case studies, and video demonstrations
            to gain insights into advanced aluminum die casting and CNC machining processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <ResourceCard
              key={index}
              type={item.type}
              title={item.title}
              image={item.image}
              url={item.url}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/resources"
            className="inline-flex items-center justify-center px-6 py-3
                     bg-transparent text-primary-600 border border-primary-600
                     font-medium tracking-wide rounded-sm hover:bg-primary-600
                     hover:text-white transition-colors group"
          >
            Explore All Technical Resources
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual resource cards
function ResourceCard({ type, title, image, url, icon: Icon, index }: ResourceCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow-md border border-neutral-200 rounded-sm group transition-all duration-300 hover:shadow-lg hover:border-steel-300 flex flex-col h-full">
      <div className="relative overflow-hidden">
        {/* Technical overlay with angle */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 z-10"></div>
        <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-primary-600/20 clip-diagonal-th z-20"></div>

        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />

        {/* Type badge */}
        <div className="absolute top-4 left-0 z-20 bg-neutral-900/80 backdrop-blur-sm text-white text-xs font-semibold tracking-wider px-4 py-1.5 uppercase flex items-center border-l-2 border-primary-600">
          <Icon size={14} className="mr-2 text-primary-500" />
          {type}
        </div>

        {/* Technical reference number */}
        <div className="absolute bottom-4 right-4 z-20 text-white/60 text-xs font-mono">
          REF-{(index + 101).toString().padStart(3, '0')}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow border-t border-neutral-200">
        <h3 className="text-lg font-bold text-neutral-800 mb-4 flex-grow">{title}</h3>

        <Link
          href={url}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 text-sm uppercase tracking-wide border-b border-transparent hover:border-primary-600 pb-1 w-fit"
        >
          Access Resource
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      {/* Technical edge accent */}
      <div className="h-1 bg-gradient-to-r from-steel-400 via-steel-300 to-white"></div>
    </div>
  );
}
