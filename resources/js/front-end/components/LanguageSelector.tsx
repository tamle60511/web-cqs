import { Globe } from 'lucide-react';
import React from 'react'


const LanguageSelector: React.FC<{ language: string; href: string }> = ({
    language, href
  }) => (
    <a href={href} className="text-neutral-400 hover:text-primary-500 transition-colors px-2 py-1 flex items-center gap-1 font-medium">
      <Globe size={14} />
      {language}
    </a>
  );

export default LanguageSelector
