import { AlertCircle, ArrowRight, Cog, Cpu, Ruler, Shield, Target, Wrench, Zap } from 'lucide-react';
import React from 'react';

interface Capability {
    id: string;
    title: string;
    image: string;
    features: string[];
    precision?: string; // Added technical specification
    capacity?: string; // Added technical specification
}

interface ManufacturingProps {
    className?: string;
    title?: React.ReactNode;
    subtitle?: string;
    description?: string;
    capabilities?: Capability[];
    buttonText?: string;
    buttonLink?: string;
    companyName?: string;
}

const Manufacturing: React.FC<ManufacturingProps> = ({
    className = '',
    title = (
        <>
            Manufacturing <span className="text-primary-600">Capabilities</span>
        </>
    ),
    subtitle = 'Technical Expertise',
    description = 'Our vertically integrated manufacturing facility combines advanced technologies and processes to deliver complete solutions from concept to finished component.',
    capabilities = [
        {
            id: 'CAP-01',
            title: 'Aluminum Die Casting',
            image: '/images/Aluminum.jpg',
            features: [
                'High-pressure die casting up to 1,600 tons',
                'Multi-cavity tooling for efficient production',
                'Aluminum alloys: ADC12, A380, A356, A413',
                'Component weight range: 50g to 10kg',
            ],
            precision: '±0.1mm',
            capacity: '500,000 units/year',
        },
        {
            id: 'CAP-02',
            title: 'CNC Precision Machining',
            image: 'https://images.unsplash.com/photo-1717386255773-a456c611dc4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            features: [
                '25 CNC machining centers including 5-axis',
                'High-precision machining to ±0.01mm tolerance',
                'Advanced CAM programming capabilities',
                'Complex geometry and thin-wall machining',
            ],
            precision: '±0.01mm',
            capacity: '750,000 units/year',
        },
        {
            id: 'CAP-03',
            title: 'Surface Treatment',
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            features: [
                'Anodizing line (Type II and Type III)',
                'Powder coating with automated application',
                'E-coating for corrosion protection',
                'Mechanical finishing: polishing, bead blasting',
            ],
            precision: 'Class A surface',
            capacity: '900,000 units/year',
        },
    ],
    buttonText = 'View All Capabilities',
    buttonLink = '#',
    companyName = 'CQS',
}) => {
    // Technical patterns
    const gridPatternClass = 'bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]';
    const diagonalPatternClass =
        'bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px]';

    // Current year for reference codes
    const currentYear = new Date().getFullYear();

    // Icons for capabilities (you can map these to specific capability IDs if needed)
    const capabilityIcons = {
        'CAP-01': <Zap size={16} className="text-primary-600" />,
        'CAP-02': <Wrench size={16} className="text-primary-600" />,
        'CAP-03': <Shield size={16} className="text-primary-600" />,
    };

    // Icons for feature lists (you can use these randomly or map to specific features)
    const featureIcons = [
        <Target size={12} className="text-primary-500" />,
        <Cog size={12} className="text-primary-500" />,
        <Cpu size={12} className="text-primary-500" />,
        <AlertCircle size={12} className="text-primary-500" />,
    ];

    return (
        <section className={`relative overflow-hidden bg-white py-16 md:py-24 ${className}`}>
            {/* Technical background patterns */}
            <div className={`pointer-events-none absolute inset-0 opacity-5 ${gridPatternClass}`}></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#eee_50px,#eee_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#eee_50px,#eee_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.4]"></div>

            {/* Technical corner accents */}
            <div className="absolute top-8 right-8 hidden h-32 w-32 border-t border-r border-neutral-300 lg:block"></div>
            <div className="absolute bottom-8 left-8 hidden h-32 w-32 border-b border-l border-neutral-300 lg:block"></div>

            {/* Technical measurement marks */}
            <div className="absolute top-0 right-0 left-0 flex hidden h-2 opacity-30 md:flex">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="relative flex-1 border-r border-neutral-400/20">
                        {i % 5 === 0 && <div className="absolute top-0 right-0 h-2 w-0.5 bg-neutral-400/50"></div>}
                    </div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="mb-16 flex flex-col items-center">
                    {/* Technical section label */}
                    <div className="border-primary-600 relative mb-6 inline-flex items-center border-l-2 bg-neutral-800/90 px-4 py-2 text-white">
                        <div className="border-primary-500 absolute -top-1 -left-1 h-2 w-2 border-t border-l"></div>
                        <div className="border-primary-500 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b"></div>
                        <Ruler className="mr-2" size={14} />
                        <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
                    </div>
                    <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-neutral-900">{title}</h2>
                    <div className="relative mb-8 h-0.5 w-20 bg-neutral-300">
                        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 transform border border-neutral-300"></div>
                    </div>
                    // Thay thế đoạn mã trên bằng:
                    <div className="relative">
                        <p className="mb-12 max-w-2xl text-center text-neutral-600">{description}</p>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform font-mono text-xs whitespace-nowrap text-neutral-400">
                            <span className="mr-2">
                                REF: {companyName}-CAP-{currentYear}
                            </span>
                            <span className="mx-2 inline-block h-px w-16 bg-neutral-300 align-middle"></span>
                            <span>VERSION 1.2</span>
                        </div>
                    </div>
                </div>

                {/* Blueprint-style technical detail */}
                <div className="relative mb-10 h-px w-full bg-neutral-200">
                    <div className="absolute -top-3 left-0 font-mono text-xs text-neutral-500">CAPABILITIES.INDEX</div>
                    <div className="absolute -top-3 right-0 font-mono text-xs text-neutral-500">PRECISION.SPECS</div>
                    {capabilities.map((capability, index) => (
                        <div
                            key={`marker-${index}`}
                            className="bg-primary-600 absolute -top-1 h-2 w-0.5"
                            style={{ left: `${(index + 1) * 25 - index * 5}%` }}
                        >
                            <div className="text-primary-600 absolute -top-5 left-1/2 -translate-x-1/2 transform font-mono text-xs">
                                {capability.id}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {capabilities.map((capability, index) => (
                        <div
                            key={`capability-${index}`}
                            className="group relative overflow-hidden border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                        >
                            {/* Enhanced technical reference badge */}
                            <div className="group-hover:border-primary-400 absolute top-3 right-3 z-10 flex items-center border border-neutral-200 bg-white/90 px-2 py-1 font-mono text-xs text-neutral-600 shadow-sm backdrop-blur-sm transition-colors">
                                <span className="text-primary-600 mr-1">ID:</span>
                                {capability.id}
                            </div>

                            {/* Technical corner accents */}
                            <div className="group-hover:border-primary-600/30 absolute top-0 left-0 z-10 h-8 w-8 border-t-2 border-l-2 border-transparent transition-colors duration-300"></div>
                            <div className="group-hover:border-primary-600/30 absolute right-0 bottom-0 z-10 h-8 w-8 border-r-2 border-b-2 border-transparent transition-colors duration-300"></div>

                            <div className="relative h-48 overflow-hidden">
                                {/* Measurement marks */}
                                <div className="absolute top-0 bottom-0 left-0 z-20 flex w-1 flex-col opacity-0 transition-opacity group-hover:opacity-100">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="relative flex-1 border-b border-white/30">
                                            {i % 2 === 0 && <div className="absolute bottom-0 left-0 h-0.5 w-2 bg-white/50"></div>}
                                        </div>
                                    ))}
                                </div>

                                <img
                                    src={capability.image}
                                    alt={capability.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                                <div className={`absolute inset-0 ${diagonalPatternClass} opacity-10`}></div>

                                {/* Enhanced title area with technical elements */}
                                <div className="absolute right-0 bottom-0 left-0 p-4">
                                    <div className="flex items-center">
                                        <div className="bg-primary-800/80 border-primary-600/50 mr-3 flex h-6 w-6 items-center justify-center rounded-sm border backdrop-blur-sm">
                                            {capabilityIcons[capability.id as keyof typeof capabilityIcons]}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                                    </div>

                                    {/* Technical specifications */}
                                    <div className="mt-2 flex items-center space-x-4 text-xs">
                                        <div className="border-primary-600/50 rounded-sm border-l bg-black/30 px-2 py-1 text-white backdrop-blur-sm">
                                            <span className="text-primary-400 mr-1 font-mono">PRE:</span>
                                            {capability.precision}
                                        </div>
                                        <div className="border-primary-600/50 rounded-sm border-l bg-black/30 px-2 py-1 text-white backdrop-blur-sm">
                                            <span className="text-primary-400 mr-1 font-mono">CAP:</span>
                                            {capability.capacity}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-neutral-200 p-6">
                                {/* Technical specification header */}
                                <div className="mb-3 flex items-center justify-between">
                                    <div className="text-xs font-medium tracking-wider text-neutral-500 uppercase">Process Specifications</div>
                                    <div className="font-mono text-xs text-neutral-400">{capability.id}.SPECS</div>
                                </div>

                                <ul className="space-y-3">
                                    {capability.features.map((feature, featureIndex) => (
                                        <li key={`feature-${index}-${featureIndex}`} className="group/item flex items-start text-sm text-neutral-600">
                                            <div className="group-hover/item:bg-primary-50 group-hover/item:border-primary-200 mt-0.5 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border border-neutral-200 bg-neutral-50 transition-colors">
                                                {featureIcons[featureIndex % featureIcons.length]}
                                            </div>
                                            <span className="transition-colors group-hover/item:text-neutral-900">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technical footer */}
                                <div className="mt-4 flex items-center justify-between border-t border-dashed border-neutral-200 pt-3">
                                    <div className="font-mono text-[10px] text-neutral-400">
                                        SYS.VER.{currentYear}.{index + 1}
                                    </div>
                                    <div className="font-mono text-[10px] text-neutral-400">
                                        <span className="text-primary-500">{capability.id}</span>/{companyName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative mt-12 text-center">
                    {/* Technical detail for the button */}
                    <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 transform items-center font-mono text-xs text-neutral-500">
                        <div className="mr-2 h-px w-12 bg-neutral-300"></div>
                        <span>ACTION.REFERENCE</span>
                        <div className="ml-2 h-px w-12 bg-neutral-300"></div>
                    </div>

                    <a
                        href={buttonLink}
                        className="hover:bg-primary-600 hover:border-primary-700 group relative inline-flex items-center border border-neutral-700 bg-neutral-800 px-6 py-3 font-medium text-white transition-colors"
                    >
                        {/* Technical corner elements */}
                        <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-white/30 opacity-0 transition-opacity group-hover:opacity-100"></div>

                        {buttonText}
                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                    </a>

                    {/* Technical reference number */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform font-mono text-xs text-neutral-500">
                        DOC.{companyName}.CAP.{currentYear}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manufacturing;
