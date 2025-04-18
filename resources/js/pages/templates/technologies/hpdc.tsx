import Layout from '@/front-end/Layout/Layout'
import TechnicalSpecifications from '@/front-end/technologies/Specification'
import Technologies from '@/front-end/technologies/Technologies'
import TechnologyAdvantages from '@/front-end/technologies/TechnologyAdvantage'
import TechnologyHero from '@/front-end/technologies/TechnologyHero'
import TechnologyOverview from '@/front-end/technologies/TechnologyOverview'
import TechnologyProcess from '@/front-end/technologies/TechnologyProcess'
import React from 'react'

type Props = {}

const hpdc = (props: Props) => {
  return (
    <>
    <Layout title='HPDC'>
        <TechnologyHero
        title="High Pressure"
        titleHighlight="Die Casting"
        acronym="HPDC"
        description="Our high pressure die casting technology delivers high-quality aluminum components with excellent dimensional accuracy and surface finish. This process is ideal for complex, thin-walled parts produced at high volumes."
        imageSrc="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        imageAlt="HPDC Process"
        imageCaption="Molten aluminum being injected into a steel die under high pressure"
        imageRefCode="HPDC-REF-01"
        specs={[
          { icon: 'gauge', label: 'Pressure', value: '70-140 MPa' },
          { icon: 'checkCircle', label: 'Tolerance', value: '±0.1mm' },
          { icon: 'settings', label: 'Wall Thickness', value: '0.5-10mm' },
          { icon: 'network', label: 'Materials', value: 'Aluminum Alloys' }
        ]}
      />
      <TechnologyOverview />
      <TechnologyProcess />
      <TechnologyAdvantages />
      <Technologies />
      <TechnicalSpecifications />
    </Layout>
    </>
  )
}

export default hpdc
