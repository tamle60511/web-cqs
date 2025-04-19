import { usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

import MainNavigation from '../components/ui/Navigation/MainNavigation';

interface NavItem {
    label: string;
    href: string;
    isButton?: boolean;
    hasDropdown?: boolean;
    dropdownItems?: { label: string; href: string }[];
}

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Get current URL path from Inertia
    const { url } = usePage();
    const currentPath = url;

    // Close mobile menu when path changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [currentPath]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleDropdownToggle = (href: string) => {
        if (activeDropdown === href) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(href);
        }
    };

    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        {
            label: 'Technologies',
            href: '/technologies',
            hasDropdown: true,
            dropdownItems: [
                { label: 'HPDC', href: '/technologies/hpdc' },
                { label: 'CNC', href: '/technologies/cnc' },
                { label: 'GDC', href: '/technologies/gdc' },
                { label: 'Painting', href: '/technologies/painting' },
                { label: 'Assembly', href: '/technologies/assembly' },
            ],
        },
        {
            label: 'Products',
            href: '/products',
            hasDropdown: true,
            dropdownItems: [
                { label: 'AL. Wheel', href: '/products/el-wheel' },
                { label: 'Light-Weight Products', href: '/products/lightweight' },
                { label: 'Green Energy Products', href: '/products/gren-energy' },
                { label: 'Agricultural Products', href: '/products/agricultura' },
            ],
        },
        {
            label: 'Industries',
            href: '/industry',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Industry 1', href: '/industry/industry1' },
                { label: 'Industry 2', href: '/industry/industry2' },
                { label: 'Industry 3', href: '/industry/industry3' },
            ],
        },
        { label: 'News', href: '/news' },
        { label: 'Contact Us', href: '/contact', isButton: true },
    ];
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`top-0 z-50 ${isSticky ? 'dark:bg-dark fixed w-full bg-white shadow-md transition duration-100' : 'bg-lightgray dark:bg-darkgray'}`}>
            <MainNavigation
                navItems={navItems}
                mobileMenuOpen={mobileMenuOpen}
                activeDropdown={activeDropdown}
                toggleMobileMenu={toggleMobileMenu}
                handleDropdownToggle={handleDropdownToggle}
                currentPath={currentPath}
            />
        </header>
    );
};

export default Header;
