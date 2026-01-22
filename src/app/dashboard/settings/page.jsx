
"use client";
import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import { User, Mail, Lock, Bell, Shield } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-serif font-bold text-secondary">Settings</h1>
        <p className="text-secondary/60 text-sm mt-1">Manage your account preferences</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
           <h2 className="text-lg font-bold text-secondary">Profile Information</h2>
           <p className="text-sm text-secondary/60">Update your photo and personal details.</p>
        </div>
        
        <div className="p-6 space-y-6">
            <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 border-2 border-white ring-2 ring-gray-100">
                   {user?.photoURL ? (
                       <img src={user.photoURL} alt="" className="w-full h-full object-cover" />
                   ) : (
                       <div className="w-full h-full flex items-center justify-center text-secondary/40">
                           <User className="w-8 h-8" />
                       </div>
                   )}
                </div>
                <div>
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50 transition-colors">
                        Change Photo
                    </button>
                    <p className="text-xs text-secondary/40 mt-2">JPG, GIF or PNG. 1MB Max.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
                        <input 
                            type="text" 
                            defaultValue={user?.displayName}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Email Address</label>
                    <div className="relative">
                         <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
                         <input 
                            type="email" 
                            defaultValue={user?.email}
                            disabled
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm bg-gray-100 text-secondary/60 cursor-not-allowed"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Save Changes
            </button>
        </div>
      </div>

       <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
           <h2 className="text-lg font-bold text-secondary">Notifications</h2>
           <p className="text-sm text-secondary/60">Configure how you receive alerts.</p>
        </div>
        <div className="p-6 space-y-4">
             {[
                 { title: 'Email Notifications', desc: 'Receive emails about your account activity.' },
                 { title: 'New Event Bookings', desc: 'Get notified when someone books a ticket.' },
                 { title: 'Marketing Updates', desc: 'Receive news about product updates.' }
             ].map((item, i) => (
                 <div key={i} className="flex items-start justify-between">
                     <div>
                         <h4 className="text-sm font-medium text-secondary">{item.title}</h4>
                         <p className="text-xs text-secondary/60">{item.desc}</p>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                 </div>
             ))}
        </div>
      </div>
    </div>
  );
}
