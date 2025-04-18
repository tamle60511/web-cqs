import CoreValues from '@/front-end/about/CoreValues'
import CTASection from '@/front-end/about/CTASection'
import LeadershipTeam from '@/front-end/about/LeadershipTeam '
import Manufacturing from '@/front-end/about/Manufacturing'
import MissionVision from '@/front-end/about/MissionVision'
import Overview from '@/front-end/about/Overview'
import Timeline from '@/front-end/about/Timeline'
import CompanyHero from '@/front-end/components/AppHero'
import Layout from '@/front-end/Layout/Layout'
import React from 'react'

type Props = {}

const about = (props: Props) => {
  return (
    <>
    <Layout title='About'>
        <CompanyHero />
        <Overview />
        <Timeline />
        <MissionVision />
        <Manufacturing />
        <CoreValues />
        <LeadershipTeam />
        <CTASection />
    </Layout>
    </>
  )
}

export default about
