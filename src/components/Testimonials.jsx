
import React from 'react';

const testimonials = [
  {
    rating: 5,
    quote: "EventHub transformed how I manage my events. The platform is incredibly intuitive and the support team is amazing!",
    author: "Sarah Johnson",
    role: "Event Organizer",
    image: "/avatars/sarah.jpg" // Placeholder path
  },
  {
    rating: 5,
    quote: "We've increased our event attendance by 40% since switching to EventHub. The analytics are game-changing.",
    author: "Michael Chen",
    role: "Conference Director",
    image: "/avatars/michael.jpg"
  },
  {
    rating: 5,
    quote: "The ticketing system is seamless and our attendees love the easy check-in process. Highly recommended/10",
    author: "Emily Davis",
    role: "Music Festival Producer",
    image: "/avatars/emily.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">What People Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-secondary/70 mb-8 leading-relaxed italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                   {/* Placeholder for avatar */}
                   <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                   </svg>
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm">{item.author}</h4>
                  <p className="text-secondary/50 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
