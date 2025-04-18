
import React from 'react';
import { Boxes, Settings, ShieldCheck, Download, Clock } from 'lucide-react';

// Interface for specification item
interface SpecificationItem {
  id: string;
  label: string;
  value: string;
}

// Interface for specification category
interface SpecificationCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: SpecificationItem[];
}

// Component props interface
interface TechnicalSpecificationsProps {
  id?: string;
  className?: string;
  lastUpdated?: string;
  referenceCode?: string;
  version?: string;
}

// Specification Item Component
const SpecItem: React.FC<{ item: SpecificationItem; isLast?: boolean }> = ({ item, isLast = false }) => (
  <div className={`flex justify-between ${!isLast ? 'border-b border-neutral-700 pb-2' : ''}`}>
    <span className="text-neutral-400 text-sm">{item.label}</span>
    <span className="text-white text-sm font-medium">{item.value}</span>
  </div>
);

// Specification Category Component
const SpecCategory: React.FC<{ category: SpecificationCategory }> = ({ category }) => (
  <div className="bg-neutral-800/50 border border-neutral-700 p-5 relative">
    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/40"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/40"></div>

    <h3 className="text-lg font-bold mb-4 flex items-center">
      {category.icon}
      {category.title}
    </h3>

    <div className="space-y-3">
      {category.items.map((item, index) => (
        <SpecItem
          key={item.id}
          item={item}
          isLast={index === category.items.length - 1}
        />
      ))}
    </div>
  </div>
);

// Specifications data
const specificationsData: SpecificationCategory[] = [
  {
    id: "powder-coating",
    title: "Powder Coating Specifications",
    icon: <Settings className="w-5 h-5 mr-2 text-primary-500" />,
    items: [
      { id: "powder-thickness", label: "Coating Thickness", value: "40-150 μm" },
      { id: "powder-temperature", label: "Cure Temperature", value: "180-200°C" },
      { id: "powder-time", label: "Cure Time", value: "10-20 minutes" },
      { id: "powder-resistance", label: "Salt Spray Resistance", value: "Up to 1,000 hours" },
      { id: "powder-impact", label: "Impact Resistance", value: "80+ in/lb" }
    ]
  },
  {
    id: "liquid-coating",
    title: "Liquid Coating Specifications",
    icon: <ShieldCheck className="w-5 h-5 mr-2 text-primary-500" />,
    items: [
      { id: "liquid-thickness", label: "Coating Thickness", value: "25-100 μm" },
      { id: "liquid-temperature", label: "Cure Temperature", value: "140-180°C" },
      { id: "liquid-voc", label: "VOC Content", value: "50-350 g/L" },
      { id: "liquid-gloss", label: "Gloss Range", value: "5-95 GU" },
      { id: "liquid-uv", label: "UV Resistance", value: "Up to 5 years (exterior)" }
    ]
  }
];

const TechnicalSpecifications: React.FC<TechnicalSpecificationsProps> = ({
  id = "technical-specs",
  className = "",
  lastUpdated = "2023-10-05",
  referenceCode = "IPT-TECH-SPEC-2023",
  version = "3.0"
}) => {
  return (
    <section id={id} className={`py-16 md:py-20 bg-neutral-900 text-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/30">
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary-600/40"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/30">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary-600/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Technical document code */}
          <div className="inline-flex items-center bg-neutral-800/80 text-white px-3 py-1 mb-8 border-l-2 border-primary-600 text-xs font-mono">
            <Boxes className="w-3 h-3 mr-2 text-primary-500" />
            <span>TECHNICAL.SPECIFICATIONS.IPT</span>
          </div>

          <h2 className="text-3xl font-bold mb-6 relative">
            Detailed <span className="text-primary-500">Technical Specifications</span>
            <div className="absolute -top-3 -right-3 text-xs text-primary-400 font-mono opacity-60 hidden md:block">[v.{version}]</div>
          </h2>

          <div className="w-20 h-0.5 bg-neutral-700 mx-auto mb-10 relative">
            <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
            {specificationsData.map(category => (
              <SpecCategory key={category.id} category={category} />
            ))}
          </div>

          {/* Download button */}
          <a href="#download" className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors border border-neutral-600 hover:border-neutral-500 group relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            Download Full Specifications
            <Download className="ml-2 w-5 h-5" />
          </a>

          {/* Technical footer */}
          <div className="mt-12 text-xs font-mono text-neutral-600 flex items-center justify-center">
            <Clock className="w-3 h-3 mr-1 text-primary-500/50" />
            <span>DOC UPDATED: {lastUpdated}</span>
            <span className="mx-2">|</span>
            <span>REF: {referenceCode}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecifications;
