
"use client";
import React from 'react';
import { Search, Filter, MoreHorizontal, Calendar, MapPin, DollarSign } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Tech Summit 2026',
    date: 'Mar 15, 2026',
    location: 'San Francisco, CA',
    price: '$299',
    status: 'Active',
    sales: '450/500',
    revenue: '$12,450',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 2,
    title: 'Music Festival Weekend',
    date: 'Apr 20, 2026',
    location: 'Austin, TX',
    price: '$150',
    status: 'Published',
    sales: '120/1000',
    revenue: '$18,000',
    image: 'https://images.unsplash.com/photo-1459749411177-229323b941dc?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 3,
    title: 'Startup Pitch Night',
    date: 'Feb 28, 2026',
    location: 'New York, NY',
    price: '$50',
    status: 'Draft',
    sales: '0/100',
    revenue: '$0',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=300'
  }
];

export default function MyEventsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-secondary">My Events</h1>
          <p className="text-secondary/60 text-sm mt-1">Manage all your events in one place</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all text-sm">
          + Create New Event
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
          <input 
            type="text" 
            placeholder="Search events..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50">
             <Filter className="w-4 h-4" />
             Filter
           </button>
           <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50">
             Export
           </button>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6">
             <div className="w-full sm:w-48 h-32 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
               <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
             </div>
             
             <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
               <div>
                 <div className="flex items-start justify-between gap-4">
                   <h3 className="text-lg font-bold text-secondary truncate">{event.title}</h3>
                   <button className="text-secondary/40 hover:text-secondary">
                     <MoreHorizontal className="w-5 h-5" />
                   </button>
                 </div>
                 
                 <div className="mt-2 space-y-1">
                   <div className="flex items-center gap-2 text-sm text-secondary/60">
                     <Calendar className="w-4 h-4" />
                     {event.date}
                   </div>
                   <div className="flex items-center gap-2 text-sm text-secondary/60">
                     <MapPin className="w-4 h-4" />
                     {event.location}
                   </div>
                   <div className="flex items-center gap-2 text-sm text-secondary/60">
                     <DollarSign className="w-4 h-4" />
                     {event.price}
                   </div>
                 </div>
               </div>

               <div className="flex items-end justify-between gap-4 mt-6">
                 <div>
                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.status === 'Active' ? 'bg-green-50 text-green-700' :
                      event.status === 'Draft' ? 'bg-gray-100 text-gray-600' :
                      'bg-blue-50 text-blue-700'
                    }`}>
                      {event.status}
                    </span>
                 </div>
                 <div className="text-right">
                    <p className="text-sm font-medium text-secondary">{event.sales} Sold</p>
                    <p className="text-xs text-secondary/60">{event.revenue} Revenue</p>
                 </div>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
