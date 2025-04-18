import { usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

import TopBar from '../components/Topbar';
import MainNavigation from '../components/MainNavigation';

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Get current URL path from Inertia
    const { url } = usePage();
    const currentPath = url;

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        ]
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
        ]
      },
      {
        label: 'Industries',
        href: '/industry',
        hasDropdown: true,
        dropdownItems: [
          { label: 'Industry 1', href: '/industry/industry1' },
          { label: 'Industry 2', href: '/industry/industry2' },
          { label: 'Industry 3', href: '/industry/industry3' },
        ]
      },
      { label: 'News', href: '/news' },
      { label: 'Contact Us', href: '/contact', isButton: true },
    ];

    return (
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <TopBar />
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
