
"use client";

import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import { User, LayoutDashboard, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Signed out successfully");
    } catch (error) {
       console.error(error);
       toast.error("Failed to sign out");
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">EventHub</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/events" className="text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors">
            Events
          </Link>
          <Link href="/about" className="text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {user ? (
             <div className="flex items-center gap-4">
                <Link href="/dashboard" className="hidden md:flex items-center gap-2 text-sm font-medium text-secondary/80 hover:text-primary transition-colors bg-orange-50 px-4 py-2 rounded-full">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                </Link>
                
                <div className="group relative">
                    <button className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all">
                        {user.photoURL ? (
                            <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-secondary/40">
                                <User className="w-5 h-5" />
                            </div>
                        )}
                    </button>
                    {/* Simple Dropdown for Mobile/Desktop */}
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right z-50">
                        <div className="px-4 py-3 border-b border-gray-50">
                            <p className="text-sm font-semibold text-secondary truncate">{user.displayName || 'User'}</p>
                            <p className="text-xs text-secondary/50 truncate">{user.email}</p>
                        </div>
                        <Link href="/dashboard" className="md:hidden flex items-center gap-2 px-4 py-2 text-sm text-secondary/70 hover:bg-gray-50 hover:text-primary">
                            <LayoutDashboard className="w-4 h-4" />
                            Dashboard
                        </Link>
                        <button onClick={handleLogOut} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors text-left">
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </button>
                    </div>
                </div>
             </div>
          ) : (
            <>
              <Link href="/signin" className="text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="bg-primary text-white text-[15px] font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
