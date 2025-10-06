import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}