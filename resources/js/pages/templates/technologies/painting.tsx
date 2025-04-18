import Layout from '@/front-end/Layout/Layout'
import CoatingPerformanceComparison from '@/front-end/technologies/PerformanceRating'
import TechnicalSpecifications from '@/front-end/technologies/Specification'
import Technologies from '@/front-end/technologies/Technologies'
import TechnologyAdvantages from '@/front-end/technologies/TechnologyAdvantage'
import TechnologyHero from '@/front-end/technologies/TechnologyHero'
import TechnologyOverview from '@/front-end/technologies/TechnologyOverview'
import TechnologyProcess from '@/front-end/technologies/TechnologyProcess'
import React from 'react'

type Props = {}

const painting = (props: Props) => {
  return (
    <>
        <Layout title='Painting'>
        <TechnologyHero
        title="Surface Finishing Technology"
        titleHighlight="Industrial Painting"
        acronym="IPT"
        description="Our advanced industrial painting technology delivers premium surface finishes with exceptional durability, corrosion resistance, and aesthetic appeal. From powder coating to liquid painting, we provide complete surface finishing solutions for diverse applications and industries."
        imageSrc="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        imageAlt="Painting Process"
        imageCaption="Automated powder coating application on metal components in spray booth"
        imageRefCode="IPT-REF-01"
        specs={[
          { icon: 'gauge', label: 'Coating Types', value: 'Powder/Liquid' },
          { icon: 'checkCircle', label: 'Thickness', value: '25-150 μm' },
          { icon: 'settings', label: 'Curing Temp', value: '140-200°C' },
          { icon: 'network', label: 'Applications', value: 'All Metals, Composites' }
        ]}
      />
      <TechnologyOverview />
      <TechnologyProcess />
      <TechnologyAdvantages />
      <Technologies />
      <TechnicalSpecifications />
      <CoatingPerformanceComparison />
        </Layout>
    </>
  )
}

export default painting
