import AppLogo from '@/components/app-logo';
import { Link } from '@inertiajs/react';
import React from 'react'
import DesktopNavigation from './DesktopNavigation';
import MobileMenuButton from '../Navbar/MobileMenuButton';
import MobileNavigation from './MobileNavigation';



export interface DropdownItem {
    label: string;
    href: string;
  }
export interface NavItem {
    label: string;
    href: string;
    isButton?: boolean;
    hasDropdown?: boolean;
    dropdownItems?: DropdownItem[];
  }

  const MainNavigation: React.FC<{
    navItems: NavItem[];
    mobileMenuOpen: boolean;
    activeDropdown: string | null;
    toggleMobileMenu: () => void;
    handleDropdownToggle: (href: string) => void;
    currentPath: string;
  }> = ({ navItems, mobileMenuOpen, activeDropdown, toggleMobileMenu, handleDropdownToggle, currentPath }) => (
    <nav className="bg-gradient-to-r from-neutral-100 to-white border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <AppLogo />
            </Link>
          </div>

          <DesktopNavigation
            navItems={navItems}
            activeDropdown={activeDropdown}
            onDropdownToggle={handleDropdownToggle}
            currentPath={currentPath}
          />

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <MobileMenuButton isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        navItems={navItems}
        activeDropdown={activeDropdown}
        onDropdownToggle={handleDropdownToggle}
        currentPath={currentPath}
      />
    </nav>
  );

export default MainNavigation
