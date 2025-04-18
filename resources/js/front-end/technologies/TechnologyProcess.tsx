
import React from 'react';
import { Image, Hash, ZoomIn, Play } from 'lucide-react';

// Define TypeScript interfaces for the gallery items
interface ProcessGalleryItem {
  id: string;
  step: number;
  title: string;
  description: string;
  imageSrc: {
    thumbnail: string;
    fullSize: string;
  };
  refCode: string;
}

interface ProcessGalleryProps {
  id?: string;
  className?: string;
}

// Gallery Item Component
const GalleryItem: React.FC<ProcessGalleryItem> = ({ id, step, title, description, imageSrc, refCode }) => (
  <div className="group relative cursor-pointer" data-src={imageSrc.fullSize}>
    <div className="overflow-hidden border border-neutral-700 bg-neutral-800 relative">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc.thumbnail}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Technical overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#333_25%,transparent_25%,transparent_50%,#333_50%,#333_75%,transparent_75%,transparent)] bg-[length:8px_8px] opacity-10"></div>

      {/* Technical frame */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary-500/40"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary-500/40"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary-500/40"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary-500/40"></div>
    </div>

    {/* Caption */}
    <div className="bg-neutral-800 border-t border-neutral-700 p-4">
      <div className="text-xs font-mono text-primary-400/80 mb-1 flex items-center">
        <Hash className="w-3 h-3 mr-1.5" />
        STEP {step.toString().padStart(2, '0')}
      </div>
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-neutral-400 text-sm mt-1">{description}</p>
    </div>

    {/* Technical reference */}
    <div className="absolute top-3 right-3 text-xs font-mono text-white/70 bg-neutral-900/50 px-2 py-1 backdrop-blur-sm z-10">
      {refCode}
    </div>

    {/* Zoom icon */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600/80 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
      <ZoomIn className="w-6 h-6 text-white" />
    </div>
  </div>
);

// Gallery items data
const galleryItems: ProcessGalleryItem[] = [
  {
    id: "surface-preparation",
    step: 1,
    title: "Surface Preparation",
    description: "Mechanical or chemical cleaning to remove contaminants, oils, and create optimal surface profile for coating adhesion.",
    imageSrc: {
      thumbnail: "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      fullSize: "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    refCode: "IPT-01"
  },
  {
    id: "pre-treatment",
    step: 2,
    title: "Pre-treatment",
    description: "Chemical treatments such as phosphating or conversion coating to enhance adhesion and corrosion resistance.",
    imageSrc: {
      thumbnail: "https://images.unsplash.com/photo-1581092916357-5895ad271243?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      fullSize: "https://images.unsplash.com/photo-1581092916357-5895ad271243?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    refCode: "IPT-02"
  },
  {
    id: "coating-application",
    step: 3,
    title: "Coating Application",
    description: "Application of paint or powder coating using automated spray systems, electrostatic guns, or dipping methods.",
    imageSrc: {
      thumbnail: "https://images.unsplash.com/photo-1579781354199-a28a85f87dce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      fullSize: "https://images.unsplash.com/photo-1579781354199-a28a85f87dce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    refCode: "IPT-03"
  },
  {
    id: "curing-process",
    step: 4,
    title: "Curing Process",
    description: "Heat application in specialized ovens at 140-200°C to polymerize and harden the coating, forming a durable finish.",
    imageSrc: {
      thumbnail: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      fullSize: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    refCode: "IPT-04"
  },
  {
    id: "cooling-process",
    step: 5,
    title: "Cooling Process",
    description: "Controlled cooling to ambient temperature, preventing thermal stress and ensuring optimal finish characteristics.",
    imageSrc: {
      thumbnail: "https://images.unsplash.com/photo-1593171865395-e07c0bfa74db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      fullSize: "https://images.unsplash.com/photo-1593171865395-e07c0bfa74db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    refCode: "IPT-05"
  },
  {
    id: "quality-inspection",
    step: 6,
    title: "Quality Inspection",
    description: "Comprehensive verification of coating thickness, adhesion, appearance, and performance properties using specialized testing equipment.",
    imageSrc: {
      thumbnail: "https://images.unsplash.com/photo-1581093502840-439046a0439e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      fullSize: "https://images.unsplash.com/photo-1581093502840-439046a0439e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    refCode: "IPT-06"
  }
];

const TechnologyProcess: React.FC<ProcessGalleryProps> = ({ id = "process-gallery", className = "" }) => {
  // Note: In a real implementation, you would need to initialize a lightbox library
  // like lightGallery or PhotoSwipe here with useEffect

  return (
    <section id={id} className={`py-16 bg-neutral-900 text-white relative ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30">
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary-600/40"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary-600/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <Image className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">Process Visualization</span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight text-center">
              Industrial <span className="text-primary-500">Painting Process</span> Gallery
            </h2>

            <div className="w-20 h-0.5 bg-neutral-700 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
            </div>

            <p className="text-neutral-300 max-w-3xl text-center mb-10">
              Explore our advanced industrial painting process through this detailed visual guide. Each image represents a critical stage in creating durable, protective, and aesthetically appealing surface finishes.
            </p>
          </div>

          {/* Process Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="lightgallery">
            {galleryItems.map(item => (
              <GalleryItem
                key={item.id}
                id={item.id}
                step={item.step}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                refCode={item.refCode}
              />
            ))}
          </div>

          {/* Process Video Link */}
          <div className="mt-12 text-center">
            <a href="#video" className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 group relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Watch Painting Process Video
              <Play className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyProcess;
