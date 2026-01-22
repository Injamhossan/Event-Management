
"use client";
import React, { useState } from 'react';
import { Upload, Calendar, MapPin, DollarSign, List, Edit3, Image as ImageIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function CreateEventPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#fdfaf9]">
      <Navbar />
      <div className="pt-24 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
             <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-secondary">Create New Event</h1>
                <p className="text-secondary/60 mt-1">Fill in the details to publish your event.</p>
             </div>

             {/* Steps */}
             <div className="flex items-center gap-4 mb-10">
                {[1, 2, 3].map((step) => (
                    <div key={step} className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div 
                            className={`h-full bg-primary transition-all duration-500 ${step <= activeStep ? 'w-full' : 'w-0'}`} 
                        />
                    </div>
                ))}
             </div>
             
            <form className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                 {/* Detail Section */}
                 <div className="space-y-6">
                     <div>
                         <label className="block text-sm font-medium text-secondary mb-2">Event Title</label>
                         <div className="relative">
                             <Edit3 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
                             <input type="text" placeholder="e.g. Annual Tech Conference 2026" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50" />
                         </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                             <label className="block text-sm font-medium text-secondary mb-2">Category</label>
                             <div className="relative">
                                 <List className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
                                 <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 appearance-none">
                                     <option>Select Category</option>
                                     <option>Music</option>
                                     <option>Technology</option>
                                     <option>Business</option>
                                 </select>
                             </div>
                         </div>
                         <div>
                             <label className="block text-sm font-medium text-secondary mb-2">Date & Time</label>
                             <div className="relative">
                                 <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
                                 <input type="datetime-local" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50" />
                             </div>
                         </div>
                     </div>
                     
                     <div>
                         <label className="block text-sm font-medium text-secondary mb-2">Location</label>
                         <div className="relative">
                             <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
                             <input type="text" placeholder="Venue Name or Address" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50" />
                         </div>
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-secondary mb-2">Description</label>
                        <textarea rows="4" placeholder="Describe your event..." className="w-full p-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 resize-none"></textarea>
                     </div>

                     {/* Image Upload */}
                     <div>
                        <label className="block text-sm font-medium text-secondary mb-2">Event Image</label>
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                                <ImageIcon className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-secondary">Click to upload or drag and drop</p>
                            <p className="text-xs text-secondary/40 mt-1">SVG, PNG, JPG or GIF (max. 3MB)</p>
                        </div>
                     </div>

                     <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
                         <button className="px-6 py-3 bg-white border border-gray-200 text-secondary font-medium rounded-xl hover:bg-gray-50">Save Draft</button>
                         <button className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/20">Publish Event</button>
                     </div>
                 </div>
            </form>
          </div>
      </div>
    </div>
  );
}
