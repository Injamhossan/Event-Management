
import React from 'react';

const organizers = [
  {
    name: 'TechEvents Inc.',
    events: '48 events',
    color: 'bg-blue-500' // Fallback/marker
  },
  {
    name: 'Sound Wave Productions',
    events: '32 events',
    color: 'bg-green-500'
  },
  {
    name: 'Venture Hub',
    events: '28 events',
    color: 'bg-purple-500'
  },
  {
    name: 'Modern Art Collective',
    events: '56 events',
    color: 'bg-yellow-500'
  }
];

export default function FeaturedOrganizers() {
  return (
    <section className="py-24 bg-[#fdfaf9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">Featured Organizers</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">Trusted by the Best</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            Join thousands of successful event organizers who trust EventHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((org, index) => (
            <div key={index} className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-20 h-20 rounded-2xl ${org.color} bg-opacity-10 mb-6 flex items-center justify-center`}>
                <div className={`w-12 h-12 rounded-xl ${org.color} shadow-lg skew-x-3 opacity-90`} />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-1 text-center">{org.name}</h3>
              <p className="text-secondary/50 text-xs font-medium uppercase tracking-wide flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {org.events}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
