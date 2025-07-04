import Section from '@components/ui/Section';
import { Footer } from '@/components/layout/Footer';

export const Contact = () => {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="I'm always interested in discussing new opportunities, challenging projects, or just talking about technology."
      className="bg-surface-light dark:bg-surface-dark"
    >
      <Footer />
    </Section>
  );
};
