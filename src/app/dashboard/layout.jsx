
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Ticket, 
  Settings, 
  LogOut, 
  User,
  PlusCircle,
  BarChart3
} from 'lucide-react';
import { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';

const sidebarLinks = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Events', href: '/dashboard/events', icon: CalendarDays },
  { name: 'Create Event', href: '/create', icon: PlusCircle },
  { name: 'Bookings', href: '/dashboard/bookings', icon: Ticket },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-[#fdfaf9] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-gray-200 bg-white fixed h-full z-30">
        <div className="p-6 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-primary">
              <CalendarDays className="w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-secondary">EventHub</span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-orange-50 text-primary' 
                    : 'text-secondary/60 hover:bg-gray-50 hover:text-secondary'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-secondary/40'}`} />
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
               {user?.photoURL ? (
                   <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
               ) : (
                   <User className="w-5 h-5 text-secondary/40" />
               )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-secondary truncate">{user?.displayName || 'User'}</p>
              <p className="text-xs text-secondary/40 truncate">{user?.email}</p>
            </div>
          </div>
          <button 
            onClick={() => logOut()}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-xs font-medium text-secondary/60 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Header Placeholder (visible only on small screens) */}
      <div className="lg:hidden fixed top-0 w-full h-16 bg-white border-b border-gray-200 z-30 flex items-center justify-between px-4">
          <Link href="/" className="font-serif text-lg font-bold text-secondary">EventHub</Link>
          <button className="p-2 text-secondary">
             {/* Simple Menu Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
