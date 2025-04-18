
import React from 'react';
import { Activity, Check } from 'lucide-react';

// Interface for individual advantage items
interface AdvantageItem {
  id: string;
  title: string;
  description: string;
}

// Interface for component props
interface PaintingAdvantagesProps {
  id?: string;
  className?: string;
}

// Advantage item component
const AdvantageListItem: React.FC<AdvantageItem> = ({ title, description }) => (
  <div className="flex items-start">
    <div className="w-6 h-6 rounded-sm bg-primary-50 border border-primary-200 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
      <Check className="w-3.5 h-3.5 text-primary-500" />
    </div>
    <div>
      <div className="font-medium text-neutral-900">{title}</div>
      <p className="text-sm text-neutral-600 mt-1">{description}</p>
    </div>
  </div>
);

// Advantages data
const advantages: AdvantageItem[] = [
  {
    id: "corrosion-protection",
    title: "Superior Corrosion Protection",
    description: "Industrial coatings provide excellent corrosion resistance, extending component lifespan even in harsh environments."
  },
  {
    id: "durability",
    title: "Enhanced Durability",
    description: "Painted finishes resist scratches, impacts, chemicals, UV radiation, and weathering for prolonged product life."
  },
  {
    id: "aesthetic-versatility",
    title: "Aesthetic Versatility",
    description: "Unlimited color options, textures, and gloss levels for customized appearance to match brand identity and design requirements."
  },
  {
    id: "environmental-compliance",
    title: "Environmental Compliance",
    description: "Modern coating systems meet stringent environmental regulations with low-VOC or zero-VOC formulations."
  },
  {
    id: "functional-properties",
    title: "Functional Properties",
    description: "Specialized coatings offer additional functionalities like electrical insulation, thermal resistance, or antimicrobial properties."
  },
  {
    id: "cost-effective",
    title: "Cost-Effective Protection",
    description: "Extends product lifespan and reduces maintenance costs, providing excellent long-term value compared to unprotected parts."
  }
];

const TechnologyAdvantages: React.FC<PaintingAdvantagesProps> = ({
  id = "painting-advantages",
  className = ""
}) => {
  return (
    <section id={id} className={`py-16 bg-white relative ${className}`}>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <Activity className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">Benefits</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              Key <span className="text-primary-600">Advantages</span> of Industrial Painting
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map(advantage => (
                <AdvantageListItem
                  key={advantage.id}
                  id={advantage.id}
                  title={advantage.title}
                  description={advantage.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyAdvantages;
