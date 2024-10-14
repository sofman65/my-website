import { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { href: string; label: string }[];
  aiToolsItems: { href: string; label: string }[];
}

export function MobileSidebar({ isOpen, onClose, navItems, aiToolsItems }: MobileSidebarProps) {
  const [aiToolsOpen, setAiToolsOpen] = useState(false);

  const toggleAiTools = () => setAiToolsOpen(!aiToolsOpen);

  return (
    <div className={`fixed inset-0 flex z-40 md:hidden ${isOpen ? '' : 'pointer-events-none'}`}>
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-in-out duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div
        className={`relative flex-1 flex flex-col max-w-xs w-full bg-gray-900 transform transition ease-in-out duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
    
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
        
          <nav className="mt-12 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleAiTools}
              className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md w-full"
            >
              Resources
              <svg
                className={`ml-auto h-5 w-5 transform transition-transform duration-200 ${
                  aiToolsOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`mt-2 space-y-1 ${
                aiToolsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden transition-all duration-300 ease-in-out`}
            >
              {aiToolsItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400 group flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
