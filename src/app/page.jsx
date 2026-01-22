
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import UpcomingEvents from '@/components/UpcomingEvents';
import FeaturedOrganizers from '@/components/FeaturedOrganizers';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <UpcomingEvents />
      <FeaturedOrganizers />
      <Testimonials />
      
<CallToAction />
      <Footer />
    </main>
  );
}
