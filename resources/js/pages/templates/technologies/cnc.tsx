import Layout from '@/front-end/layout/Layout'
import TechnicalSpecifications from '@/front-end/technologies/Specification';
import Technologies from '@/front-end/technologies/Technologies';
import TechnologyAdvantages from '@/front-end/technologies/TechnologyAdvantage';
import TechnologyHero from '@/front-end/technologies/TechnologyHero';
import TechnologyOverview from '@/front-end/technologies/TechnologyOverview';
import TechnologyProcess from '@/front-end/technologies/TechnologyProcess';
import useTechnologyData from '@/hooks/useTechnologyData';
import React from 'react'

type Props = {}

export default function CNCPage({}: Props) {
    const { data, isLoading, error } = useTechnologyData('cnc');
  return (
    <>
    <Layout title='CNC'>
    <TechnologyHero
        title="Computer Numerical"
        titleHighlight="Control"
        acronym="CNC"
        description="Our precision CNC machining technology enables high-precision production of complex components with exceptional accuracy and surface finish. From prototyping to high-volume production, we deliver quality metal and plastic parts for demanding applications."
        imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        imageAlt="CNC Machining"
        imageCaption="5-axis CNC machine cutting complex geometry on aluminum workpiece"
        imageRefCode="CNC-REF-01"
        specs={[
          { icon: 'gauge', label: 'Axes', value: '3-5 Axis Machining' },
          { icon: 'checkCircle', label: 'Tolerance', value: '±0.01mm' },
          { icon: 'settings', label: 'Spindle Speed', value: 'Up to 15,000 RPM' },
          { icon: 'network', label: 'Materials', value: 'Al, Steel, Titanium, Plastics' }
        ]}
      />
      <TechnologyOverview />.
      <TechnologyProcess />
      <TechnologyAdvantages />
      <Technologies />
      <TechnicalSpecifications />
    </Layout>
    </>
  )
}

