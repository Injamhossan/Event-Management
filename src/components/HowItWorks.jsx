
import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Create Your Event',
    description: 'Set up your event with all the details attendees need to know.'
  },
  {
    number: '2',
    title: 'Customize & Publish',
    description: 'Design your event page and publish it to the world.'
  },
  {
    number: '3',
    title: 'Sell Tickets',
    description: 'Start selling tickets and track your sales in real-time.'
  },
  {
    number: '4',
    title: 'Host & Engage',
    description: 'Welcome your guests and create unforgettable experiences.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">Four Simple Steps</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            Get your event up and running in no time with our streamlined process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-orange-100 hover:shadow-xl hover:shadow-orange-100/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-orange-50 text-primary font-bold text-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
              <p className="text-secondary/60 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
