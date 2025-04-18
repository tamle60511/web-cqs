
import { useState, useEffect } from 'react';
import axios from 'axios';

// Technology types
export type TechnologyType = 'hpdc' | 'cnc' | 'gdc' | 'painting' | 'assembly';

// Interface matching the TechnologyHeroProps needed by the component
export interface TechnologyData {
  labelText?: string;
  title: string;
  titleHighlight?: string;
  acronym?: string;
  description: string;
  image: {
    src: string;
    alt: string;
    referenceCode?: string;
    caption?: string;
  };
  specs: {
    icon: 'gauge' | 'checkCircle' | 'settings' | 'network';
    label: string;
    value: string;
  }[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

// Mock data with the correct types
const mockTechnologyData: Record<TechnologyType, TechnologyData> = {
  cnc: {
    labelText: 'Manufacturing Technology',
    title: 'Computer Numerical Control',
    titleHighlight: 'Control',
    acronym: 'CNC',
    description: 'Our precision CNC machining technology enables high-precision production of complex components with exceptional accuracy and surface finish.',
    image: {
      src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'CNC Machining',
      referenceCode: 'CNC-REF-01',
      caption: '5-axis CNC machine cutting complex geometry on aluminum workpiece'
    },
    specs: [
      {
        icon: 'gauge',
        label: 'Axes',
        value: '3-5 Axis Machining'
      },
      {
        icon: 'checkCircle',
        label: 'Tolerance',
        value: '±0.01mm'
      },
      {
        icon: 'settings',
        label: 'Spindle Speed',
        value: 'Up to 15,000 RPM'
      },
      {
        icon: 'network',
        label: 'Materials',
        value: 'Al, Steel, Titanium, Plastics'
      }
    ],
    primaryButtonText: 'Learn More',
    primaryButtonHref: '#learn-more',
    secondaryButtonText: 'View Process Gallery',
    secondaryButtonHref: '#process-gallery'
  },
  // Add other technologies with the same structure...
  hpdc: {
    title: 'High Pressure Die Casting',
    titleHighlight: 'Die Casting',
    acronym: 'HPDC',
    description: 'Our high pressure die casting technology delivers high-quality aluminum components with excellent dimensional accuracy and surface finish.',
    image: {
      src: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'HPDC Process',
    },
    specs: [
      {
        icon: 'gauge',
        label: 'Pressure',
        value: '70-140 MPa'
      },
      {
        icon: 'checkCircle',
        label: 'Tolerance',
        value: '±0.1mm'
      }
    ]
  },
  gdc: {
    title: 'Gravity Die Casting',
    description: 'Our gravity die casting process produces high-integrity aluminum parts where molten metal flows into permanent molds.',
    image: {
      src: 'https://images.unsplash.com/photo-1535813381253-2917d694ff3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Gravity Die Casting',
    },
    specs: [
      {
        icon: 'gauge',
        label: 'Fill Method',
        value: 'Gravity Fed'
      }
    ]
  },
  painting: {
    title: 'Advanced Surface Painting',
    description: 'Our automated painting systems provide high-quality surface finishes for metal components.',
    image: {
      src: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Automated Painting',
    },
    specs: [
      {
        icon: 'gauge',
        label: 'Application',
        value: 'Robotic Spray'
      }
    ]
  },
  assembly: {
    title: 'Precision Assembly',
    description: 'Our automated assembly lines combine robotic precision with skilled manual operations.',
    image: {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Precision Assembly',
    },
    specs: [
      {
        icon: 'gauge',
        label: 'Automation',
        value: 'Semi to Fully Automated'
      }
    ]
  }
};

interface UseTechnologyDataResult {
  data: TechnologyData | null;
  isLoading: boolean;
  error: string | null;
}

const useTechnologyData = (technology: TechnologyType): UseTechnologyDataResult => {
  const [data, setData] = useState<TechnologyData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Replace with your actual API endpoint
        const response = await axios.get<TechnologyData>(`/api/technologies/${technology}`);
        setData(response.data);
      } catch (err) {
        console.error('Error fetching technology data:', err);
        // Fallback to mock data if API fails
        setData(mockTechnologyData[technology]);
        setError('Failed to load data from API, using fallback data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [technology]);

  return { data, isLoading, error };
};

export default useTechnologyData;
