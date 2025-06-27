import React from 'react';
import Container from '@components/ui/Container';
import * as LucideIcons from 'lucide-react';
import { socialLinks } from '@/data/socialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-light dark:bg-surface-dark py-12">
      <Container>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => {
                // @ts-ignore - Dynamically getting icon component
                const IconComponent = LucideIcons[link.icon.charAt(0).toUpperCase() + link.icon.slice(1)];

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Miguel Angel. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
