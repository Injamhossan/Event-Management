
"use client";
import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-secondary">Analytics</h1>
          <p className="text-secondary/60 text-sm mt-1">Insights into your event performance</p>
        </div>
        <div className="flex bg-white rounded-lg border border-gray-200 p-1">
             <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-secondary rounded shadow-sm">7 Days</button>
             <button className="px-3 py-1.5 text-xs font-medium text-secondary/60 hover:bg-gray-50 rounded">30 Days</button>
             <button className="px-3 py-1.5 text-xs font-medium text-secondary/60 hover:bg-gray-50 rounded">All Time</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Main Chart Placeholder */}
         <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[400px] flex flex-col">
            <h3 className="text-lg font-bold text-secondary mb-6">Revenue Overview</h3>
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
                <div className="text-center text-secondary/40">
                    <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Chart Visualization Placeholder</p>
                    <p className="text-xs mt-1">Implement Chart.js or Recharts here</p>
                </div>
            </div>
         </div>

         {/* Side Stats */}
         <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-50 rounded-lg text-green-600">
                        <DollarSign className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-secondary/60">Total Earnings</span>
                </div>
                <p className="text-3xl font-bold text-secondary">$34,500</p>
                 <div className="flex items-center gap-1 mt-2 text-xs font-medium text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    +12% vs last month
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-secondary/60">Tickets Sold</span>
                </div>
                <p className="text-3xl font-bold text-secondary">2,345</p>
                 <div className="flex items-center gap-1 mt-2 text-xs font-medium text-blue-600">
                    <TrendingUp className="w-3 h-3" />
                    +5% vs last month
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}
