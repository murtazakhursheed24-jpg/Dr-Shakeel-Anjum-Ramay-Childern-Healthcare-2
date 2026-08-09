import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, MessageCircle, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data';
import { Button } from './ui/button';
import { cn } from '../utils';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Videos', href: '#videos' },
  { name: 'Location', href: '#location' },
  { name: 'FAQs', href: '#faqs' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white',
          isScrolled 
            ? 'border-slate-200 shadow-sm py-3' 
            : 'border-slate-200 shadow-sm py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a href="#home" className="flex flex-col group">
              <h1 className="text-xl font-bold tracking-tight text-blue-900 leading-none uppercase">
                {DOCTOR_INFO.name}
              </h1>
              <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest mt-1">
                {DOCTOR_INFO.title}
              </p>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="hover:text-blue-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href={DOCTOR_INFO.phoneUrl} className="flex items-center px-4 py-2 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors">
                <PhoneCall className="w-3 h-3 mr-2" />
                CALL NOW
              </a>
              <a href="#appointment" className="px-4 py-2 text-xs font-bold text-white bg-green-600 rounded-full hover:bg-green-700 shadow-md transition-all uppercase">
                BOOK APPOINTMENT
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-32 overflow-y-auto lg:hidden">
          <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-brand-navy pb-3 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-4">
              <Button asChild variant="outline" className="w-full justify-start gap-3 h-14 text-base border-brand-teal text-brand-teal">
                <a href={DOCTOR_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-3 h-14 text-base">
                <a href={DOCTOR_INFO.phoneUrl}>
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild className="w-full justify-start gap-3 h-14 text-base bg-brand-blue hover:bg-blue-700">
                <a href="#appointment" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
