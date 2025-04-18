import CallToActionSection from '@/front-end/contacts/CallToAction'
import ContactInformationSection from '@/front-end/contacts/ContactInformation'
import ContactInformationHero from '@/front-end/contacts/ContactInformationHero'
import LocationMapSection from '@/front-end/contacts/LocationMap'
import Layout from '@/front-end/Layout/Layout'
import React from 'react'

type Props = {}

const contacts = (props: Props) => {
  return (
    <Layout title='Contact Us'>
        <ContactInformationHero />
        <ContactInformationSection />
        <LocationMapSection />
        <CallToActionSection />
    </Layout>
  )
}

export default contacts
