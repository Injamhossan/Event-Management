
"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Share2, 
  Heart, 
  CheckCircle, 
  User,
  Info 
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock Data (In a real app, you'd fetch this using the ID)
const eventData = {
  id: 1,
  title: "Tech Innovation Summit 2026",
  category: "Technology",
  date: "Sunday, March 15, 2026",
  time: "9:00 AM - 6:00 PM PST",
  location: "Moscone Center, San Francisco",
  price: 299,
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop&q=80",
  organizer: {
    name: "TechWorld Inc.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=60",
    followers: "12K followers"
  },
  description: `
    Join us for the biggest technology event of the year! The Tech Innovation Summit 2026 brings together industry leaders, innovators, and tech enthusiasts from around the globe.
    
    Experience continuous inspiration through keynote speeches, panel discussions, and hands-on workshops covering AI, Blockchain, Cloud Computing, and more. Network with over 5,000 attendees and discover the latest products from top tech companies.
    
    What to expect:
    - 50+ World-class speakers
    - Interactive workshops and demos
    - Networking sessions with industry leaders
    - Exclusive after-party event
  `,
  agenda: [
    { time: "09:00 AM", title: "Registration & Breakfast" },
    { time: "10:00 AM", title: "Opening Keynote: The Future of AI" },
    { time: "11:30 AM", title: "Panel Discussion: Sustainable Tech" },
    { time: "01:00 PM", title: "Lunch Break & Networking" },
    { time: "02:30 PM", title: "Workshop Tracks (A, B, C)" },
    { time: "05:00 PM", title: "Closing Remarks" }
  ]
};

export default function EventDetailsPage() {
  const { id } = useParams();
  const [ticketCount, setTicketCount] = useState(1);

  return (
    <div className="min-h-screen bg-[#fdfaf9]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-secondary">
        <img 
            src={eventData.image} 
            alt={eventData.title} 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfaf9] via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12">
            <div className="max-w-7xl mx-auto">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-bold tracking-wide uppercase mb-4 shadow-lg">
                    {eventData.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary mb-4 drop-shadow-sm">
                    {eventData.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-secondary/80 font-medium text-lg">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        {eventData.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        {eventData.location}
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Description */}
                <div>
                   <h2 className="text-2xl font-serif font-bold text-secondary mb-6">About This Event</h2>
                   <div className="prose prose-lg text-secondary/70 leading-relaxed whitespace-pre-line">
                       {eventData.description}
                   </div>
                </div>

                {/* Agenda */}
                <div>
                    <h2 className="text-2xl font-serif font-bold text-secondary mb-6">Event Schedule</h2>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100 shadow-sm">
                        {eventData.agenda.map((item, index) => (
                            <div key={index} className="flex gap-6 p-6 hover:bg-gray-50 transition-colors">
                                <span className="font-bold text-primary whitespace-nowrap">{item.time}</span>
                                <span className="font-medium text-secondary">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Organizer */}
                 <div>
                    <h2 className="text-2xl font-serif font-bold text-secondary mb-6">Organizer</h2>
                    <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                             <img src={eventData.organizer.avatar} alt={eventData.organizer.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-secondary">{eventData.organizer.name}</h3>
                            <p className="text-secondary/60 text-sm">{eventData.organizer.followers}</p>
                        </div>
                        <button className="ml-auto px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50">
                            Follow
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar / Ticket Card */}
            <div className="relative">
                <div className="sticky top-24 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-medium text-secondary/60">Price per person</span>
                        <span className="text-3xl font-bold text-secondary">${eventData.price}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                        <Clock className="w-5 h-5 text-secondary/40" />
                        <div>
                            <p className="text-xs text-secondary/60 font-medium uppercase">Date & Time</p>
                            <p className="text-sm font-bold text-secondary">{eventData.date}</p>
                            <p className="text-xs text-secondary/60">{eventData.time}</p>
                        </div>
                    </div>

                    {/* Ticket Counter */}
                    <div className="flex items-center justify-between mb-8 border border-gray-200 rounded-xl p-2">
                         <button 
                            onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                            className="w-10 h-10 flex items-center justify-center text-secondary hover:bg-gray-100 rounded-lg transition-colors"
                         >
                             -
                         </button>
                         <span className="font-bold text-lg text-secondary">{ticketCount}</span>
                         <button 
                            onClick={() => setTicketCount(ticketCount + 1)}
                            className="w-10 h-10 flex items-center justify-center text-secondary hover:bg-gray-100 rounded-lg transition-colors"
                         >
                             +
                         </button>
                    </div>

                    <div className="flex items-center justify-between mb-6 text-sm">
                        <span className="text-secondary/60">Total Amount</span>
                        <span className="font-bold text-secondary text-xl">${eventData.price * ticketCount}</span>
                    </div>

                    <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mb-4 flex items-center justify-center gap-2">
                        Get Tickets
                        <CheckCircle className="w-5 h-5" />
                    </button>
                    
                    <div className="grid grid-cols-2 gap-3">
                         <button className="py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-secondary hover:bg-gray-50 flex items-center justify-center gap-2">
                            <Heart className="w-4 h-4" />
                            Save
                        </button>
                        <button className="py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-secondary hover:bg-gray-50 flex items-center justify-center gap-2">
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                    </div>

                    <p className="text-center text-xs text-secondary/40 mt-6">
                        100% Guaranteed Entry • Secure Checkout
                    </p>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
