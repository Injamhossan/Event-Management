
"use client";
import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar, 
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$24,560',
    change: '+12.5%',
    trend: 'up',
    icon: TrendingUp,
    color: 'bg-green-500'
  },
  {
    title: 'Active Events',
    value: '12',
    change: '+4.2%',
    trend: 'up',
    icon: Calendar,
    color: 'bg-primary'
  },
  {
    title: 'Total Bookings',
    value: '1,452',
    change: '+8.1%',
    trend: 'up',
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    title: 'Avg. Ticket Price',
    value: '$48.50',
    change: '-2.4%',
    trend: 'down',
    icon: BarChart3,
    color: 'bg-purple-500'
  }
];

const recentEvents = [
  {
    id: 1,
    name: 'Tech Summit 2026',
    date: 'Mar 15, 2026',
    status: 'Active',
    sales: '450/500',
    revenue: '$12,450',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    name: 'Digital Marketing Workshop',
    date: 'Feb 28, 2026',
    status: 'Published',
    sales: '28/50',
    revenue: '$1,400',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    name: 'Startup Networking Night',
    date: 'Apr 10, 2026',
    status: 'Draft',
    sales: '0/100',
    revenue: '$0',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=60'
  },
];

export default function DashboardPage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-secondary">
            Hello, {user?.displayName ? user.displayName.split(' ')[0] : 'Organizer'}!
          </h1>
          <p className="text-secondary/60 mt-1">Here's what's happening with your events today.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-secondary/60">Last updated: Just now</span>
          <button className="bg-white border border-gray-200 text-secondary px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
           const Icon = stat.icon;
           return (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.change}
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3 rotate-180" />}
                </div>
              </div>
              <h3 className="text-secondary/60 text-sm font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold text-secondary mt-1">{stat.value}</p>
            </div>
           )
        })}
      </div>

      {/* Recent Activity / Events */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-lg text-secondary">Recent Events</h2>
          <button className="text-primary text-sm font-medium hover:underline">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase tracking-wider">Event Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase tracking-wider">Sales</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary/50 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                        <img src={event.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-medium text-secondary text-sm">{event.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-secondary/70">{event.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.status === 'Active' ? 'bg-green-50 text-green-700' :
                      event.status === 'Draft' ? 'bg-gray-100 text-gray-600' :
                      'bg-blue-50 text-blue-700'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-secondary/70">
                    <div className="flex items-center gap-2">
                       <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${(parseInt(event.sales) / parseInt(event.sales.split('/')[1])) * 100}%` }} 
                          />
                       </div>
                       <span className="text-xs">{event.sales}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-secondary">{event.revenue}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-secondary/40 hover:text-secondary p-1 rounded-md hover:bg-gray-100 transition-all">
                      <MoreHorizontal className="w-5 h-5" />
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
