import { useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Container from '@components/ui/Container';
import Button from '@components/ui/Button';
import { socialLinks } from '@/data/socialLinks';
import avatar from '@/assets/images/avatar.jpg';

export const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const textContent = textElement.innerText;
    textElement.innerHTML = '';

    const typeText = async () => {
      for (let i = 0; i < textContent.length; i++) {
        if (textElement) {
          textElement.innerHTML += textContent.charAt(i);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      }
    };

    typeText();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-surface-light dark:bg-surface-dark">
      <Container className="z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Hello, I'm <span className="text-primary-600 dark:text-primary-400">Miguel Angel</span>
              </h1>
              <h2
                ref={textRef}
                className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-12"
              >
                Software Engineer & Product Designer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-slide-up">
                I'm a passionate Software Engineer with over 8 years of experience building web applications
                using modern technologies. I specialize in building scalable backend systems with Python and PHP,
                orchestrating cloud infrastructure with Kubernetes, and creating seamless CI/CD pipelines.
                <br />
                Passionate about clean code, automation, and modern technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Email:</p>
                <p className="text-gray-600 dark:text-gray-400">me@miguelangeldev.com</p>
              </div>
              {/* <div>
                <p className="font-medium text-gray-900 dark:text-white">Experience:</p>
                <p className="text-gray-600 dark:text-gray-400">8+ years</p>
              </div> */}
            </div>

            <div className="space-y-6">
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start">
                <div className="flex space-x-4">
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
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                      >
                        {IconComponent && <IconComponent size={20} />}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  className="group flex items-center gap-2 cursor-pointer"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download Resume
                  <Download size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <img
                  src={avatar}
                  alt="Miguel Angel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-400 dark:bg-primary-600 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-accent-400 dark:border-accent-500 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary-50 dark:from-primary-900/20 to-transparent z-0"></div>
    </section>
  );
};
