import AppLogo from '@/components/app-logo';
import CallToAction from '@/front-end/homepage/CallToAction';
import FactoryStrengthSection from '@/front-end/homepage/FactoryStrengthSection';
import GlobalReach from '@/front-end/homepage/GlobalReach';
import Hero from '@/front-end/homepage/Hero';
import IndustriesSection from '@/front-end/homepage/IndustriesSection';
import MetalsSection from '@/front-end/homepage/MetalsSection';
import MoreProduct from '@/front-end/homepage/MoreProduct';
import News from '@/front-end/homepage/New';
import NewsResources from '@/front-end/homepage/NewsResources';
import OneStopService from '@/front-end/homepage/OneStopService';
import Footer from '@/front-end/Layout/Footer';
import Header from '@/front-end/Layout/Header';
import Layout from '@/front-end/Layout/Layout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
           <Layout title='Home'>
           <Hero />
            <FactoryStrengthSection />
            <NewsResources />
            <IndustriesSection />
            <MetalsSection />
            <CallToAction />
            <OneStopService />
            <MoreProduct />
            <GlobalReach />
            <News />
           </Layout>
        </>
    );
}
