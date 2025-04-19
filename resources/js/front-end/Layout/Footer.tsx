import { Link } from '@inertiajs/react';

import React from 'react';
import Copyright from '../components/ui/Footer/Copyright';
import Newsletter from '../components/ui/Footer/Newsletter';
import SocialMedia from '../components/ui/Footer/SocialMedia';
import Logo from '../images/logo.png';
import Information from '../components/ui/Footer/Information';

interface NavLink {
    text: string;
    url: string;
}

const productLinks: NavLink[] = [
    { text: 'AL. Wheel', url: '/products/al-wheel' },
    { text: 'Light-Weight Products', url: '/products/lightweight' },
    { text: 'Green Energy Products', url: '/products/green-energy' },
    { text: 'Agricultural Products', url: '/products/agricultural' },
];

const technologyLinks: NavLink[] = [
    { text: 'HPDC', url: '/technologies/hpdc' },
    { text: 'CNC', url: '/technologies/cnc' },
    { text: 'GDC', url: '/technologies/gdc' },
    { text: 'Painting', url: '/technologies/painting' },
];

const Footer: React.FC = () => {
    return (
        <footer className="border-primary-600 relative border-t-4 bg-neutral-900 pt-20 pb-10 text-white">
            {/* Overlay Pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
            ></div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Company Info - Spans 5 columns on large screens */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="mb-8 inline-block">
                            <img src={Logo} alt="Logo" className="h-16" />
                        </Link>
                        <div className="relative mb-8">
                            <div className="from-primary-600 to-primary-400 mb-6 h-0.5 w-16 bg-gradient-to-r"></div>
                            <p className="mb-6 max-w-md leading-relaxed text-gray-400">
                                World's Leading Industry Corporation specializing in advanced die casting solutions with a commitment to creativity,
                                quality, and sustainability.
                            </p>

                            {/* ISO Certification Badge */}
                            <div className="inline-flex items-center rounded-sm border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm">
                                <span className="text-primary-500 mr-2 font-semibold">ISO 9001:2015</span>
                                <span className="text-gray-400">Certified Manufacturer</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <SocialMedia />
                    </div>

                    {/* Links Columns - Each spans 2 columns on large screens with offset */}
                    <div className="lg:col-span-2">
                        <h4 className="border-primary-600 mb-6 border-l-2 pl-3 text-lg font-semibold tracking-wider text-white uppercase">
                            Products
                        </h4>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.url} className="hover:text-primary-400 group flex items-center text-gray-400 transition">
                                        <span className="bg-primary-600 mr-2 inline-block h-0.5 w-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies Links */}
                    <div className="lg:col-span-2">
                        <h4 className="border-primary-600 mb-6 border-l-2 pl-3 text-lg font-semibold tracking-wider text-white uppercase">
                            Technologies
                        </h4>
                        <ul className="space-y-3">
                            {technologyLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.url} className="hover:text-primary-400 group flex items-center text-gray-400 transition">
                                        <span className="bg-primary-600 mr-2 inline-block h-0.5 w-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                   <Information />
                </div>

                {/* CTA Newsletter Section */}
                <Newsletter />

                {/* Copyright and Legal Links */}
                <Copyright />
            </div>
        </footer>
    );
};

export default Footer;
