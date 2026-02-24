import { WhyDevelopersSection } from '@/components/landing/why-developers-section';
import HeroSection from '@/components/landing/hero';
import NavigationBar from '@/components/navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <NavigationBar />
      <HeroSection />
      <WhyDevelopersSection />
      <Footer />
    </main>
  );
}
