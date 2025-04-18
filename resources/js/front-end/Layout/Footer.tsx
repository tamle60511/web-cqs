import { Link } from '@inertiajs/react';
import React from 'react';
import Logo from '../images/logo.png';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  type LucideIcon
} from 'lucide-react';

interface SocialLink {
    platform: string;
    icon: LucideIcon;
    url: string;
}

interface NavLink {
    text: string;
    url: string;
}

interface ContactItem {
    text: string;
    icon: LucideIcon;
    link?: string;
}

const socialLinks: SocialLink[] = [
  { platform: 'facebook', icon: Facebook, url: '#'},
  { platform: 'twitter', icon: Twitter, url: '#' },
  { platform: 'linkedin', icon: Linkedin, url: '#' },
  { platform: 'youtube', icon: Youtube, url: '#' },
  { platform: 'instagram', icon: Instagram, url: '#' },
];

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
    { text: 'Assembly', url: '/technologies/assembly' },
];

// Cập nhật contactItems để thêm links và sử dụng Lucide Icons
const contactItems: ContactItem[] = [
    { text: 'Vietnam Headquarters', icon: MapPin },
    { text: '+84 000 000 000', icon: Phone, link: 'tel:+84000000000' },
    { text: 'info@cqs.com', icon: Mail, link: 'mailto:info@cqs.com' },
];

const legalLinks: NavLink[] = [
    { text: 'Privacy Policy', url: '/privacy-policy' },
    { text: 'Terms of Service', url: '/terms-of-service' },
    { text: 'Cookie Policy', url: '/cookie-policy' },
];

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-neutral-900 pt-20 pb-10 text-white border-t-4 border-primary-600">
            {/* Overlay Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                 style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Company Info - Spans 5 columns on large screens */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="mb-8 inline-block">
                            <img src={Logo} alt="Logo" className="h-16" />
                        </Link>
                        <div className="mb-8 relative">
                            <div className="h-0.5 w-16 bg-gradient-to-r from-primary-600 to-primary-400 mb-6"></div>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                                World's Leading Industry Corporation specializing in advanced
                                die casting solutions with a commitment to creativity,
                                quality, and sustainability.
                            </p>

                            {/* ISO Certification Badge */}
                            <div className="inline-flex items-center bg-neutral-800 border border-neutral-700 rounded-sm px-3 py-2 text-sm">
                                <span className="mr-2 text-primary-500 font-semibold">ISO 9001:2015</span>
                                <span className="text-gray-400">Certified Manufacturer</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-3">
                            {socialLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-sm
                                                 bg-neutral-800 border border-neutral-700 transition
                                                 hover:bg-primary-700 hover:border-primary-600 hover:-translate-y-1"
                                        aria-label={`Follow us on ${link.platform}`}
                                    >
                                        <IconComponent size={18} className="text-gray-300" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Columns - Each spans 2 columns on large screens with offset */}
                    <div className="lg:col-span-2">
                        <h4 className="mb-6 text-lg font-semibold uppercase tracking-wider text-white border-l-2 border-primary-600 pl-3">Products</h4>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                 <li key={link.text}>
                                 <Link
                                     href={link.url}
                                     className="text-gray-400 transition hover:text-primary-400 flex items-center group"
                                 >
                                     <span className="inline-block w-2 h-0.5 bg-primary-600 mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                                     {link.text}
                                 </Link>
                             </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies Links */}
                    <div className="lg:col-span-2">
                        <h4 className="mb-6 text-lg font-semibold uppercase tracking-wider text-white border-l-2 border-primary-600 pl-3">Technologies</h4>
                        <ul className="space-y-3">
                            {technologyLinks.map((link) => (
                                <li key={link.text}>
                                    <Link
                                        href={link.url}
                                        className="text-gray-400 transition hover:text-primary-400 flex items-center group"
                                    >
                                        <span className="inline-block w-2 h-0.5 bg-primary-600 mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-3">
                        <h4 className="mb-6 text-lg font-semibold uppercase tracking-wider text-white border-l-2 border-primary-600 pl-3">Contact</h4>
                        <ul className="space-y-4">
                            {contactItems.map((item) => {
                                const IconComponent = item.icon;
                                const content = (
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-sm bg-neutral-800 border border-neutral-700 flex items-center justify-center mr-4">
                                            <IconComponent className="text-primary-500" size={18} />
                                        </div>
                                        <span className="text-gray-400 pt-2">{item.text}</span>
                                    </div>
                                );

                                return (
                                    <li key={item.text}>
                                        {item.link ? (
                                            <a href={item.link} className="hover:text-primary-400 transition-colors">
                                                {content}
                                            </a>
                                        ) : (
                                            content
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* CTA Newsletter Section */}
                <div className="mt-16 border-t border-neutral-800 pt-8 pb-8">
                    <div className="bg-neutral-800 p-6 rounded-sm border border-neutral-700">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="mb-6 lg:mb-0 lg:mr-8">
                                <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
                                <p className="text-gray-400 text-sm">Stay updated with the latest products, technologies, and industry news</p>
                            </div>
                            <div className="w-full lg:w-auto flex flex-col sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-neutral-900 border border-neutral-700 rounded-sm py-2 px-4 text-white mb-3 sm:mb-0 sm:mr-2 focus:outline-none focus:border-primary-600"
                                />
                                <button className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-800 hover:to-primary-700 text-white py-2 px-6 rounded-sm text-sm uppercase tracking-wider font-semibold transition-all flex items-center justify-center border border-primary-800">
                                    Subscribe
                                    <ExternalLink size={16} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright and Legal Links */}
                <div className="mt-8 border-t border-neutral-800 pt-8 flex flex-col items-center justify-between md:flex-row">
                    <p className="mb-4 text-gray-500 md:mb-0 text-sm">© {new Date().getFullYear()} CQS Corporation. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {legalLinks.map((link, index) => (
                            <React.Fragment key={link.text}>
                                <Link href={link.url} className="text-gray-500 transition hover:text-primary-400 text-sm">
                                    {link.text}
                                </Link>
                                {index < legalLinks.length - 1 && (
                                    <span className="text-gray-700">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
