import { Link } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import React from 'react';

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

const MobileNavItem: React.FC<{
    item: NavItem;
    activeDropdown: string | null;
    onDropdownToggle: (href: string) => void;
    isActive: boolean;
    currentPath: string;
}> = ({ item, activeDropdown, onDropdownToggle, isActive, currentPath }) => {
    // Handle button styled nav items
    if (item.isButton) {
        return (
            <Link
                href={item.href}
                className={`from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 border-primary-800 my-3 block rounded-sm border bg-gradient-to-r px-4 py-2.5 text-center text-sm font-semibold tracking-wider text-white uppercase ${
                    isActive ? 'ring-primary-500/50 ring-2' : ''
                }`}
            >
                {item.label}
            </Link>
        );
    }

    // Handle dropdown nav items
    if (item.hasDropdown) {
        // Check if any dropdown items are active
        const isAnyDropdownItemActive = item.dropdownItems?.some((dropdownItem) => currentPath === dropdownItem.href);

        const isActiveState = isActive || isAnyDropdownItemActive;

        return (
            <div>
                <button
                    onClick={() => onDropdownToggle(item.href)}
                    className={`flex w-full items-center justify-between border-l-2 px-3 py-2.5 text-left text-sm font-medium tracking-wide uppercase transition-colors hover:bg-neutral-50 ${
                        isActiveState
                            ? 'text-primary-600 border-l-primary-500 bg-neutral-50'
                            : 'hover:text-primary-600 hover:border-l-primary-500 border-transparent text-neutral-800'
                    }`}
                >
                    <span>{item.label}</span>
                    <ChevronDown size={16} />
                </button>

                {activeDropdown === item.href && item.dropdownItems && (
                    <div className="mt-1 mb-2 ml-3 border-l border-neutral-200 pl-4">
                        {item.dropdownItems.map((dropdownItem) => {
                            const isDropdownItemActive = currentPath === dropdownItem.href;
                            return (
                                <Link
                                    key={dropdownItem.href}
                                    href={dropdownItem.href}
                                    className={`block px-3 py-2 text-sm ${
                                        isDropdownItemActive
                                            ? 'text-primary-600 bg-neutral-50 font-medium'
                                            : 'hover:text-primary-600 text-neutral-700'
                                    }`}
                                >
                                    {dropdownItem.label}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }

    // Regular nav items
    return (
        <Link
            href={item.href}
            className={`block border-l-2 px-3 py-2.5 text-sm font-medium tracking-wide uppercase transition-colors hover:bg-neutral-50 ${
                isActive
                    ? 'text-primary-600 border-l-primary-500 bg-neutral-50'
                    : 'hover:text-primary-600 hover:border-l-primary-500 border-transparent text-neutral-800'
            }`}
        >
            {item.label}
        </Link>
    );
};

export default MobileNavItem;
