
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Filter, Search } from 'lucide-react';

const allEvents = [
  {
    id: 1,
    title: "Tech Innovation Summit 2026",
    category: "Technology",
    date: "MAR 15",
    location: "San Francisco, CA",
    price: "$299",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Global Music Festival",
    category: "Music",
    date: "APR 22",
    location: "Austin, TX",
    price: "$149",
    image: "https://images.unsplash.com/photo-1459749411177-229323b941dc?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    category: "Business",
    date: "MAY 10",
    location: "New York, NY",
    price: "$199",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Modern Art Exhibition",
    category: "Art",
    date: "JUN 05",
    location: "London, UK",
    price: "$50",
    image: "https://images.unsplash.com/photo-1460661631639-0ee63614741e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Startup Networking Night",
    category: "Business",
    date: "JUL 12",
    location: "Berlin, DE",
    price: "Free",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=60"
  },
    {
    id: 6,
    title: "Food & Wine Festival",
    category: "Lifestyle",
    date: "AUG 20",
    location: "Paris, FR",
    price: "$75",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60"
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf9]">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-12 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Explore Events</h1>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                  Discover the best events happening in your city and around the world.
              </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Filters */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-4 items-center">
             <div className="relative flex-1 w-full">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/40" />
                 <input 
                    type="text" 
                    placeholder="Search for events..." 
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                 />
             </div>
             <div className="flex gap-4 w-full md:w-auto">
                 <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-secondary focus:outline-none focus:border-primary cursor-pointer">
                     <option>Any Category</option>
                     <option>Music</option>
                     <option>Business</option>
                     <option>Technology</option>
                 </select>
                 <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-secondary focus:outline-none focus:border-primary cursor-pointer">
                     <option>Any Location</option>
                     <option>New York</option>
                     <option>San Francisco</option>
                     <option>London</option>
                 </select>
             </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allEvents.map((event) => (
                  <div key={event.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                          <img 
                              src={event.image} 
                              alt={event.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase tracking-wider">
                              {event.category}
                          </div>
                      </div>
                      <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                              <div>
                                  <p className="text-primary font-bold text-sm tracking-wide mb-1">{event.date}</p>
                                  <h3 className="font-serif text-xl font-bold text-secondary leading-tight group-hover:text-primary transition-colors">
                                      {event.title}
                                  </h3>
                              </div>
                          </div>
                          <div className="flex items-center gap-2 text-secondary/60 text-sm mb-6">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                          </div>
                          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                              <span className="font-bold text-secondary text-lg">{event.price}</span>
                              <Link href={`/events/${event.id}`} className="text-sm font-semibold text-primary hover:text-secondary transition-colors">
                                  Get Tickets →
                              </Link>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
      
      <Footer />
    </div>
  );
}
