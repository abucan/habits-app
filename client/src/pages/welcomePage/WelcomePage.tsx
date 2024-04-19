import {
  Navbar,
  Hero,
  Features,
  Benefits,
  LogoShowcase,
  Footer,
} from '@/components';

const WelcomePage = () => {
  return (
    <div className='bg-slate-50'>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <LogoShowcase />
      <Footer />
    </div>
  );
};

export default WelcomePage;
