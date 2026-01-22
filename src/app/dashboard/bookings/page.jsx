
"use client";
import React from 'react';
import { Search, Filter, ArrowDownToLine, MoreVertical } from 'lucide-react';

const bookings = [
  {
    id: "#BK-8492",
    event: "Tech Summit 2026",
    user: {
      name: "Sarah Smith",
      email: "sarah.s@example.com",
      avatar: "https://i.ibb.co/tYw53pS/user-dummy.png"
    },
    date: "Jan 22, 2026",
    tickets: 2,
    amount: "$598.00",
    status: "Confirmed"
  },
  {
    id: "#BK-8493",
    event: "Tech Summit 2026",
    user: {
      name: "Michael Brown",
      email: "m.brown@example.com",
      avatar: "https://i.ibb.co/tYw53pS/user-dummy.png"
    },
    date: "Jan 22, 2026",
    tickets: 1,
    amount: "$299.00",
    status: "Pending"
  },
   {
    id: "#BK-8491",
    event: "Music Festival Weekend",
    user: {
      name: "Emma Wilson",
      email: "emma.w@example.com",
      avatar: "https://i.ibb.co/tYw53pS/user-dummy.png"
    },
    date: "Jan 21, 2026",
    tickets: 4,
    amount: "$600.00",
    status: "Confirmed"
  }
];

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-secondary">Bookings</h1>
          <p className="text-secondary/60 text-sm mt-1">Track and manage ticket sales</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-secondary px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all text-sm shadow-sm">
          <ArrowDownToLine className="w-4 h-4" />
          Export CSV
        </button>
      </div>

       {/* Filters */}
       <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
          <input 
            type="text" 
            placeholder="Search bookings by name or ID..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter Status
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase">Booking ID</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase">Customer</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase">Event</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase">Tickets</th>
                 <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase">Amount</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 text-sm font-medium text-secondary">{booking.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
                        <img src={booking.user.avatar} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary">{booking.user.name}</p>
                        <p className="text-xs text-secondary/50">{booking.user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-secondary/70">{booking.event}</td>
                  <td className="px-6 py-4 text-sm text-secondary/70">{booking.date}</td>
                  <td className="px-6 py-4 text-sm text-secondary/70">{booking.tickets}</td>
                  <td className="px-6 py-4 text-sm font-medium text-secondary">{booking.amount}</td>
                  <td className="px-6 py-4">
                     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      booking.status === 'Confirmed' ? 'bg-green-50 text-green-700' :
                      'bg-yellow-50 text-yellow-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-secondary/40 hover:text-secondary p-1">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
