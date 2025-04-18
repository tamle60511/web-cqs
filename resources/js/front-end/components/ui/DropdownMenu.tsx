import { Link } from '@inertiajs/react';
import React from 'react'

export interface DropdownItem {
    label: string;
    href: string;
  }
  const DropdownMenu: React.FC<{
    isActive: boolean;
    items: DropdownItem[];
    isHoverable?: boolean;
    currentPath: string;
  }> = ({ isActive, items, isHoverable = false, currentPath }) => (
    <div
      className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-sm border border-neutral-200 z-10 transition-all duration-200 ${
        isActive
          ? "opacity-100 visible transform translate-y-0"
          : `opacity-0 invisible transform translate-y-2 ${isHoverable ? "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0" : ""}`
      }`}
    >
      <div className="py-1">
        {items.map((item) => {
          const isItemActive = currentPath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-sm ${
                isItemActive
                  ? "bg-primary-50 text-primary-700 font-medium"
                  : "text-neutral-700 hover:bg-neutral-100 hover:text-primary-600"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );

export default DropdownMenu
