import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TaglineSection from '@/components/TaglineSection';
import PropertySection from '@/components/PropertySection';
import AboutSection from '@/components/AboutSection';
import AreasSection from '@/components/AreasSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TaglineSection />
      <PropertySection />
      <AreasSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}