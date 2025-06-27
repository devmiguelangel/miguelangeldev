import { useEffect } from 'react';
import { Header } from '@components/layout/Header';
import { Hero } from '@components/sections/Hero';
import { Projects } from '@components/sections/Projects';
import { Contact } from '@components/sections/Contact';
import { Skills } from '@components/sections/Skills';
import { Footer } from '@components/layout/Footer';

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (!href) return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
