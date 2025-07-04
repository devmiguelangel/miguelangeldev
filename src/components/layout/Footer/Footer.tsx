import Container from '@components/ui/Container';
import * as LucideIcons from 'lucide-react';
import Button from '@components/ui/Button';
import { socialLinks } from '@/data/socialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-light dark:bg-surface-dark">
      <Container className='flex flex-row justify-center'>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-center">
            <div className="flex space-x-4 mb-4">
              <Button variant='outline' className='text-sm flex items-center gap-2 rounded-2xl! cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400'>
                <LucideIcons.Mail size={16} />
                me@miguelangeldev.com
              </Button>

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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-md hover:shadow-lg"
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-12">
              &copy; {currentYear} @miguelangeldev. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
