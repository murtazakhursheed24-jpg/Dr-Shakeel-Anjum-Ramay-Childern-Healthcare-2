import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data';

export function FAQ() {
  return (
    <section id="faqs" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-blue-600 bg-blue-100 border border-blue-200 rounded-full w-max">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Answers to common questions about our clinic and services.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {FAQS.map((faq, index) => (
            <Accordion.Item 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden data-[state=open]:border-blue-400 transition-colors"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-5 px-6 text-left font-bold text-sm text-slate-900 hover:text-blue-700 transition-colors group">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-slate-600 text-sm leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="pb-5 px-6 pt-0">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
