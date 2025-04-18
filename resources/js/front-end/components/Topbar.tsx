import React from 'react'
import ContactInfo from './ContactInfo';
import { Mail, PhoneCall } from 'lucide-react';
import LanguageSelector from './LanguageSelector';



const TopBar: React.FC = () => (
    <div className="bg-neutral-900 border-b border-neutral-700 py-2">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <ContactInfo
              icon={<PhoneCall size={16} />}
              href="tel:+86-150-3419-1995"
              text="150-3419-1995"
            />
            <div className="hidden sm:block">
              <ContactInfo
                icon={<Mail size={16} />}
                href="mailto:info@zm-cnc.com"
                text="info@zm-cnc.com"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <LanguageSelector language="中文" href="#" />
            <div className="h-4 w-px bg-neutral-700"></div>
            <LanguageSelector language="English" href="#" />
          </div>
        </div>
      </div>
    </div>
  );

  export default TopBar;
