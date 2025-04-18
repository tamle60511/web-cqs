
import React, { ReactNode } from 'react';
import { MoveRight, PaintBucket, LayoutGrid } from 'lucide-react';

// Define interfaces for structured data
interface ProcessStep {
  number: number;
  title: string;
}

interface ProcessDetail {
  number: number;
  title: string;
  description: string;
}

// Create a component for process steps with proper typing
const ProcessStepItem: React.FC<ProcessStep> = ({ number, title }) => (
  <div className="flex flex-col items-center relative">
    <div className="w-10 h-10 rounded-full bg-white z-10 border-2 border-primary-200 flex items-center justify-center text-primary-600 mb-2">
      {number}
    </div>
    <div className="text-sm font-medium text-neutral-800">{title}</div>
  </div>
);

// Create a component for process details with proper typing
const ProcessDetailItem: React.FC<ProcessDetail> = ({ number, title, description }) => (
  <div className="bg-neutral-50 p-4 border-l-2 border-primary-500">
    <div className="font-medium text-neutral-900">{number}. {title}</div>
    <p className="text-sm text-neutral-600">{description}</p>
  </div>
);

// Data for process steps
const processSteps: string[] = [
  "Surface Preparation",
  "Pre-treatment",
  "Coating Application",
  "Curing",
  "Cooling",
  "Quality Inspection"
];

// Data for process details
const processDetails: { title: string; description: string }[] = [
  {
    title: "Surface Preparation",
    description: "Mechanical or chemical cleaning to remove contaminants, oils, and debris. May include blasting, degreasing, or sanding to create optimal surface profile."
  },
  {
    title: "Pre-treatment",
    description: "Chemical treatments such as phosphating, chromating, or conversion coating to enhance adhesion and corrosion resistance of the final coating."
  },
  {
    title: "Coating Application",
    description: "Application of paint or powder coating using spray guns, electrostatic systems, or dipping methods. May be manual or fully automated for consistency."
  },
  {
    title: "Curing",
    description: "Heat application in curing ovens to polymerize the coating. Temperatures typically range from 140-200°C depending on coating type and substrate material."
  },
  {
    title: "Cooling",
    description: "Controlled cooling of components to ambient temperature, preventing thermal stress and ensuring optimal finish characteristics."
  },
  {
    title: "Quality Inspection",
    description: "Comprehensive verification of coating thickness, adhesion, appearance, and performance properties using specialized testing equipment."
  }
];

// Introduction paragraphs
const introText: string[] = [
  "Industrial painting encompasses a range of specialized coating technologies designed to apply protective and decorative finishes to manufactured products and components. It includes both powder coating and liquid painting processes, each offering distinct advantages for different applications.",
  "Our advanced painting systems utilize state-of-the-art application methods, environmentally compliant coatings, and precisely controlled curing processes to deliver superior surface finishes. These technologies provide essential protection against corrosion, wear, chemicals, and environmental factors while enhancing aesthetic appeal and product longevity."
];

interface IndustrialPaintingOverviewProps {
  id?: string;
  className?: string;
}

const TechnologyOverview: React.FC<IndustrialPaintingOverviewProps> = ({
  id = "learn-more",
  className = ""
}) => {
  return (
    <section id={id} className={`py-16 relative ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-12 right-12 w-24 h-24 border-t border-r border-neutral-300 hidden lg:block"></div>
      <div className="absolute bottom-12 left-12 w-24 h-24 border-b border-l border-neutral-300 hidden lg:block"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
              <MoveRight className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium tracking-wider uppercase">Process Overview</span>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
              Industrial <span className="text-primary-600">Painting Technology</span>
            </h2>

            <div className="w-20 h-0.5 bg-neutral-300 mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
            </div>
          </div>

          <div className="space-y-10">
            {/* Introduction */}
            <div className="bg-white border border-neutral-200 p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-500/30"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-500/30"></div>

              <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary-100 border border-primary-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <PaintBucket className="w-4.5 h-4.5 text-primary-600" />
                </div>
                What is Industrial Painting?
              </h3>

              {introText.map((paragraph, index) => (
                <p key={`intro-${index}`} className="text-neutral-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              <div className="text-xs text-neutral-500 font-mono flex items-center mt-6">
                <MoveRight className="w-3.5 h-3.5 mr-2 text-primary-500" />
                <span>REF: IPT-TECH-2023</span>
              </div>
            </div>

            {/* Painting Process Flow */}
            <div className="bg-white border border-neutral-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary-100 border border-primary-200 flex items-center justify-center mr-3 flex-shrink-0">
                  <LayoutGrid className="w-4.5 h-4.5 text-primary-600" />
                </div>
                Painting Process Flow
              </h3>

              <div className="relative py-8">
                {/* Process flow arrow */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-100 hidden md:block"></div>

                {/* Process steps */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-0">
                  {processSteps.map((step, index) => (
                    <ProcessStepItem
                      key={`step-${index}`}
                      number={index + 1}
                      title={step}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h4 className="text-lg font-bold text-neutral-900 mb-4">Process Details</h4>

                <div className="space-y-4">
                  {processDetails.map((detail, index) => (
                    <ProcessDetailItem
                      key={`detail-${index}`}
                      number={index + 1}
                      title={detail.title}
                      description={detail.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverview;
