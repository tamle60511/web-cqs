import TopBar from '@/front-end/components/Topbar';
import CallToAction from '@/front-end/homepage/CallToAction';
import Certifications from '@/front-end/homepage/Certifications';
import FactoryStrengthSection from '@/front-end/homepage/FactoryStrengthSection';
import GlobalReach from '@/front-end/homepage/GlobalReach';
import Hero from '@/front-end/homepage/Hero';
import IndustriesSection from '@/front-end/homepage/IndustriesSection';
import MetalsSection from '@/front-end/homepage/MetalsSection';
import News from '@/front-end/homepage/New';
import NewsResources from '@/front-end/homepage/NewsResources';
import OneStopService from '@/front-end/homepage/OneStopService';
import Layout from '@/front-end/layout/Layout';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <TopBar />
            <Layout title="Home">
                <Hero />
                <FactoryStrengthSection />
                <NewsResources />
                <IndustriesSection />
                <MetalsSection />
                <CallToAction />
                <OneStopService />
                <Certifications />
                <GlobalReach />
                <News />
            </Layout>
        </>
    );
}
