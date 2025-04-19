import React from 'react'
import DesktopNavItem from '../Navbar/DesktopNavItem';
import { Search } from 'lucide-react';

// Types and Interfaces
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

  const DesktopNavigation: React.FC<{
    navItems: NavItem[];
    activeDropdown: string | null;
    onDropdownToggle: (href: string) => void;
    currentPath: string;
  }> = ({ navItems, activeDropdown, onDropdownToggle, currentPath }) => (
    <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
      {navItems.map((item) => (
        <DesktopNavItem
          key={item.href}
          item={item}
          activeDropdown={activeDropdown}
          onDropdownToggle={onDropdownToggle}
          isActive={currentPath === item.href}
          currentPath={currentPath}
        />
      ))}
      <button className="ml-2 p-2 rounded-sm border border-neutral-300 hover:border-primary-500 text-neutral-600 hover:text-primary-600 transition-colors">
        <Search size={18} />
      </button>
    </div>
  );

  // Mobile Menu Button Component
  const MobileMenuButton: React.FC<{
    isOpen: boolean;
    onToggle: () => void;
  }> = ({ isOpen, onToggle }) => (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center justify-center p-2 rounded-sm text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 border border-neutral-300 transition-colors"
      aria-expanded={isOpen}
    >
      <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  );


export default DesktopNavigation
