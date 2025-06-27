import { useEffect } from 'react';
import { Header } from '@components/layout/Header';
import { Hero } from '@components/sections/Hero';
import { Projects } from '@components/sections/Projects';

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const href = this.getAttribute('href');
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
      </main>
    </>
  )
}

export default App
