import { Link } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import React from 'react'
import DropdownMenu from './ui/DropdownMenu';


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

  const DesktopNavItem: React.FC<{
    item: NavItem;
    activeDropdown: string | null;
    onDropdownToggle: (href: string) => void;
    isActive: boolean;
    currentPath: string;
  }> = ({ item, activeDropdown, onDropdownToggle, isActive, currentPath }) => {
    // Handle button styled nav items differently
    if (item.isButton) {
      return (
        <Link
          href={item.href}
          className={`font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 transition-all px-5 py-2.5 rounded-sm border border-primary-800 shadow-md text-sm uppercase tracking-wider transform hover:-translate-y-0.5 ${
            isActive ? 'ring-2 ring-primary-500/50' : ''
          }`}
        >
          {item.label}
        </Link>
      );
    }

    // Handle dropdown nav items
    if (item.hasDropdown) {
      // Check if any dropdown items are active
      const isAnyDropdownItemActive = item.dropdownItems?.some(dropdownItem =>
        currentPath === dropdownItem.href
      );

      const isActiveState = isActive || isAnyDropdownItemActive;

      return (
        <div className="relative group">
          <button
            onClick={() => onDropdownToggle(item.href)}
            className={`font-medium text-neutral-800 hover:text-primary-600 transition-colors px-3 py-2 text-sm uppercase tracking-wide flex items-center border-b-2 ${
              isActiveState
                ? 'text-primary-600 border-primary-500'
                : 'border-transparent hover:border-primary-500'
            }`}
          >
            {item.label}
            <ChevronDown size={16} className="ml-1" />
          </button>

          {/* Dropdown Menu */}
          {item.dropdownItems && (
            <DropdownMenu
              isActive={activeDropdown === item.href}
              items={item.dropdownItems}
              isHoverable={true}
              currentPath={currentPath}
            />
          )}
        </div>
      );
    }

    // Regular nav items
    return (
      <Link
        href={item.href}
        className={`font-medium transition-colors px-3 py-2 text-sm uppercase tracking-wide flex items-center border-b-2 ${
          isActive
            ? 'text-primary-600 border-primary-500'
            : 'text-neutral-800 hover:text-primary-600 border-transparent hover:border-primary-500'
        }`}
      >
        {item.label}
      </Link>
    );
  };


export default DesktopNavItem
