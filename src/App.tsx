/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VideoSection } from './components/VideoSection';
import { HowItWorks } from './components/HowItWorks';
import { AppointmentBooking } from './components/AppointmentBooking';
import { ClinicGallery } from './components/ClinicGallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-800 selection:bg-brand-teal/30 selection:text-brand-navy min-h-screen pb-[68px] md:pb-0 relative">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <About />
        <Services />
        <WhyChooseUs />
        <VideoSection />
        <HowItWorks />
        <AppointmentBooking />
        <ClinicGallery />
        <Testimonials />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </div>
  );
}
