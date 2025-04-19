import React from 'react'

import { Search } from 'lucide-react';
import MobileNavItem from '../Navbar/MobileNavItem';

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

  const MobileNavigation: React.FC<{
    isOpen: boolean;
    navItems: NavItem[];
    activeDropdown: string | null;
    onDropdownToggle: (href: string) => void;
    currentPath: string;
  }> = ({ isOpen, navItems, activeDropdown, onDropdownToggle, currentPath }) => (
    isOpen ? (
      <div className="md:hidden bg-white border-t border-neutral-200 py-2">
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.href}
              item={item}
              activeDropdown={activeDropdown}
              onDropdownToggle={onDropdownToggle}
              isActive={currentPath === item.href}
              currentPath={currentPath}
            />
          ))}
          <div className="pt-2 mt-3 border-t border-neutral-200">
            <button className="w-full text-left px-3 py-2.5 text-sm font-medium text-neutral-600 hover:text-primary-600 flex items-center space-x-2">
              <Search size={16} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    ) : null
  );

export default MobileNavigation
