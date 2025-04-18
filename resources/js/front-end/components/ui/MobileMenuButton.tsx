import React from 'react';

const MobileMenuButton: React.FC<{
    isOpen: boolean;
    onToggle: () => void;
}> = ({ isOpen, onToggle }) => (
    <button
        type="button"
        onClick={onToggle}
        className="inline-flex items-center justify-center rounded-sm border border-neutral-300 p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-800"
        aria-expanded={isOpen}
    >
        <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
        </svg>
    </button>
);
export default MobileMenuButton;
