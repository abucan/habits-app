import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LogoShowcase } from '@/components/LogoShowcase';
import Navbar from '@/components/Navbar';

const WelcomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <LogoShowcase />
      <Footer />
    </>
  );
};

export default WelcomePage;
